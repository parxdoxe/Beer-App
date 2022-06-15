import axios from 'axios';
import React from 'react';
import Beer from './Beer'
import Loader from './Loader';
import { withRouter } from './index';




class Results extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      beers: [],
      selected: null,
      loading: true
    }
  }

  componentDidMount(){
    axios.get('https://api.punkapi.com/v2/beers').then(response => {
      console.log(response);
      this.setState({ beers: response.data, loading: false })
    })
  }

  componentDidUpdate(prevProps) {
    if ( this.props.router.params.search && prevProps.router != this.props.router  ) {
        axios.get(`https://api.punkapi.com/v2/beers/?beer_name=${this.props.router.params.search}`).then(response => {
            this.setState({ beers: response.data})
        })  
    }
    else if ( prevProps.router != this.props.router ) {
      axios.get(`https://api.punkapi.com/v2/beers/`).then(response => {
          this.setState({ beers: response.data})
      })  
  }
}

  

  
  render (){

    if (this.state.loading) {
      return <Loader />
  }
    return (

      <div className='liste'>
        {this.state.beers.map(beer =>  <Beer  beer={beer} key={beer.id} />)} 
      </div>
    );
  }
  
}

export default withRouter(Results);