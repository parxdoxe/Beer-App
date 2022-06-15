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
        }
      }

    componentDidMount(){
        this.getBeer(this.props.router.params.id)
      }
      
    getBeer = (id) => {
        axios.get(`https://api.punkapi.com/v2/beers/${id}`).then(response => {
            this.setState({ selected: response.data[0] })
        })
    }


    render(){

        function randomEntier (min, max) {
            return Math.floor(Math.random() * (max - min +1)) + min
        }
        let entier = randomEntier(1,12)

        let select = null;
        if (this.state.selected) {
            select = 
            <div className="beer">
                <div className="top">
                    <div className="img">
                    <img className="beerImg" src={this.state.selected.image_url}></img>
                    </div>
                    <div className="description">
                        <h1>{this.state.selected.name}</h1>
                        <p>{this.state.selected.description}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <div className="abv">
                            <p>Alc.{this.state.selected.abv}%</p>
                        </div>
                        
                        <div className="food">
                            <h3>Food Pairing</h3>
                        {this.state.selected.food_pairing.map(food =>
                                <li key={food}>
                                    {food}
                                </li>
                                )}
                        </div>

                        <div className="ibu">
                        <h3>Ibu {this.state.selected.ibu}</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                                                <metadata>
                                                Created by potrace 1.15, written by Peter Selinger 2001-2017
                                                </metadata>
                                                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                                <path d="M6125 12794 c-27 -2 -120 -8 -205 -14 -957 -68 -1973 -394 -2829 -908 -1759 -1055 -2891 -2894 -3073 -4992 -16 -187 -16 -773 0 -960 89 -1022 397 -1978 918 -2841 1056 -1754 2890 -2879 4984 -3061 187 -16 773 -16 960 0 1016 88 1973 396 2829 910 1759 1055 2891 2894 3073 4992 16 187 16 773 0 960 -118 1362 -635 2623 -1495 3648 -1071 1277 -2647 2092 -4347 2248 -154 14 -704 26 -815 18z"/>
                                                </g>
                        </svg>
                        </div>
                    </div>
                    <div className="rigth">
                        <div className='imgGlassBeer'>
                                    <img className='imgGlass' src={'/images/glass-' + entier +'.jpg'}></img>
                                    <p className='fs-5 pt-3'><b>EBC { this.state.selected.ebc } Glass ({entier})</b></p>
                        </div>
                    </div> 
                </div>
                <div className="bottomButton"><button>Commander</button></div>  
            </div>
            
        }
        
        return (

            
               
                <div className="beerPage">
                    <div className='header'>
                        <Header name="Beer App !" />
                    </div>
                    
                    {select} 
                   
                    
                </div>
            
            
        )
    }
}

export default withRouter(BeerPage);