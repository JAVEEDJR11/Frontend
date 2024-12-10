//  const Funccompt=()=>{
//     return <h1>Deliciuos</h1>
// }
// export default Funccompt;
const Funccompt =(props) => {
    return(
        <div>
        <h2>THis is a function component</h2>
        <p>This is<strong>{props.fname}</strong>, I am: <strong>{props.post}</strong> </p>
        </div>
        )
    };
    export default Funccompt;


