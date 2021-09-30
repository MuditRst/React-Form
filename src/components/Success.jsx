import react from "react";

function Success({value}){
    return(
        <div>
            <h1>Name: {value.name}</h1>
            <h1>Designation: {value.des}</h1>
        </div>
    )
}

export default Success;