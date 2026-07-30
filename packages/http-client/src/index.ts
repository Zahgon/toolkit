/* eslint-disable @typescript-eslint/no-explicit-any */

import * as http from 'http'
import * as https from 'https'
import * as ifm from './interfaces.js'
import * as net from 'net'
import * as pm from './proxy.js'
import * as tunnel from 'tunnel'
import {ProxyAgent} from 'undici'

export enum HttpCodes {
  OK = 200,
  MultipleChoices = 300,
  MovedPermanently = 301,
  ResourceMoved = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  SwitchProxy = 306,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  TooManyRequests = 429,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504
}

export enum Headers {
  Accept = 'accept',
  ContentType = 'content-type'
}

export enum MediaTypes {
  ApplicationJson = 'application/json'
}

/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
export function getProxyUrl(serverUrl: string): string {
  const proxyUrl = pm.getProxyUrl(new URL(serverUrl))
  return proxyUrl ? proxyUrl.href : ''
}

const HttpRedirectCodes: number[] = [
  HttpCodes.MovedPermanently,
  HttpCodes.ResourceMoved,
  HttpCodes.SeeOther,
  HttpCodes.TemporaryRedirect,
  HttpCodes.PermanentRedirect
]
const HttpResponseRetryCodes: number[] = [
  HttpCodes.BadGateway,
  HttpCodes.ServiceUnavailable,
  HttpCodes.GatewayTimeout
]
const RetryableHttpVerbs: string[] = ['OPTIONS', 'GET', 'DELETE', 'HEAD']
const ExponentialBackoffCeiling = 10
const ExponentialBackoffTimeSlice = 5

export class HttpClientError extends Error {
  constructor(message: string, statusCode: number) {
      throw new Error("STUB");
  }

  statusCode: number
  result?: any
}

export class HttpClientResponse {
  constructor(message: http.IncomingMessage) {
    this.message = message
  }

  message: http.IncomingMessage
  async readBody(): Promise<string> {
    return new Promise<string>(async resolve => {
        throw new Error("STUB");
    })
  }

  async readBodyBuffer?(): Promise<Buffer> {
      throw new Error("STUB");
  }
}

export function isHttps(requestUrl: string): boolean {
    throw new Error("STUB");
}

export class HttpClient {
  userAgent: string | undefined
  handlers: ifm.RequestHandler[]
  requestOptions: ifm.RequestOptions | undefined

  private _ignoreSslError = false
  private _socketTimeout: number | undefined
  private _allowRedirects = true
  private _allowRedirectDowngrade = false
  private _maxRedirects = 50
  private _allowRetries = false
  private _maxRetries = 1
  private _agent: any
  private _proxyAgent: any
  private _proxyAgentDispatcher: any
  private _keepAlive = false
  private _disposed = false

  constructor(
    userAgent?: string,
    handlers?: ifm.RequestHandler[],
    requestOptions?: ifm.RequestOptions
  ) {
      throw new Error("STUB");
  }

  async options(
    requestUrl: string,
    additionalHeaders?: http.OutgoingHttpHeaders
  ): Promise<HttpClientResponse> {
      throw new Error("STUB");
  }

  async get(
    requestUrl: string,
    additionalHeaders?: http.OutgoingHttpHeaders
  ): Promise<HttpClientResponse> {
    return this.request('GET', requestUrl, null, additionalHeaders || {})
  }

  async del(
    requestUrl: string,
    additionalHeaders?: http.OutgoingHttpHeaders
  ): Promise<HttpClientResponse> {
      throw new Error("STUB");
  }

  async post(
    requestUrl: string,
    data: string,
    additionalHeaders?: http.OutgoingHttpHeaders
  ): Promise<HttpClientResponse> {
    return this.request('POST', requestUrl, data, additionalHeaders || {})
  }

  async patch(
    requestUrl: string,
    data: string,
    additionalHeaders?: http.OutgoingHttpHeaders
  ): Promise<HttpClientResponse> {
      throw new Error("STUB");
  }

  async put(
    requestUrl: string,
    data: string,
    additionalHeaders?: http.OutgoingHttpHeaders
  ): Promise<HttpClientResponse> {
      throw new Error("STUB");
  }

  async head(
    requestUrl: string,
    additionalHeaders?: http.OutgoingHttpHeaders
  ): Promise<HttpClientResponse> {
      throw new Error("STUB");
  }

  async sendStream(
    verb: string,
    requestUrl: string,
    stream: NodeJS.ReadableStream,
    additionalHeaders?: http.OutgoingHttpHeaders
  ): Promise<HttpClientResponse> {
      throw new Error("STUB");
  }

