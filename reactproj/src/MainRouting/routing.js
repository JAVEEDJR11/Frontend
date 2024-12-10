import { createBrowserRouter} from "react-router-dom"
import VirtualDom  from "../VirtualDom"
import MyimagesComp from "../Components/MyimagesComp"
import MyStateComp from "../Components/MyStateComp";
import ReactHooksComp from "../hooks/ReactHooksComp"
import  UseStateHooksComp  from "../hooks/UseStateHooksComp";
import  UseEffectHooksComp  from "../hooks/UseEffectHooksComp";
import MainDashboardComp from "../Layout/MainDashboardComp";
import LoginComp from "../Layout/LoginComp";
import MyFanColorComp from "../Components/MyFanColorComp";
import FormVal from"../Components/FormVal";
import ReactTask6 from "../Task/ReactTaskt6"
import ProdcutDashComp from "../Crud/ProdcutDashComp";
import ProductAddComp from "../Crud/ProductAddComp";
import ProductEditComp from "../Crud/ProductEditComp";
import ProtectedRouting from "./ProtectedRouting";
import MycarauselComp from "../Components/MycarauselComp";
import DataListComp from "../ReduxCode/DataListComp";


// import ReactHooksComp from "../hooks/ReactHooksComp";

const routing= createBrowserRouter([
    {path:"",element:<LoginComp></LoginComp>},

    {path:"MainDashboardComp",element:<MainDashboardComp></MainDashboardComp>,children:[  //defualt routing
    // {path:"MainDashboardComp",element:<ProtectedRouting Component={MainDashboardComp}></ProtectedRouting>,children:[  //defualt routing
        {path:"Myfavcolor",element:<MyFanColorComp newcolor="Green"></MyFanColorComp>},
        {path:"Mystate",element:<MyStateComp></MyStateComp>},
        {path:"VirtualDom",element:<VirtualDom></VirtualDom>},
        {path:"MyimagesComp",element:<MyimagesComp></MyimagesComp>},
        {path:"formval",element:<FormVal></FormVal>},
        {path:"Reactask6",element:<ReactTask6></ReactTask6>},
        {path:"prodash",element:<ProdcutDashComp></ProdcutDashComp>},
        {path:"prodedit/:id",element:<ProductEditComp></ProductEditComp>},
        {path:"prodadd",element:<ProductAddComp></ProductAddComp>},
        {path:"Mycaruasel",element:<MycarauselComp></MycarauselComp>},
        {path:"Datalist",element:<DataListComp></DataListComp>},
        
        //naming
        {path:"VirtualDom",element:<VirtualDom></VirtualDom>},
        //parameter routing
        {path:'images/:id',element:<MyimagesComp></MyimagesComp>},
        {path:"hooks",element:<ReactHooksComp></ReactHooksComp>,children:[ {path:"useeffect",element:<UseEffectHooksComp></UseEffectHooksComp>},
            {path:"useState",element:<UseStateHooksComp></UseStateHooksComp>}]},]},
    

  

]);
export default routing;