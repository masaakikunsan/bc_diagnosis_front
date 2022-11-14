import {
  RequestUser,
  Companies,
  Products,
  User,
  Users
} from '~/types/struct'

const url = 'https://gateway-i7gsnosdgq-an.a.run.app/v1'

export async function getCompanies(): Promise<Companies> {
  const response = await fetch(`${url}/list_companies`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    }
  })
  return response.json()
}

export async function getProducts(companyId: string): Promise<Products> {
    const response = await fetch(`${url}/list_products`, {
        method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      companyId
    })
  })
  return response.json()
}

export async function getUsers(companyId: string): Promise<Users> {
    const response = await fetch(`${url}/list_users`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      companyId
    })
  })
  return response.json()
}

export async function getUser(req: RequestUser): Promise<User> {
  const response = await fetch(`${url}/get_user`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId: req.userId,
      department: req.department
    })
  })
  return response.json()
}