  /**
   * Gets a typed object from an endpoint
   * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
   */
  async getJson<T>(
    requestUrl: string,
    additionalHeaders: http.OutgoingHttpHeaders = {}
  ): Promise<ifm.TypedResponse<T>> {
    additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
      additionalHeaders,
      Headers.Accept,
      MediaTypes.ApplicationJson
    )
    const res: HttpClientResponse = await this.get(
      requestUrl,
      additionalHeaders
    )
    return this._processResponse<T>(res, this.requestOptions)
  }

  async postJson<T>(
    requestUrl: string,
    obj: any,
    additionalHeaders: http.OutgoingHttpHeaders = {}
  ): Promise<ifm.TypedResponse<T>> {
      throw new Error("STUB");
  }

  async putJson<T>(
    requestUrl: string,
    obj: any,
    additionalHeaders: http.OutgoingHttpHeaders = {}
  ): Promise<ifm.TypedResponse<T>> {
      throw new Error("STUB");
  }

  async patchJson<T>(
    requestUrl: string,
    obj: any,
    additionalHeaders: http.OutgoingHttpHeaders = {}
  ): Promise<ifm.TypedResponse<T>> {
      throw new Error("STUB");
  }

  /**
   * Makes a raw http request.
   * All other methods such as get, post, patch, and request ultimately call this.
   * Prefer get, del, post and patch
   */
  async request(
    verb: string,
    requestUrl: string,
    data: string | NodeJS.ReadableStream | null,
    headers?: http.OutgoingHttpHeaders
  ): Promise<HttpClientResponse> {
    if (this._disposed) {
      throw new Error('Client has already been disposed.')
    }

    const parsedUrl = new URL(requestUrl)
    let info: ifm.RequestInfo = this._prepareRequest(verb, parsedUrl, headers)

    // Only perform retries on reads since writes may not be idempotent.
    const maxTries: number =
      this._allowRetries && RetryableHttpVerbs.includes(verb)
        ? this._maxRetries + 1
        : 1
    let numTries = 0

    let response: HttpClientResponse | undefined
    do {
      response = await this.requestRaw(info, data)

      // Check if it's an authentication challenge
      if (
        response &&
        response.message &&
        response.message.statusCode === HttpCodes.Unauthorized
      ) {
        let authenticationHandler: ifm.RequestHandler | undefined

        for (const handler of this.handlers) {
          if (handler.canHandleAuthentication(response)) {
            authenticationHandler = handler
            break
          }
        }

        if (authenticationHandler) {
          return authenticationHandler.handleAuthentication(this, info, data)
        } else {
          // We have received an unauthorized response but have no handlers to handle it.
          // Let the response return to the caller.
          return response
        }
      }

      let redirectsRemaining: number = this._maxRedirects
      while (
        response.message.statusCode &&
        HttpRedirectCodes.includes(response.message.statusCode) &&
        this._allowRedirects &&
        redirectsRemaining > 0
      ) {
        const redirectUrl: string | undefined =
          response.message.headers['location']
        if (!redirectUrl) {
          // if there's no location to redirect to, we won't
          break
        }
        const parsedRedirectUrl = new URL(redirectUrl)
        if (
          parsedUrl.protocol === 'https:' &&
          parsedUrl.protocol !== parsedRedirectUrl.protocol &&
          !this._allowRedirectDowngrade
        ) {
          throw new Error(
            'Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.'
          )
        }

        // we need to finish reading the response before reassigning response
        // which will leak the open socket.
        await response.readBody()

        // strip authorization header if redirected to a different hostname
        if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
          for (const header in headers) {
            // header names are case insensitive
            if (header.toLowerCase() === 'authorization') {
              delete headers[header]
            }
          }
        }

        // let's make the request with the new redirectUrl
        info = this._prepareRequest(verb, parsedRedirectUrl, headers)
        response = await this.requestRaw(info, data)
        redirectsRemaining--
      }

      if (
        !response.message.statusCode ||
        !HttpResponseRetryCodes.includes(response.message.statusCode)
      ) {
        // If not a retry code, return immediately instead of retrying
        return response
      }

      numTries += 1

      if (numTries < maxTries) {
        await response.readBody()
        await this._performExponentialBackoff(numTries)
      }
    } while (numTries < maxTries)

    return response
  }

  /**
   * Needs to be called if keepAlive is set to true in request options.
   */
  dispose(): void {
      throw new Error("STUB");
  }

  /**
   * Raw request.
   * @param info
   * @param data
   */
  async requestRaw(
    info: ifm.RequestInfo,
    data: string | NodeJS.ReadableStream | null
  ): Promise<HttpClientResponse> {
    return new Promise<HttpClientResponse>((resolve, reject) => {
        throw new Error("STUB");
    })
  }

  /**
   * Raw request with callback.
   * @param info
   * @param data
   * @param onResult
   */
  requestRawWithCallback(
    info: ifm.RequestInfo,
    data: string | NodeJS.ReadableStream | null,
    onResult: (err?: Error, res?: HttpClientResponse) => void
  ): void {
    if (typeof data === 'string') {
      if (!info.options.headers) {
        info.options.headers = {}
      }
      info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8')
    }

    let callbackCalled = false
    function handleResult(err?: Error, res?: HttpClientResponse): void {
      if (!callbackCalled) {
        callbackCalled = true
        onResult(err, res)
      }
    }

    const req: http.ClientRequest = info.httpModule.request(
      info.options,
      (msg: http.IncomingMessage) => {
          throw new Error("STUB");
      }
    )

    let socket: net.Socket
    req.on('socket', sock => {
        throw new Error("STUB");
    })

    // If we ever get disconnected, we want the socket to timeout eventually
    req.setTimeout(this._socketTimeout || 3 * 60000, () => {
        throw new Error("STUB");
    })

    req.on('error', function (err) {
        throw new Error("STUB");
    })

    if (data && typeof data === 'string') {
      req.write(data, 'utf8')
    }

    if (data && typeof data !== 'string') {
      data.on('close', function () {
          throw new Error("STUB");
      })

      data.pipe(req)
    } else {
      req.end()
    }
  }

  /**
   * Gets an http agent. This function is useful when you need an http agent that handles
   * routing through a proxy server - depending upon the url and proxy environment variables.
   * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
   */
  getAgent(serverUrl: string): http.Agent {
    const parsedUrl = new URL(serverUrl)
    return this._getAgent(parsedUrl)
  }

  getAgentDispatcher(serverUrl: string): ProxyAgent | undefined {
    const parsedUrl = new URL(serverUrl)
    const proxyUrl = pm.getProxyUrl(parsedUrl)
    const useProxy = proxyUrl && proxyUrl.hostname
    if (!useProxy) {
      return
    }

    return this._getProxyAgentDispatcher(parsedUrl, proxyUrl)
  }

  private _prepareRequest(
    method: string,
    requestUrl: URL,
    headers?: http.OutgoingHttpHeaders
  ): ifm.RequestInfo {
    const info: ifm.RequestInfo = <ifm.RequestInfo>{}

    info.parsedUrl = requestUrl
    const usingSsl: boolean = info.parsedUrl.protocol === 'https:'
    info.httpModule = usingSsl ? https : http
    const defaultPort: number = usingSsl ? 443 : 80

    info.options = <http.RequestOptions>{}
    info.options.host = info.parsedUrl.hostname
    info.options.port = info.parsedUrl.port
      ? parseInt(info.parsedUrl.port)
      : defaultPort
    info.options.path =
      (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '')
    info.options.method = method
    info.options.headers = this._mergeHeaders(headers)
    if (this.userAgent != null) {
      info.options.headers['user-agent'] = this.userAgent
    }

    info.options.agent = this._getAgent(info.parsedUrl)

    // gives handlers an opportunity to participate
    if (this.handlers) {
      for (const handler of this.handlers) {
        handler.prepareRequest(info.options)
      }
    }

    return info
  }

  private _mergeHeaders(
    headers?: http.OutgoingHttpHeaders
  ): http.OutgoingHttpHeaders {
    if (this.requestOptions && this.requestOptions.headers) {
      return Object.assign(
        {},
        lowercaseKeys(this.requestOptions.headers),
        lowercaseKeys(headers || {})
      )
    }

    return lowercaseKeys(headers || {})
  }

  /**
   * Gets an existing header value or returns a default.
   * Handles converting number header values to strings since HTTP headers must be strings.
   * Note: This returns string | string[] since some headers can have multiple values.
   * For headers that must always be a single string (like Content-Type), use the
   * specialized _getExistingOrDefaultContentTypeHeader method instead.
   */
  private _getExistingOrDefaultHeader(
    additionalHeaders: http.OutgoingHttpHeaders,
    header: string,
    _default: string
  ): string | string[] {
    let clientHeader: string | string[] | undefined
    if (this.requestOptions && this.requestOptions.headers) {
      const headerValue = lowercaseKeys(this.requestOptions.headers)[header]
      if (headerValue) {
        clientHeader =
          typeof headerValue === 'number' ? headerValue.toString() : headerValue
      }
    }

    const additionalValue = additionalHeaders[header]

    if (additionalValue !== undefined) {
      return typeof additionalValue === 'number'
        ? additionalValue.toString()
        : additionalValue
    }

    if (clientHeader !== undefined) {
      return clientHeader
    }

    return _default
  }

  /**
   * Specialized version of _getExistingOrDefaultHeader for Content-Type header.
   * Always returns a single string (not an array) since Content-Type should be a single value.
   * Converts arrays to comma-separated strings and numbers to strings to ensure type safety.
   * This was split from _getExistingOrDefaultHeader to provide stricter typing for callers
   * that assign the result to places expecting a string (e.g., additionalHeaders[Headers.ContentType]).
   */
  private _getExistingOrDefaultContentTypeHeader(
    additionalHeaders: http.OutgoingHttpHeaders,
    _default: string
  ): string {
      throw new Error("STUB");
  }

  private _getAgent(parsedUrl: URL): http.Agent {
    let agent
    const proxyUrl = pm.getProxyUrl(parsedUrl)
    const useProxy = proxyUrl && proxyUrl.hostname

    if (this._keepAlive && useProxy) {
      agent = this._proxyAgent
    }

    if (!useProxy) {
      agent = this._agent
    }

    // if agent is already assigned use that agent.
    if (agent) {
      return agent
    }

    const usingSsl = parsedUrl.protocol === 'https:'
    let maxSockets = 100
    if (this.requestOptions) {
      maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets
    }

    // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
    if (proxyUrl && proxyUrl.hostname) {
      const agentOptions = {
        maxSockets,
        keepAlive: this._keepAlive,
        proxy: {
          ...((proxyUrl.username || proxyUrl.password) && {
            proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
          }),
          host: proxyUrl.hostname,
          port: proxyUrl.port
        }
      }

      let tunnelAgent: Function
      const overHttps = proxyUrl.protocol === 'https:'
      if (usingSsl) {
        tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp
      } else {
        tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp
      }

      agent = tunnelAgent(agentOptions)
      this._proxyAgent = agent
    }

    // if tunneling agent isn't assigned create a new agent
    if (!agent) {
      const options = {keepAlive: this._keepAlive, maxSockets}
      agent = usingSsl ? new https.Agent(options) : new http.Agent(options)
      this._agent = agent
    }

    if (usingSsl && this._ignoreSslError) {
      // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
      // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
      // we have to cast it to any and change it directly
      agent.options = Object.assign(agent.options || {}, {
        rejectUnauthorized: false
      })
    }

    return agent
  }

  private _getProxyAgentDispatcher(parsedUrl: URL, proxyUrl: URL): ProxyAgent {
    let proxyAgent

    if (this._keepAlive) {
      proxyAgent = this._proxyAgentDispatcher
    }

    // if agent is already assigned use that agent.
    if (proxyAgent) {
      return proxyAgent
    }

    const usingSsl = parsedUrl.protocol === 'https:'
    proxyAgent = new ProxyAgent({
      uri: proxyUrl.href,
      pipelining: !this._keepAlive ? 0 : 1,
      ...((proxyUrl.username || proxyUrl.password) && {
        token: `Basic ${Buffer.from(
          `${proxyUrl.username}:${proxyUrl.password}`
        ).toString('base64')}`
      })
    })
    this._proxyAgentDispatcher = proxyAgent

    if (usingSsl && this._ignoreSslError) {
      // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
      // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
      // we have to cast it to any and change it directly
      proxyAgent.options = Object.assign(proxyAgent.options.requestTls || {}, {
        rejectUnauthorized: false
      })
    }

    return proxyAgent
  }

  private _getUserAgentWithOrchestrationId(userAgent?: string): string {
      throw new Error("STUB");
  }

  private async _performExponentialBackoff(retryNumber: number): Promise<void> {
    retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber)
    const ms: number = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber)
    return new Promise(resolve => { throw new Error("STUB"); })
  }

  private async _processResponse<T>(
    res: HttpClientResponse,
    options?: ifm.RequestOptions
  ): Promise<ifm.TypedResponse<T>> {
    return new Promise<ifm.TypedResponse<T>>(async (resolve, reject) => {
        throw new Error("STUB");
    })
  }
}

const lowercaseKeys = (obj: {[index: string]: any}): any =>
  Object.keys(obj).reduce((c: any, k) => { throw new Error("STUB"); }, {})
