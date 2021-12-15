import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
	state = { language: 'english' };


	static contextType = LanguageContext;
	onLanguageChange = language => {
		console.log(language)
  	this.setState({ language });
	};

	render(){
		return(
			<div className='ui container'>
			  <div>
         	<h2>Select a language:
          	<i
	            className="flag us"
	            onClick={()=>this.onLanguageChange('english')}
	          />
	          <i
	            className="flag nl"
	            onClick={()=>this.onLanguageChange('dutch')}
	          />
        	</h2>
        </div>
				<UserCreate/>
			</div>
		)
	}
}
export default App;