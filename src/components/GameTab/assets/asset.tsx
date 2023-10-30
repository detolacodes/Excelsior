import React from "react"; 
import "./asset.css";


interface AssetsProps {
    assetname: string;
    status: string;
    dateadded: string;
    economy: Array<{summaryname: string;summarygain: string;summarypercentageincrease:string  }>
}

const Assets: React.FC<AssetsProps> = ({ assetname, status, dateadded, economy}) => {
    return <div className='flex-v-new mt-2'>
                    <div className=" col-4 fos11">
                        <div className="asset-row">
                            <p>{assetname}</p>
                            <div className="asset-box">
                                <p>{status}</p>
                                <p>{dateadded}</p>
                            </div>
                        </div>
                        <div className="asset-row">
                            <div className='fos13 text-white'>Economy Summary</div>
                            {
                                economy.map((item, index)=>{
                                 return   <div className="asset-row-info" key={index}>
                                    <p>{item.stats}</p>
                    
                                    <div className="asset-row-profit">
                                        <p>{item.max}</p>
                                        <p>{item.min}</p>
                                    </div>
                                </div>
                                })
                            }
                            <button className='secondarybtn mt-2'>view details</button>
                        </div>
                    </div>
            </div>
}

export default Assets;