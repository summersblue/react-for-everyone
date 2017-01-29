import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';
const contacts =[
	{
		id :1,
		name: 'scott',
		phone:'555 666 5555'
	},
	{  id :2,
		name: 'Denny',
		phone:'555 666 6666'
	},
	{
		id :3,
		name: 'Dennis',
		phone:'555 666 7777'
	},
	{
		id :4,
		name: 'Copa',
		phone:'888 666 7777'
	}

	]
class App extends React.Component {
 
	
render(){
	 console.log(this.props.contacts);
	return(
		<div>
		<h1> Contacts List</h1>
		<ContactsList  contacts={this.props.contacts}/>
		</div>

		)
}


}

ReactDOM.render(<App contacts ={contacts}/>,document.getElementById('app'));