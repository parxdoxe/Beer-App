import axios from 'axios';
import React from 'react';
import Beer from './Beer'




class Results extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      beers: [],
      selected: null,
    }
  }

  componentDidMount(){
    axios.get('https://api.punkapi.com/v2/beers').then(response => {
      console.log(response);
      this.setState({ beers: response.data })
    })
  }

  

  
  render (){
    return (

      <div className='liste'>
        {this.state.beers.map(beer =>  <Beer  beer={beer} key={beer.id} />)} 
      </div>
    );
  }
  
}

export default Results;