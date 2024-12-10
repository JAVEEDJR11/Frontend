import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchData } from './Api/Apislice';
const DataListComp = () => {
    const  dispatch = useDispatch();
    const data = useSelector((state)=>state.api.data);
    const status = useSelector((state)=>state.api.status);
    const error = useSelector((state)=>state.api.error);
    useEffect(()=>{
        dispatch(fetchData());
    },[])

    let content;
    if (status==="loading") {
        content =<div><span className='spinner-border'></span>loading.....</div>
    }
    else if (status==="sucess") {
        content = <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>sr.No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Company</th>
                   
                </tr>
            </thead>
            <tbody>
                {
                    data.length>0 && data.map((val,index)=>{
                        return <tr key={val.id}>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.price}</td>
                            <td>{val.company}</td>
                           
                        </tr>
                    })
                }
            </tbody>
        </table>
    }
    else if (status==="failed") {
        content ="somthing went wrong";
    }
  return (
    <div>
        <h1>Javeed is </h1>
        {content}
    </div>

  )
}

export default DataListComp