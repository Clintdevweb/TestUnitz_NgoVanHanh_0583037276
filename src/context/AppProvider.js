import React, { createContext } from 'react'
import { datas } from '../data/data'

export const AppContext = createContext()

export default function AppProvider({children}) {
    const {data:{advisorProfileCollection:{items}}} = datas
    // console.log(items)
  return (
    <>
        <AppContext.Provider value={items}>
            {children}
        </AppContext.Provider>
    </>
  )
}
