import { useContext } from "react";
import { AppContext } from "./appprovider";

export const ChildComponent=()=>{

    const userData = useContext(AppContext)

    return(
        <div>
          <h3>Child Component</h3>

            <h3>{`Name : ${userData.name}`}</h3>
            <h3>{`Age : ${userData.age}`}</h3>
            <h3>{`Position : ${userData.position}`}</h3>
            <h3>{`Salary : ${userData.salary} Rs`}</h3>
            
        </div>
    )
}