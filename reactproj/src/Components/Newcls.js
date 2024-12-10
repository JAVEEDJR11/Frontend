import React,{Component} from 'react';

class Newcls extends Component{
    greeting=() =>{
        window.alert("hello everyone");
    };

    welcome=(...std)=>{
        window.alert(`welcome you ${std}`);
    };

    render(){
        return(
            <div>
            <h2>This is event components</h2>
            <button type="button" onClick={()=>this.greeting()}>call greeting</button>
            <button type="button" onClick={()=>this.welcome("Dhanush","Ravi")}>call welcome</button>
            {/* <h2 onMouseOver={()=>this.welcome("sai","javeed","dharun")}>Hover on me to call welcome</h2> */}
            </div>
        )
    };
}

export default Newcls;
