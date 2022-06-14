import React from 'react';
import Header from './Header'
import Results from './Results';



class App extends React.Component {
  constructor(props){
    super(props)
  }

  
  render (){
    return (
      <div className='container'>

        <div className='header'>
          <Header name="Beer App !" />
        </div>
        
        <div className='flex'>
          
          <Results /> 
        </div>
        
      </div>
    );
  }
  
}

export default App;
