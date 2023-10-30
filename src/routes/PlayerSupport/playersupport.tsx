import { useState } from 'react';
import Layout from "../Layout";
import PlayerSupportSidebar from '../../components/PlayerSupport/playerSupportSidebar'
import MobileSidebar from '../../components/PlayerSupport/mobileSidebar'
import PlayerSupportMessages from '../../components/PlayerSupport/playerSupportMessages'
import './playersupport.css'

const PlayerSupport = () =>{

	const [mobileSidebar, setMobileSidebar] = useState(false)
	const openSidebar = () => setMobileSidebar(!mobileSidebar)

	return(
		<Layout>
			<div className='col-lg-12 my-3'>

				<div className={mobileSidebar ? 'mob-PSS-sidebar slideInRight' : 'd-none'} >
					<MobileSidebar />					
				</div>

				<div className='intro flex-h-new91'>
					<div className='msm-icon ml-3'><i className={mobileSidebar ? 'bi-x text-grey fa-2x curp' : 'bi-list text-grey fa-2x curp'} onClick={openSidebar} ></i></div>
					<div>Support Tickets</div>
				</div>

				<div className='playerSupport h-100 mt-3 w-100 fos13 col-lg-12'>
					<div className='col-lg-2 col-md-3 pss-menu rounded bg-all'>
						<PlayerSupportSidebar className=''  />	
					</div>

					<div className='col-lg-10 col-md-9 bg-all ml-2 rounded pss-messages'>
						<PlayerSupportMessages className='' />
					</div>
				</div>
			</div>
		</Layout>
	)

}

export default PlayerSupport
