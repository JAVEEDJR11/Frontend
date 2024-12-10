import React, { Component } from "react";
const HocComp=(Wrapperdata)=>{
    class Hoc extends Component{
        constructor(props){
            super(props)

            this.state={
                count:0
            }
        }

        incrementCounter=() =>{
            this.setState((prevstate)=>({count:prevstate.count+1}));
        }
        render(){
            return<Wrapperdata count={this.state.count} incrementCounter={this.incrementCounter}></Wrapperdata>
        }
    }
  
    

        return Hoc;
            
}
export default HocComp