import Layout from "../Layout";
import Delete from '../../components/GDPR/DeleteRequests/Delete'
import SendInfo from '../../components/GDPR/SendInfoRequests/SendInfo'
import CriticalInfo from '../../components/GDPR/CriticalRequests/CriticalInfo'
import './gdprDashboard.css'


const GDPRDashboard = () =>{


	return(
		<Layout>
			<div className='col-lg-12 my-3 w-100'>

				<div className='intro'>
					GDPR/CCPA
				</div>

				<div className='text-white mt-3 col-12 requests'>
					<div className='col-lg-4 p-2 flex-1 col-md-6 col-sm-6 col-12'>
						<Delete />
					</div>

					<div className='col-lg-4 p-2 flex-1 col-md-6 col-sm-6 col-12'>
						<SendInfo />
					</div>

					<div className='col-lg-4 p-2 flex-1 col-md-6 col-sm-6 col-12'>
						<CriticalInfo />
					</div>
				</div>

				<div className='text-center mt-4 flex-h-new9 w-100 curp'>
					<div className='flex-h-new9 numbg'>
						<div className='bg-nums'>
							<i className='bi-chevron-left'></i>
						</div>
						<div className='bg-nums'>
							1
						</div>
						<div className='bg-nums'>
							2
						</div>
						<div className='bg-nums'>
							3
						</div>
						<div className='bg-nums'>
							4
						</div>
						<div className='bg-nums'>
							5
						</div>
						<div className='bg-nums'>
							<i className='bi-chevron-right text-dark'></i>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)

}

export default GDPRDashboard
