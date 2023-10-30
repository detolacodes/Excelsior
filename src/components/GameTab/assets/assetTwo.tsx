import React from "react"; 
import "./asset.css";


interface AssetsProps {
    assetname: string;
    status: string;
    dateadded: string;
    economy: Array<{summaryname: string;summarygain: string;summarypercentageincrease:string  }>
}


const Assets: React.FC<AssetsProps> = ({assetname, status, dateadded, economy}) => {

    return <div className=''>
               <img src='../../assets/crb6.png' />
          </div>


}


export default Assets;