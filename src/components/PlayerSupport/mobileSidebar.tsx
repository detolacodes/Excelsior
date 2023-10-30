import './playersupport.css'
import PlayerSidebarMenu from './PSSMenu'
import PlayerSidebarLabel from './PSSLabelMenu'
import mail from '../../assets/email-outline.png'
import star from '../../assets/star-outline.png'
import important from '../../assets/diamond-stone.png'
import draft from '../../assets/file-outline.png'
import sentMail from '../../assets/email-check-outline.png'
import trash from '../../assets/trash-can-outline.png'

const MobileSidebar = () =>{


	// array for the menu

	const PSSMenuitems = [
		{name: 'Inbox', icon: mail, notiAmount: '(18)' },
		{name: 'Starred', icon: star },
		{name: 'Important', icon: important },
		{name: 'Drafts', icon: draft },
		{name: 'Sent Mail', icon: sentMail },
		{name: 'Trash', icon: trash },
	];

	const handleSelectItem = (PSSMenuitems: string) => {
	    console.log(PSSMenuitems);
	  };


	  // array for the labels

	  const PSSLabelitems = [
		{name: 'Support', icon: mail,},
		{name: 'Warning', icon: star },
		{name: 'General Questions', icon: important },
		{name: 'Transfer Errors', icon: draft },
		{name: 'Questions', icon: sentMail },
	];

	const handleLabelItem = (PSSLabelitems: string) => {
	    console.log(PSSLabelitems);
	  };


	return(

		<>
				<div className='pSSmobile py-2 bg-white rounded fos11 box-sh'>
					<div className=''>
						<button className='compbtn w-80 rounded'>
							Compose
						</button>
					</div>


					<PlayerSidebarMenu
						PSSMenuitems={PSSMenuitems}
						heading="Player support sidebar menu"
						onSelectItem={handleSelectItem}
					 />

					<div className='ml-1 mt-2 fwb'>
						Labels
					</div>

					<PlayerSidebarLabel
						PSSLabelitems={PSSLabelitems}
						heading="Player support sidebar labels"
						onSelectItem={handleLabelItem}
					/>
				</div>

		</>

	)

}

export default MobileSidebar
