import React, {useState, useEffect} from 'react'
// import {DeleteData} from './deleteRequestData'
import  './deleteRequest.css'
import rocket from '../../../assets/rocket.png'


interface DeleteData{
	name: string;
	message: string;
    date: number;
    image:string;
}

const DeleteRequest: React.FC<DeleteData> = ({name, message, date, image}) => {

	return <div className='bg-chart flex-h-new1 fos10'>
				<div className='flex-h-new12 upperrequestcard w-100'>
					<div className=''>
						<div className='name-bg'>
							<img src={image} width='40px' />
						</div>
					</div>

					<div className='flex-h-new1 ml-3 flex-1'>
						<div className=' title'>
							Data Deletion Request From - {name}
						</div>

						<div className=' w-80 delete'>
							{message}
						</div>
					</div>
				</div>

				<div className='flex-h-new4 mt-2 pr-3 mb-3 w-100'>
					<div className='flex-h-new91'>
						<div className=''>
							<button className='requestbtn'>
								New Request
							</button>
						</div>

						<div className='ml-2 flex-h-new91 '>
							<i className='bi-calendar3'></i>
							<div className='ml-1'>{date}</div>
						</div>
					</div>

					<div className='flex-h-new'>
						<button className='deletebtn'>
							Delete
						</button>
					</div>
				</div>
			</div>

}

export default DeleteRequest
