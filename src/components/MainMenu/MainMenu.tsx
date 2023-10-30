import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LeftMenu from '../LeftMenu/LeftMenu'
import MobileLeftMenu from '../LeftMenu/MobileLeftMenu'
import DashboardIcon from '../../assets/Dashboard.png';
import Transactions from '../../assets/Page_1.png';
import Games from '../../assets/Application.png';
import Staking from '../../assets/Page.png';
import Analytics from '../../assets/Ui_Kit.png';
import GDPR_Requests from '../../assets/Mail.png';
import Player_Support from '../../assets/User.png';
import Contact_Us from '../../assets/Form.png';
import Documentation from '../../assets/Table.png';
import Settings from '../../assets/Icon.png';
import '../../../public/b-icon/font/bootstrap-icons.css'

// Define the properties you expect for this component
interface MainMenuProps {
  items: string[];
  heading: string;
}

const MainMenu: React.FC<MainMenuProps> = () => {

const [mobileView, setMobileView] = useState(false)
const openMenu = () => setMobileView(!mobileView);

 const resetMobileView = () =>{
    setTimeout(() =>{
      const [mobileView, setMobileView] = useState(true)  
      if(setMobileView(!mobileView)){
        setMobileView(mobileView)
      }
    }, 3000)
  }

const lmitems = [
    { name: 'Dashboard', icon:'bi-grid-1x2-fill', href: "/dashboardtab" },
    { name: 'Transactions', icon:'bi-cash-coin', href: "/buyandsell" },
    { name: 'Games', icon:'bi-controller', href: "/gametab" },
    { name: 'Staking', icon:'bi-credit-card-fill', href: "/staking" },
    { name: 'Analytics', icon:'bi-bar-chart-line-fill', href: "/analytics" },
    { name: 'GDPR Requests', icon:'bi-envelope-paper-fill', href: "/GDPRDashboard" },
    { name: 'Player Support', icon:'bi-chat-heart', href: "/playersupport" },
    { name: 'Contact Us', icon:'bi-telephone-forward-fill', href: "" },
    // { name: 'Documentation', icon: Documentation, href: "" },
    // { name: 'Settings', icon: Settings, href: "" },
  ];

  const handleSelectItem = (lmitems: string) => {
    console.log(lmitems);
  };

  return (

    <>

     <div className={mobileView ? 'mobileLinks zindex slideInRight box-sh' : 'd-none'}>
       <div className='col-1'>
        <MobileLeftMenu lmitems={lmitems} heading="LeftMenu" onSelectItem={handleSelectItem}/>
       </div>
     </div>

    <div className="container-fluid mainmenuWrap box-sh-menu">
        <div className="col-1 flex-v">
            {/*<img src="../../assets/fortnite.png" />*/}
            <div>
              <i className='bi-infinity fos50 text-white'></i>
              {/*<div className='text-white'>Excelsior</div>*/}
            </div>
        </div>

        <div className=" flex-1 p-0 LeftMenu">
          <LeftMenu
            lmitems={lmitems}
            heading="LeftMenu"
            onSelectItem={handleSelectItem}
          />
        </div>

        <div className="">
          <form className="form-floating game_id">
            <input
              type="text"
              className="form-control"
              id="floatingInputValue"
              placeholder="search here...."
              defaultValue=""
            />
          </form>

          <div className='text-white fos11 mt-1'>
            <div>
               Balance : $230 | 2USDT
            </div>

            <div className=''>
               User ID: 0057
            </div>
          </div>
        </div>

        <div>
          
        </div>

        <div className="dev_id ml-5">
          <div className="notification">
            <FontAwesomeIcon icon={faBell} />
            <span className="notification_count">3</span>{' '}
          </div>
          <p className='fos11 mt-2'>Notifications</p>
        </div>

        <div className="menu">
          <FontAwesomeIcon icon={faBars}  className='curp barIcon' />
          {/*<i className='bi-filter-right curp barIcon' onClick={openMenu}></i>*/}
        </div>
    </div>
    </>
  );
};

export default MainMenu;
