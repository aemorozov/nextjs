export type contactType = {
    id: string,
    name: string,
    email: string,
    address: addressType,
}

export type addressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
}

export type socialsType = {
    id: string,
    icon: string,
    path: string
}

export type postType = {
    title: string,
    body: string
}