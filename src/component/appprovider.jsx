import { createContext } from "react"

const AppContext = createContext()

const AppProvider=({children})=>{


    const userinformation={
         name:"Akib Ali Siddiqui",
         age:"24",
         position:"Software Engineer",
         salary:"25000"
   }


   return(

    <div>
      <AppContext.Provider  value={userinformation}>
      {children}
   </AppContext.Provider>
    </div>
   )

}

export {AppContext,AppProvider}