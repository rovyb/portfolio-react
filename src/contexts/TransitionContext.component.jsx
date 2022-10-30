import React, {useState} from 'react'


export const TransitionContext = React.createContext({
  homeTransition: null,
  setHomeTransition: () => {}
})

export const TransitionProvider = ({children}) => {
  const [homeTransition, setHomeTransition] = useState()
  const values = {homeTransition, setHomeTransition}
  return <TransitionContext.Provider value={values}>
    {children}
  </TransitionContext.Provider>
}
