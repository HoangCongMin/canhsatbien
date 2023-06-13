import {  createContext, useState } from 'react'


export interface AppContextInterface {
  isModelOpen: boolean
  setIsModelOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const getInitialAppContext: () => AppContextInterface = () => ({
  isModelOpen: false,
  setIsModelOpen: () => null

})

const initialAccess = getInitialAppContext()


export const myCreateContext = createContext<AppContextInterface>(initialAccess)

export const AppContextProvider = ({
  children, defaultValue = initialAccess
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}
) => {
  const [isModelOpen, setIsModelOpen] = useState<boolean>(defaultValue.isModelOpen)

  return (
    <myCreateContext.Provider value={{ isModelOpen, setIsModelOpen }}>
      {children}
    </myCreateContext.Provider>
  )
}
