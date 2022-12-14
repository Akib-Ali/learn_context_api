import { createContext } from "react"

 const AppContext = createContext()

 const AppProvider=({children})=>{


    const userdata={

              name: "Akib Ali",
              age: "24 year",
              profession: "Software Engineer",
              education : "Diploma In Information Technology"

                  }



    return(
        <div>
         <AppContext.Provider value={userdata}>
          {children}

         </AppContext.Provider>
        </div>
    )
}

export {AppContext,AppProvider}