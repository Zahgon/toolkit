export function getProxyUrl(reqUrl: URL): URL | undefined {
  const usingSsl = reqUrl.protocol === 'https:'

  if (checkBypass(reqUrl)) {
    return undefined
  }

  const proxyVar = (() => {
      throw new Error("STUB");
  })()

  if (proxyVar) {
    try {
      return new DecodedURL(proxyVar)
    } catch {
      if (!proxyVar.startsWith('http://') && !proxyVar.startsWith('https://'))
        return new DecodedURL(`http://${proxyVar}`)
    }
  } else {
    return undefined
  }
}

export function checkBypass(reqUrl: URL): boolean {
  if (!reqUrl.hostname) {
    return false
  }

  const reqHost = reqUrl.hostname
  if (isLoopbackAddress(reqHost)) {
    return true
  }

  const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || ''
  if (!noProxy) {
    return false
  }

  // Determine the request port
  let reqPort: number | undefined
  if (reqUrl.port) {
    reqPort = Number(reqUrl.port)
  } else if (reqUrl.protocol === 'http:') {
    reqPort = 80
  } else if (reqUrl.protocol === 'https:') {
    reqPort = 443
  }

  // Format the request hostname and hostname with port
  const upperReqHosts = [reqUrl.hostname.toUpperCase()]
  if (typeof reqPort === 'number') {
    upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`)
  }

  // Compare request host against noproxy
  for (const upperNoProxyItem of noProxy
    .split(',')
    .map(x => { throw new Error("STUB"); })
    .filter(x => { throw new Error("STUB"); })) {
    if (
      upperNoProxyItem === '*' ||
      upperReqHosts.some(
        x =>
          { throw new Error("STUB"); }
      )
    ) {
      return true
    }
  }

  return false
}

function isLoopbackAddress(host: string): boolean {
  const hostLower = host.toLowerCase()
  return (
    hostLower === 'localhost' ||
    hostLower.startsWith('127.') ||
    hostLower.startsWith('[::1]') ||
    hostLower.startsWith('[0:0:0:0:0:0:0:1]')
  )
}

class DecodedURL extends URL {
  private _decodedUsername: string
  private _decodedPassword: string

  constructor(url: string | URL, base?: string | URL) {
    super(url, base)
    this._decodedUsername = decodeURIComponent(super.username)
    this._decodedPassword = decodeURIComponent(super.password)
  }

  get username(): string {
      throw new Error("STUB");
  }

  get password(): string {
      throw new Error("STUB");
  }
}
