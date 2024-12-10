import React from "react";
import { Link, Outlet } from "react-router-dom";
import UseStateHooksComp from "../hooks/UseStateHooksComp";
import UseEffectHooksComp from "../hooks/UseEffectHooksComp";
const ReactHooksComp = (props) =>{
    return (
        <div>
            <h2>This is ReactHooksComp!!</h2>
            <div className="card border-warning">
                <div className="card-header border-primary">
                    <Link to="useState" className="btn btn-success btn-sm">useState</Link>
                    <Link to="useeffect" className="btn btn-success btn-sm">useEffect</Link>
                </div>
                <div className="card-body border-primry">
                    <Outlet/>
                    <UseStateHooksComp></UseStateHooksComp>
                    <UseEffectHooksComp></UseEffectHooksComp>
                </div>
            </div>
        </div>
    )
}
export default ReactHooksComp;