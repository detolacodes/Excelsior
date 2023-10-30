const date = new Date()
const day = date.getDate()
import a from '../../../assets/flylady24.png'
import b from '../../../assets/Anno.png'
import c from '../../../assets/dudeman.png'
import d from '../../../assets/rampage.png'

const DeleteData = [

{
	id:'1',
	name:'Rampage',
	message: 'please delete my data (Player data will be deleted in accordance with GDPR rules)',
	requestType:'',
	date:date.toDateString(),
	image:d,
},

{
	id:'2',
	name:'FlyLady2202',
	message: 'please delete my data (Player data will be deleted in accordance with GDPR rules)',
	requestType:'',
	date:date.toDateString(),
	image:b,
},

{
	id:'3',
	name:'The Rock29',
	message: 'please delete my data (Player data will be deleted in accordance with GDPR rules)',
	requestType:'',
	date:date.toDateString(),
	image:a,
},

{
	id:'4',
	name:'Rampage-002',
	message: 'please delete my data (Player data will be deleted in accordance with GDPR rules)',
	requestType:'',
	date:date.toDateString(),
	image:c,
},

];

export default DeleteData
