import React,{ Component } from "react";

class VirtualDom extends Component{
     
        constructor(props){
            super(props);
            this.state={
                game:[{id:1,name:"junior",price:20}],
                game:[{id:2,name:"jude",price:30}],
                game:[{id:3,name:"rodrigo",price:40}],
                game:[{id:4,name:"vini",price:60}],
            }
            
        }
        render(){
            const {game}=this.state;
            return(
                    <div>
                        <h2>
                            This is a VirtualDom
                        </h2>
                        <ul>{
                            game.length>0 && game.map((val,index)=>{
                                return <li key={val.id}> {val.id}-{val.name}-{val.price}</li>
                            
                            })
                                
        }
                        </ul>
                    </div>
            )
    
            }
   


    
    }
export  default VirtualDom;