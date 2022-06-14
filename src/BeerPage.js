import React from "react";
import { withRouter } from './index';
import axios from "axios"
import Header from "./Header";
import Loader from "./Loader"

class BeerPage extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            selected: null,
            loading: true,
        }
      }

    componentDidMount(){
        this.getBeer(this.props.router.params.id)
        this.setState({ loading:false })
      }
      
    getBeer = (id) => {
        axios.get(`https://api.punkapi.com/v2/beers/${id}`).then(response => {
            this.setState({ selected: response.data[0] })
        })
    }


    render(){

        if (this.state.loading) {
            return <Loader />
        }

        let select = null;
        if (this.state.selected) {
            select = <h1>{this.state.selected.name}</h1>
        }
        
        return (

            
               
                <div className="beerPage">
                    <div className='header'>
                        <Header name="Beer App !" />
                    </div>
                    <div className="beer">
                    {select}  
                    </div>
                </div>
            
            
        )
    }
}

export default withRouter(BeerPage);