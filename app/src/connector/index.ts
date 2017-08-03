export default class Connector {
  domain: string

  constructor(customDomain: string = '') {
    this.domain = customDomain.length ? customDomain : this.defaultDomain
  }

  get defaultDomain() {
    return process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : document.location.origin
  }

  connect(method: string, url: string, body: {} = {}) {
    return fetch(this.domain + url, this.requestHeaders(method, body))
    .then((response) => response.json())
    .catch((error) => {
      console.error(`Connector :: Error from request: ${this.domain + url}, with message: ${error.message}`)
      throw error
    })
  }

  requestHeaders(method: string, body = {}) {
    const headerData = {
      method: method,
      headers: {
        'Accept': 'application/json'
      }
    }

    if (method === 'GET') {
      return headerData
    }

    return {
      body,
      ...headerData
    }
  }

  getBodyByType(body: {}, bodyType: string) {
    switch (bodyType) {
      case 'json':
        return JSON.stringify(body)
      case 'file':
        return body
    }
  }

  GET(url: string) {
    return this.connect('GET', url)
  }

  DELETE(url: string, body: {}, type: string = 'json') {
    return this.connect('DELETE', url, this.getBodyByType(body, type))
  }

  POST(url: string, body: {}, type: string = 'json') {
    return this.connect('POST', url, this.getBodyByType(body, type))
  }

  PUT(url: string, body: {}, type: string = 'json') {
    return this.connect('PUT', url, this.getBodyByType(body, type))
  }
};
