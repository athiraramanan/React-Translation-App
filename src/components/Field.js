import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
	static contextType = LanguageContext;
	render(){		
		const label= this.context === 'english' ? 'Name' : 'Naam'
		return (
			<div className='ui field'>
				<h3>
					<label>{label}</label>
				</h3>
				<input/>
			</div>
		);
	}
}

export default Field;
