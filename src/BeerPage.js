import React from "react";
import { withRouter } from './index';
import axios from "axios"
import Header from "./Header";

class BeerPage extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            selected: {},
        }
      }

      componentDidMount(){
        this.getBeer(this.props.router.params.id)
      }
      
    getBeer = (id) => {
        axios.get(`https://api.punkapi.com/v2/beers/${id}`).then(response => {
            this.setState({ selected: response.data})
        })
    }


    render(){
        
        return (

            
               
                <div className="beerPage">
                    <div className='header'>
                        <Header name="Beer App !" />
                    </div>
                    <div className="beer">
                    <h1>{this.props.router.params.name}</h1>
               
                    {this.state.selected.name} 
                    </div>
                </div>
            
            
        )
    }
}

export default withRouter(BeerPage);