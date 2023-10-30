import { useState, useEffect, ReactNode } from 'react';
import LoadingScreen from '../components/InvoLoadingScreen/InvoLoadingScreen';
import LeftMenu from '../components/LeftMenu/LeftMenu';
import MobileLeftMenu from '../components/LeftMenu/MobileLeftMenu';
import MainMenu from '../components/MainMenu/MainMenu';
import DashboardIcon from '../assets/Dashboard.png';
import Transactions from '../assets/Page_1.png';
import Games from '../assets/Application.png';
import Staking from '../assets/Page.png';
import Analytics from '../assets/Ui_Kit.png';
import GDPR_Requests from '../assets/Mail.png';
import Player_Support from '../assets/User.png';
import Contact_Us from '../assets/Form.png';
import Documentation from '../assets/Table.png';
import Settings from '../assets/Icon.png';
import { Link } from 'react-router-dom';
import '../../public/b-icon/font/bootstrap-icons.css'

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  // If the app is still loading, render the loading screen
  if (isLoading) {
    return <LoadingScreen />
  }

  const lmitems = [
    { name: 'Dashboard', icon:"bi-arrow-up", href: "/dashboardtab" },
    { name: 'Transactions', icon: Transactions, href: "/buyandsell" },
    { name: 'Add Games', icon: Games, href: "/AddGame" },
    { name: 'Staking', icon: Staking, href: "" },
    { name: 'Analytics', icon: Analytics, href: "" },
    { name: 'GDPR Requests', icon: GDPR_Requests, href: "/GDPRDashboard" },
    { name: 'Player Support', icon: Player_Support, href: "/playersupport" },
    { name: 'Contact Us', icon: Contact_Us, href: "" },
    { name: 'Documentation', icon: Documentation, href: "" },
    { name: 'Settings', icon: Settings, href: "" },
  ];

  // This is an array of menu item names. These names will be displayed in the list on the UI.
  const mmitems = [
    "Today's Profits",
    'ARPPU',
    'PCR',
    'System LP',
    'Active Players',
    'Game GDP',
  ];

  const handleSelectItem = (lmitems: string) => {
    console.log(lmitems);
  };
  return (

    <>


    <div className="container-fluid mainConte">
      <div className="row">
        <div className="col MainMenu">
          <MainMenu items={mmitems} heading="MainMenu" />
        </div>
      </div>
      <div className="row">
       {/* <div className="col-1 p-0 LeftMenu">
          <LeftMenu
            lmitems={lmitems}
            heading="LeftMenu"
            onSelectItem={handleSelectItem}
          />
        </div>*/}
        <div className='col-12'>
            {children}
        </div>
      </div>
    </div>
    </>
  );
}

export default Layout;
