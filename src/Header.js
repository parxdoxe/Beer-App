import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props)
        
      }


    render(){
        return (
            <div className="title">
                <h1><Link to="/">{this.props.name}</Link></h1>
            </div>
        )
    }
}

export default Header;