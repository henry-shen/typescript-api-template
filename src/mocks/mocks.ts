const mockUser = {
  id: '753a2338-0f9c-447e-b8ae-89313fc42de4',
  username: 'admin',
  password: 'admin'
}

export const mockFindCredentials = (credentials: any) => {
  if (credentials.username === mockUser.username && credentials.password === mockUser.password) return mockUser
  else return undefined
}

export const mockFindUser = (username: string) => {
  if (username === mockUser.username) return mockUser
}
