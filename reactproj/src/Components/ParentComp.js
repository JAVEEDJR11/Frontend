import React, { Component } from "react";
import Childcomp from "./Childcomp";
class ParentComp extends Component{
    constructor(){
        super();
        this.state={
            empName:"Javeed",
            empid:2000,
            empSal:3000,
            
        }

    }
    changestateData =()=>{
        this.setState({empName:"Javeed",empid:this.state.empid+1000,empSal:this.state.empSal+1000});
    }
       

    // render(){
        
    //         return (
    //         <div>
    //             <h2>This is a PArent component</h2>
    //             <p>Employe Name:<strong>{this.state.empName}</strong>and
    //             Id:<strong>{this.state.empid}</strong>
    //             </p>

    //             <button type="button" onClick={()=>this.changestateData()}>
    //                 Replace
    //             </button>
    //             </div>
    //         )
    //     }
    render(){
        const {empName,empSal} = this.state; // destructing of state
        const {gender,contact} = this.props; // destructing of props
        return(
            <div>
                {/* <p>Employee Name:{empName} and salary:{empSal}</p>
                <p>Gender:{gender} and Contact:{contact}</p> */}
                <h2>This is a parent component</h2>
                <p>name <strong>{empName}</strong>,salary <strong>{empSal}</strong></p>
                <p>gender <strong>{gender}</strong>,contact <strong>{contact}</strong></p>


                <button type="button" onClick={()=>this.changestateData()}>change</button>
                <Childcomp empName="LOgesh" empSal={50000}></Childcomp>
            </div>
        )
    }
    
}
export default ParentComp;
