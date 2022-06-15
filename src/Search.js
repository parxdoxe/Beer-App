import React from 'react';
import { withRouter } from './index';

class Search extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
        search: '',
};
  }


  search = () => {
    if (this.state.search == '') {
      this.props.router.navigate(`/`);
    } else {
      this.props.router.navigate(`/search/${this.state.search}`);
      this.setState({search: ''})
    }
  }

  

  render() {
    return (
      <div className='search'>
        <input type="text" placeholder='Hoppy, Malt, Angry, New' value={this.state.search} onChange={(event) => this.setState({ search: event.target.value })} />
        <button onClick={this.search}>Recherche</button>
      </div>
    );
  }
}

export default withRouter(Search);