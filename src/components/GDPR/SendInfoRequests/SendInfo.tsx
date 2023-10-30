import React from "react"; 
import SendData from './SendInfoRequestData'
import SendInfoRequest from './SendInfoRequest'
import  './Sendinfo.css'
import  '../../../assets/flylady24.png'


const SendInfo = () =>{

	return(

		<div className='mt-3'>
			{

				SendData.map((item, index)=>{
					 return <div className='mt-3'>
					 	<SendInfoRequest name={item.name} message={item.message} date={item.date} image={item.image} className='mt-3' />
					 </div>

				})

			}
		</div>


	)

}


export default SendInfo
