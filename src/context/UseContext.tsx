import { createContext } from 'react'

const UserContext = createContext<string>('')

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider value='test'>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }