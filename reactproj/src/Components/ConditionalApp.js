import React, {Component} from "react";
class ConditionalApp extends Component{
    constructor(){
        super();
        this.state={
            isCond:false
        }
    }
    render(){
        // // return(
        // //     <div>
        // //         <h2> This is a Conditional statments </h2>


        // //     </div>
        // )
        // if(this.state.isCond){
        //     return<h2>This is Unthinkable</h2>
        // }
        // else{
        //     return<h2>This is Thinkable</h2>
        // }
        let msg="";
        if(this.state.isCond)
         msg="the User success"
        else{
        msg="the msg is failure";
        }  
        // return <h2>{msg}</h2>
    
    return (this.state.isCond) ? <h2>Admin login</h2> : <h2>User login</h2>
}

} 
export default ConditionalApp;