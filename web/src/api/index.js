import resolveMock from './mock'

const { fetch } = window

function getAPIBase () {
  return window.API_BASE || process.env.API_BASE
}

async function buildRequest (params) {
  const apiBase = getAPIBase()

  const { endpoint } = params
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }

  if (apiBase) {
    const response = await fetch(`${apiBase}/${endpoint}`, {
      headers
    })
    return response.json()
  }

  return resolveMock(endpoint)
}

export function getNavigation () {
  const params = {
    endpoint: 'api/v1/navigation'
  }
  return buildRequest(params)
}

export function getSummary () {
  const params = {
    endpoint: 'api/v1/summary'
  }
  return buildRequest(params)
}

export function getTable () {
  const params = {
    endpoint: 'api/v1/table'
  }
  return buildRequest(params)
}