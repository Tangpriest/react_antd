import React from 'react'

export const GlobalContext = React.createContext({})

export function GlobalProvider(props) {
  const [collapsed, changeCollapsed] = React.useState(false)
  return (
    <GlobalContext.Provider
      value={{
        collapsed,
        changeCollapsed
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
