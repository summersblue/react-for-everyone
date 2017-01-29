import React from 'react';

const Contact = ({contact,item}) =>

			<ul>
			<li> {contact.name} {contact.phone} {item}</li>
			</ul>
		
export default Contact;