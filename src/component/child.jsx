import { useContext } from "react"
import { AppContext } from "./dataprovider"

export const Child=()=>{

    const receivedata= useContext(AppContext)

    console.log(receivedata)



    return(

        <div>
            <h3>Child Component</h3>
            <h3>{`Name :${receivedata.name}`}</h3>
            <h3>{`Age : ${receivedata.age}`}</h3>
            <h3>{`Qualification: ${receivedata.education}`}</h3>
            <h3>{`Profession : ${receivedata.profession}`}</h3>
             
        </div>
    )
}