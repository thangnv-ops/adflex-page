interface EndPointObject {
  baseUrl: string
  child: {
    [x: string]: string
  }
}

export const userEndpoints: EndPointObject = {
  baseUrl: '/api/user',
  child: {
    authLogin: '/login',
    getList: '/get-list',
    add: '/add-new',
    update: '/update-user',
  },
}

export const contentEndpoints: EndPointObject = {
  baseUrl: '/api/content',
  child: {
    authLogin: '/login',
    getList: '/get-list',
    add: '/add-new',
    update: '/update-content',
    delete: '/delete-content',
  },
}

export const getEndpoint = (
  endpointObject: EndPointObject,
  target: keyof typeof endpointObject.child
) => {
  return `${endpointObject.baseUrl}${endpointObject.child[target]}`.replaceAll('//', '/')
}
