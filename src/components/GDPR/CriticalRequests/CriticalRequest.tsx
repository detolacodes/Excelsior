import React, {useState, useEffect} from 'react'
import  './Criticalinfo.css'
import rocket from '../../../assets/rocket.png'

interface CriticalData{
	name: string;
	message: string;
    date: number;
    requestType: string;
    days: string;
    image:string;
}

const CriticalRequest: React.FC<CriticalData> = ({name, message, date, requestType, days, image}) => {

	return <div className='bg-chart flex-h-new1 fos10'>
				<div className='flex-h-new12 upperrequestcard w-100'>
					<div className=''>
						<div className='name-bg-sendinfo'>
							<img src={image} width='40px' />
						</div>
					</div>

					<div className='flex-h-new1 ml-3 flex-1'>
						<div className=' title'>
							Data Request From - {name}
						</div>

						<div className=' w-100 flex-h-new1 delete2'>
							{message}
						</div>
					</div>
				</div>

				<div className='flex-h-new12 mt-2  mb-3 w-100 pr-3'>
					<div className='flex-h-new9'>
						<div className='ml-2'>
							<button className='criticalbtn '>Critical</button>
						</div>

						<div className='flex-h-new9 flex-1'>
							<i className='bi-calendar3'></i>
							<div className='ml-1'>{date}</div>
							<div className=' w-45 ml-1'>this request is over 30 days late</div>
						</div>

						<div className=''>
							<button className='sendinfobtn fos11'>
								Send Info
							</button>
						</div>
					</div>
				</div>
			</div>

}

export default CriticalRequest
