import React, {Component} from "react";
class HomeWork extends Component{
    constructor(){
        super();
        this.state={
            ename:"javeed",
            eid1:1000,
           

        }
    }
    add =()=>{
       // window.alert("hii");
        this.setState({empname:"Javeed",eid1:this.state.eid1+1000});

    }
    Minus=()=>{
       // window.alert("h");
        this.setState({empname:"Javeed",eid1:this.state.eid1-1000});
    }
    Reset=()=>{
        // window.alert("h");
         this.setState({empname:"Javeed",eid1:this.state.eid1=0});
     }

       

    render(){
        
            return (
            <div>
                <h2>This is My perfect victory</h2>
                <p>Employe Name:<strong>{this.state.ename}</strong>and
                Id1:<strong>{this.state.eid1}</strong>
                </p>

                <button type="button" onClick={()=>this.add()}>
                   Add
                </button>
                <button type="button" onClick={()=>this.Minus()}>
                    Minus
                </button>
                <button type="button" onClick={()=>this.Reset()}>
                    Reset
                </button>
                </div>
            )
        }
    }
export default HomeWork;