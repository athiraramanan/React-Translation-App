import React from 'react';

class Field extends React.Component {
	render(){
		return (
			<div className='ui field'>
				<h3>
					<label>Name</label>
					<i className='flag us'></i>
					<i className='flag nl'></i>
				</h3>
				<input/>
			</div>
		);
	}
}

export default Field;