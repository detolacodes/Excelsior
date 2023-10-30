const date = new Date()
import rocket from '../../../assets/rocket.png'
import flylady from '../../../assets/flylady24.png'
import c from '../../../assets/dudeman.png'
import d from '../../../assets/rampage.png'

const SendData = [

{
	id:'1',
	name:'Dudeman23',
	message: 'please send me all the data you have on me',
	requestType:'warning',
	timeline: 'This request is over 30 days late',
	date:date.toDateString(),
	image:rocket,
},

{
	id:'2',
	name:'FlyLady24',
	message: 'please send me all the data you have on me',
	requestType:'warning',
	timeline: 'This request is over 30 days late',
	date:date.toDateString(),
	image:flylady,
},

{
	id:'3',
	name:'Rampage',
	message: 'please send me all the data you have on me',
	requestType:'critical',
	timeline: 'This request is over 30 days late',
	date:date.toDateString(),
	image:c,
},

{
	id:'4',
	name:'Chandler',
	message: 'please send me all the data you have on me',
	requestType:'critical',
	timeline: 'This request is over 30 days late',
	date:date.toDateString(),
	image:d,
},

];

export default SendData
