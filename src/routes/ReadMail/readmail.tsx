import { useState } from 'react';
import MobileSidebar from '../../components/PlayerSupport/mobileSidebar'
import '../PlayerSupport/playersupport.css'
import Layout from "../Layout";
import PlayerSupportSidebar from '../../components/PlayerSupport/playerSupportSidebar'
import PlayerSupportReadMail from '../../components/ReadMail/ReadMail'

const ReadMail = () =>{

	const [mobileSidebar, setMobileSidebar] = useState(false)
	const openSidebar = () => setMobileSidebar(!mobileSidebar)
	
	return(
		<Layout>
			<div className='col-lg-11 my-3'>

				<div className={mobileSidebar ? 'mob-PSS-sidebar slideInRight' : 'd-none'} >
					<MobileSidebar />					
				</div>

				<div className='intro flex-h-new91'>
					<div className='msm-icon ml-3'><i className={mobileSidebar ? 'bi-x text-grey fa-2x curp' : 'bi-list text-grey fa-2x curp'} onClick={openSidebar} ></i></div>
					<div>Support Tickets</div>
				</div>

				<div className='playerSupport h-100 mt-3 w-100 fos13 col-lg-12'>
					<div className='col-lg-2 col-md-3 pss-menu bg-all rounded '>
						<PlayerSupportSidebar/>	
					</div>

					<div className='col-lg-10 col-md-9 pss-messages bg-all rounded ml-2'>
						<PlayerSupportReadMail/>
					</div>
				</div>
			</div>
		</Layout>
	)

}

export default ReadMail
