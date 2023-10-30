import '../PlayerSupport/playerSupport.css'
import italic from '../../assets/format-italic.png'


const PlayerSupportReplyMail = () =>{


	return (

		<div className='flex-4 p-2  ml-3 rounded fos12 p-3'>
			<div className='flex-h-new1'>
				<div className='fwb'>
					Reply to Rampage
				</div>

				<div className='flex-h-new91 w-40 mt-3'>
					<div>View</div>
					<div>Edit</div>
					<div>File</div>
					<div>Insert</div>
					<div>Format</div>
					<div>Tools</div>
					<div>Tables</div>
				</div>

				<div className='flex-v-new1 w-100 mt-3'>
					<div className='w-7'>
						<i className='bi-arrow-90deg-left fos20 fwb'></i>
						<i className='bi-arrow-90deg-right fos20 fwb ml-2'></i>
					</div>

					<div className='w-15 flex-v-new mt-2'>
						<div>Paragraph</div>
						<div>
							<i className='bi-chevron-down fos12 ml-2'></i>
						</div>
					</div>

					<div className='w-5 flex-v-new'>
						<div className='fwb fos20'>B</div>
						<div className='fwb fos20 ml-2 ital'>I</div>
					</div>

					<div className='w-20 flex-v-new'>
						<i className='bi-list-check fos20 fwb'></i>
						<i className='bi-justify-left fos20 fwb ml-2'></i>
						<i className='bi-justify-right fos20 fwb ml-2'></i>
						<i className='bi-justify fos20 fwb ml-2'></i>
					</div>

					<div className='w-10 flex-v-new'>
						<i className='bi-list-ul fos20 fwb'></i>
						<i className='bi-chevron-down fos20 fwb ml-2'></i>
					</div>

					<div className='w-10 flex-v-new'>
						<i className='bi-list-ol fos20 fwb'></i>
						<i className='bi-chevron-down fos20 fwb ml-2'></i>
					</div>

					<div className='w-10 flex-v-new'>
						<i className='bi-file-image fos20 fwb'></i>
						<i className='bi-printer fos20 fwb ml-2'></i>
					</div>
				</div>

				<textarea className='w-100 mt-2 textarea'>
					
				</textarea>
			</div>
		</div>

	)

}


export default PlayerSupportReplyMail
