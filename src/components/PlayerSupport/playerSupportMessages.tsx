import './playersupport.css'
import playerData from './playerSupportData'



interface playerData {

	name:string;
	notiLevel:string;
	notiAmount:string;
	message:string;
	date:number;
	href:string;
}


const PlayerSupportMessages: React.FC<playerData> = ({name, notiLevel, notiAmount, message, date, href}) =>{


	return 		<div className='psm ml-3 rounded fos12'>
					<div className='flex-h-new12'>
						<div className='rounded pssIconcarrier flex-v-new curp'>
							 <i className='bi-archive-fill'></i>
							 <i className='bi-exclamation-circle-fill ml-2'></i>
							 <i className='bi-trash ml-2'></i>
						</div>

						<div className='rounded pssIconcarrier flex-v-new curp'>
							 <i className='bi-folder-fill'></i>
							 <i className='bi-chevron-down ml-2'></i>
						</div>

						<div className='rounded pssIconcarrier flex-v-new curp'>
							 <i className='bi-tag-fill'></i>
							 <i className='bi-chevron-down ml-2'></i>
						</div>

						<div className='rounded pssIconcarrier flex-v-new curp'>
							 <div>
							 	More
							 </div>
							 <i className='bi-chevron-down ml-2'></i>
						</div>
					</div>

					{

						playerData.map((item, index)=>{
							// console.log(item);

							return <a href={item.href}>
								<div className='w-100 flex-v-new1 mt-3 curp' key={index}>			
									<div className='mt-3 flex-v-new1 ml-2 w-100'>
										<div className=''>
											<input type='checkbox' className='input' />
										</div>

										<div>
											<i className='bi-star ml-2 '></i>
										</div>

										<div className='ml-3 flex-v-new'>
											<div>
												{item.name}
											</div>
											<div>
												{item.notiAmount}
											</div>
										</div>

										<div>
											{<button className={`labelbtn ${((item.notiLevel === 'questions') ? 'bg-success' : ((item.notiLevel === "transfer errors")? "bg-danger": ((item.notiLevel === "general questions")? "bg-primary": ((item.notiLevel === "support") ? "bg-support" : ((item.notiLevel === "warning") ? "bg-warning" : "")))))} ml-2`}>{item.notiLevel}</button>}
										</div>

										<div className='ml-1'>
											{item.message}
										</div>

										<div className='ml-1'>
											{item.date}
										</div>
									</div>						
								</div>
							</a>

						})

					}
			</div>


}

export default PlayerSupportMessages
