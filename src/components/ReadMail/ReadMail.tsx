
import PlayerSupportSidebar from './PlayerSupportSidebar'
import playerData from '../PlayerSupport/playerSupportData'



interface playerData {
	name:string;
	notiLevel:string;
	notiAmount:string;
	message:string;
	date:number;
}


const PlayerSupportReadMail: React.FC<playerData> = ({name, notiLevel, notiAmount, date, message}) =>{


	let tempArray = []
	
	for (let i = 0; i < playerData.length; i++){
		tempArray.push({
			name: playerData[i].name,
			message: playerData[i].message
		})
	}
	console.log(tempArray)

	let arr = []

	arr.map(a => {return {name: a.name, message: a.message}})
	return(

		<div className='p-2  ml-3 rounded fos12'>
			<div className='flex-h-new12'>
				<div className='rounded pssIconcarrier flex-v-new'>
					 <i className='bi-archive-fill'></i>
					 <i className='bi-exclamation-circle-fill ml-2'></i>
					 <i className='bi-trash ml-2'></i>
				</div>

				<div className='rounded pssIconcarrier flex-v-new'>
					 <i className='bi-folder-fill'></i>
					 <i className='bi-chevron-down ml-2'></i>
				</div>

				<div className='rounded pssIconcarrier flex-v-new'>
					 <i className='bi-tag-fill'></i>
					 <i className='bi-chevron-down ml-2'></i>
				</div>

				<div className='rounded pssIconcarrier flex-v-new'>
					 <div>
					 	More
					 </div>
					 <i className='bi-chevron-down ml-2'></i>
				</div>
			</div>

			<div className='flex-h-new1 mt-3 text-dark px-3'>
				<div className='fwb  pt-4 px-5'>
					Rampage -- GTA6
				</div>
				<div className='fos10  px-5'>
					3 hours ago
				</div>
				<div className='mt-3 fos16 fwbx'>
					General Question
				</div>
				<div>
					Hey Dudes!
				</div>
				<div className='mt-2'>
					Since you asked and i am inconceivably bored at the train station. Alright thanks.
				</div>


				<div>
					<button className='replybtn mt-200'>
						<a href='/replymail' className='text-white'> 
							Reply
						</a>
					</button>
				</div>
			</div>

		</div>
	)
}


export default PlayerSupportReadMail
