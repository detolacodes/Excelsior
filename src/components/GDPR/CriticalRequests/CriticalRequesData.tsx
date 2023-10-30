const date = new Date()
import a from '../../../assets/borderlands.png'
import b from '../../../assets/Anno.png'
import c from '../../../assets/dudeman.png'
import d from '../../../assets/rampage.png'

const CriticalData = [

{
	id:'1',
	name:'Dudeman23',
	message: 'please delete my data(Player data will be deleted in accordance with GDPR rules)',
	requestType:'warning',
	days: 'This request is over 30 days late',
	date:date.toDateString(),
	image:b,
},

{
	id:'2',
	name:'FlyLady24',
	message: 'please delete my data(Player data will be deleted in accordance with GDPR rules)',
	requestType:'warning',
	days: 'This request is over 30 days late',
	date:date.toDateString(),
	image:c,
},

{
	id:'3',
	name:'Rampage',
	message: 'please delete my data(Player data will be deleted in accordance with GDPR rules)',
	requestType:'critical',
	days: 'This request is over 30 days late',
	date:date.toDateString(),
	image:d,
},

{
	id:'4',
	name:'Chandler',
	message: 'please delete my data(Player data will be deleted in accordance with GDPR rules)',
	requestType:'critical',
	days: 'This request is over 30 days late',
	date:date.toDateString(),
	image:a,
},

];

export default CriticalData
