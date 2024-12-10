import React  from "react";
import annies from "../Shared/Const/Constant";
// import demon from '../src/assert1/demon.jpg';
// import neymar from '../src/assert1/neymar.jpg';
const MyimagesComp =()=>{
    return(
        <div>
        <h2> this is my image</h2>
        {/* <img src={demon} alt="dosa" height="200px" width="200px" />
        <img src={neymar} alt="neymar" height="200px" width="200px" /> */}
<img src={annies.demon} alt="demon" height="200px" width="200px" />
<img src={annies.desert} alt="desert" height="200px" width="200px" />
<img src={annies.messi} alt="messi" height="200px" width="200px" />
<img src={annies.nature} alt="nature" height="200px" width="200px" />
<img src={annies.christ} alt="christ" height="200px" width="200px" />
<img src={annies.tajmahl} alt="tajmahal" height="200px" width="200px" />
<img src={annies.suarez} alt="suarez" height="200px" width="200px" />
<img src={annies.natur2} alt="natur2" height="200px" width="200px" />
<img src={annies.neymar} alt="neymar" height="200px" width="200px" />
<img src={annies.ronnie} alt="ronnie" height="200px" width="200px" />
        </div>
)
    }
    export default MyimagesComp