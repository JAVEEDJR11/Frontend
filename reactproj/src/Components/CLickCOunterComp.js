import React, {Component} from "react";
import HocComp from "./HocComp";
class CLickCOunterCOmp extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //            Ename:"Javeed",
    //            Ecount:0   
    //     }
    // }
    
    //    counter=()=>{
    //     window.alert("Increment");
    //         this.setState({Ename:"Javeed",Ecount:this.state.Ecount+1})
    //     }
           
        
        render(){
        
            return (
                <div>
                 <p>Employe Name:<strong>{this.props.Ename}</strong>and
                Count:<strong>{this.props.count}</strong>
                </p>
                <button type="button" onClick={this.props.incrementCounter}>
                   Count
                </button>
                </div>
            )

    }
}
// export default CLickCOunterCOmp;
export default HocComp(CLickCOunterCOmp)