import React from "react";
import { Link, Outlet } from 'react-router-dom';


class Beer extends React.Component{
    constructor(props){
        super(props)
        this.state= {
        
        }
       
      }





    render(){
        return (
            
            <div className="card" >
                
                <div className="border"></div>
                <h2>{this.props.beer.name}</h2>
                <Link to={'/beer/' + this.props.beer.id + '/' + this.props.beer.name}>
                <img src={this.props.beer.image_url} alt={this.props.beer.name} />
                </Link>
                <Outlet />
            </div>
           
            
        )
    }
}

export default Beer;