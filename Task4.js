import React, { Component } from 'react';
import neymar from '../src/assert1/neymar.jpg';
import demon from '../src/assert1/demon.jpg';

class Task4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkImg: true 
        };
    }

   
    toggleImage = () => {
        this.setState((prevState) => ({
            checkImg: !prevState.checkImg
        }));
    };

    render() {
        const { checkImg } = this.state; 

        return (
            <div>
                <h2>Toggle Image Component</h2>
                <img src={checkImg ? neymar:demon } alt={checkImg ? 'neymar' : 'demon'} height='200px' width='200px' />
                <br />
                <button onClick={this.toggleImage} className="btn btn-primary" style={{ marginTop: '10px' }}>
                    Toggle Image
                </button>
            </div>
        );
    }
}

export default Task4;