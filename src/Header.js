import React from "react";

class Header extends React.Component{
    constructor(props){
        super(props)
        
      }


    render(){
        return (
            <div className="title">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Header;