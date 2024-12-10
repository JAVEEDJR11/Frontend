import React, {Component} from "react";

class MyStateComp extends Component{
    constructor(){
        super();
        this.state={
            empName:"Javeed",
            empid:2000
        }

    }
    changestateData =()=>{
        this.setState({empName:"Javeed",empid:this.state.empid+1000});
    }
       

    render(){
        
            return (
            <div>
                <h2>This is My perfect victory</h2>
                <p>Employe Name:<strong>{this.state.empName}</strong>and
                Id:<strong>{this.state.empid}</strong>
                </p>

                <button type="button" onClick={()=>this.changestateData()}>
                    Replace
                </button>
                </div>
            )
        }
      

    
}
export default MyStateComp;