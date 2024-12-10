// import React,{Component} from "react";

// class ClassComp extends Component{

//     render(){
//         return <h2>This is Class Component</h2>
//     }
// }

// export default ClassComp;
const ClassComp =(props) => {
    return(
        <>
        <h2>THis is a class component</h2>
        <p>This is<strong>{props.fname}</strong>, I am: <strong>{props.post}</strong> </p>
        </>
        )
    };
    export default ClassComp;