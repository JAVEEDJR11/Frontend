import React from "react";
const Usecomp=(props)=>
    {
        if(props.user==="jogir"){
            throw Error("not a user")
        }
        return (
        <div>
            <h2>
          user:{props.user}</h2>

        </div>
        )

}
export default Usecomp

