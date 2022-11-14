export type RequestUser = {
  userId: string,
  department: string | null
}

export type Companies = {
    companyIds: string[]
}

type Compatibility = {
    name: string,
    distance: string,
    position: string,
    rate: number
}

export type Products = {
    products: string[]
}

export type User = {
    user: {
        userId: string,
        name: string,
        position: string,
        department: string,
        product: string,
        allCompatibility: Compatibility[],
        departmentCompatibility: Compatibility[],
        departments: string[],
        total: number
    }
    error: string | null,
}

export type Users = {
    users: {
        userId: string,
        name: string,
        position: string,
        department: string,
        product: string
    },
    error: string | null,
}

