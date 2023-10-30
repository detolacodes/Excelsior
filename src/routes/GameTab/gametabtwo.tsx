import Layout from "../Layout";
import EpicAdmin from "../../components/GameTab/EpicAdmin/EpicAdmin";
import SideTopThree from "../../components/GameTab/sideTopThree/sidetopthree";
import bg from "../../assets/litecoin-icon.png";
import andriodchrome from "../../assets/android-chrome.png";
import transfer4 from "../../assets/transfer-4.png";
import LineChart from "../../components/GameTab/LineChart/linechart";
import Assets from "../../components/GameTab/assets/assetTwo";

const GameTab = () => {
    const assetinfo = [
        {name: ' Fortnite', status: "verified", dateadded: "1/23", 
        economy: [{stats:"Game Values (max - Min)", max: "$250", min: "$10" },{stats:"Stakers value (max - Min)", max: "32M", min: "+23%" },{stats:"dynamic lock value", max: "32M", min: "+23%" },{stats:"Total Transaction", max: "10231", min: "+15%" }, ]},
        {name: 'Far Cry', status: "verified game", dateadded: "1/23", 
        economy: [{stats:"Game Values (max - Min)", max: "$250", min: "$10" },{stats:"Stakers value (max - Min)", max: "32M", min: "+23%" },{stats:"dynamic lock value", max: "32M", min: "+23%" },{stats:"Total Transaction", max: "10231", min: "+15%" }, ]},
        {name: 'Rocket League', status: "verified game", dateadded: "1/23", 
        economy: [{stats:"Game Values (max - Min)", max: "$250", min: "$10" },{stats:"Stakers value (max - Min)", max: "32M", min: "+23%" },{stats:"dynamic lock value", max: "32M", min: "+23%" },{stats:"Total Transaction", max: "10231", min: "+15%" }, ]},
        {name: 'Grand Theft Auto', status: "verified game", dateadded: "1/23", 
        economy: [{stats:"Game Values (max - Min)", max: "$250", min: "$10" },{stats:"Stakers value (max - Min)", max: "32M", min: "+23%" },{stats:"dynamic lock value", max: "32M", min: "+23%" },{stats:"Total Transaction", max: "10231", min: "+15%" }, ]},
        {name: 'Borderlands', status: "verified game", dateadded: "1/23", 
        economy: [{stats:"Game Values (max - Min)", max: "$250", min: "$10" },{stats:"Stakers value (max - Min)", max: "32M", min: "+23%" },{stats:"dynamic lock value", max: "32M", min: "+23%" },{stats:"Total Transaction", max: "10231", min: "+15%" }, ]}
    ]

    return (
        <Layout>
            <div className="col-12  p-2">
                <div className="container-fluid">
                    <div className="flex-v-new2">
                        {
                            assetinfo.map((item, index)=>{
                                return  <div className="mx-1" key={index}>
                                <Assets assetname={item.name}  status={item.status} dateadded={item.dateadded} economy={item.economy} />
                            </div>
                            })
                        }
                   <div className="col-3">
                    {/*<div className="game-button curp">
                        <a className='fos13' href='/addgame'>Add Game</a>
                        <i className='bi-plus-circle text-white fos20 ml-2'></i>
                    </div>*/}
                 </div>
                    </div>
                </div>
            </div>
           {/*current competitions on the game, stakers value, % of people playing and staking on the game, max and min profits on the game*/}
        </Layout>
    )
}

export default GameTab;