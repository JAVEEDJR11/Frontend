import react  from "react";


const Childcomp=(props)=>{
    return(
        
        <div>
            <h2>HII</h2>
            <p>
            Name:{props.empname} and salary:{props.empsal}</p>
            <h2 onMouseOver={props.manageState}>change data</h2>
        </div>
       
       
    )
}
export default Childcomp;