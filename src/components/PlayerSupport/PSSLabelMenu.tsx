import { useState } from "react";

interface objects {
	name: string;
	icon: string;
}

interface Props {
	PSSLabelitems: item[];
	heading:string;
	onSelectItem: (PSSLabelitems: string) => void;
}


const PlayerSidebarLabel = ({PSSLabelitems, heading, onSelectItem}: Props) =>{


	return(

		<div className='curp'>
			{
				PSSLabelitems.map((item, index)=>
					<div className='flex-h-new91 px-3 options w-100 mt-3'>
						<div className='flex-v-new'>
							<div className=''>{item.name}</div>
						</div>
						<div className={item.name === 'Support' ? 'bg-support labelcircle' : ((item.name === 'Warning') ? 'bg-warning labelcircle' : ((item.name === 'General Questions') ? 'bg-primary labelcircle' : ((item.name === 'Transfer Errors') ? 'bg-danger labelcircle' : ((item.name === 'Questions') ? 'bg-success labelcircle' : ''))))}>
							<i className='bi-caret-right-fill text-white fos10'></i>
						</div>
					</div>
				)
			}
		</div>


	)
}


export default PlayerSidebarLabel
