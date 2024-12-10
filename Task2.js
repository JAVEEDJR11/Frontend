import React, { Component } from 'react';
import messi from '../src/assert1/messi.jpg'
import ronnie from '../src/assert1/ronnie.jpg'
import demon from '../src/assert1/demon.jpg'

class Task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,  
        };
    }

    toggleImage = (image) => {
        this.setState({ selectedImage: image });
    };

    render() {
        return (
            <div>
                <h2>Multiple Image with Name</h2>

                {this.state.selectedImage && (
                    <div style={{ marginTop: '20px' }}>
                        <h3>{this.state.selectedImage.alt}</h3>
                        <img
                            src={this.state.selectedImage.src}
                            alt={this.state.selectedImage.alt}
                            height='200px'
                            width='200px'
                        />
                    </div>
                )}

                
              
                <button
                    onClick={() => this.toggleImage({ src: messi, alt: 'messi' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Messi
                </button>
                <button
                    onClick={() => this.toggleImage({ src: ronnie, alt: 'ronnie' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Ronnie
                </button>
                <button
                    onClick={() => this.toggleImage({ src: demon, alt: 'demon' })}
                    className="btn btn-primary"
                    style={{ marginTop: '10px', marginRight: '10px' }}
                >
                    Show Demon
                </button>
            </div>
        );
    }
}

export default Task2;