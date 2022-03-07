import React, { Component } from 'react';
import CoffeeButton from './CoffeeButton';
import './CoffeeControl.css';
import Thermos from './Thermos';

class CoffeeControl extends Component {
    constructor(props) {
        super(props);
        //Careful! This is an anti-pattern (more in the future)
        this.state = { ...props }
    }

    handleOnClick = (newLiters) => {
        console.log(newLiters);
        this.setState({ litersBrewed: newLiters });
    }

    render() {
        return (
            <div className="CoffeeControl">
                <Thermos {...this.state} />

                <div className="flex-columns">
                    <CoffeeButton litersToBrew='2.2' onClick={this.handleOnClick}/>

                    <CoffeeButton litersToBrew='1.1' onClick={this.handleOnClick}/>

                    <CoffeeButton litersToBrew='0.5' onClick={this.handleOnClick}/>
                </div>
            </div>
        );
    }
}

export default CoffeeControl;