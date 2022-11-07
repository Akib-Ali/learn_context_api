import { useContext } from "react"
import { AppContext } from "./appprovider"


export const ChildComponent=()=>{

    const userdata = useContext(AppContext)

    console.log(userdata)



    return(
        <div>
          <h3>Child Component</h3>
          <h2>{ `Name :   ${userdata.name}`}</h2>
          <h3>{`Age : ${userdata.age}`}</h3>
          <h3>{`Position : ${userdata.position}`}</h3>
          <h3>{`Salary : ${userdata.salary}`}</h3>

            
        </div>
    )
}