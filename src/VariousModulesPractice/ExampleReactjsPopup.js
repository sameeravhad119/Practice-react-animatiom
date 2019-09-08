import React, { Component } from 'react';
import Popup from 'reactjs-popup';
class ExampleReactjsPopup extends Component {
    handleOpen=()=>{
        console.log('onOpen Event called');
    }
    handleClose=()=>{
        console.log('onClose Event called');
    }
    render() {
        return (
            <div>
                To start using reactjs popup you just need to import
                the component from the reactjs-popup package.
                <Popup
                    trigger={<button>Trigger Baby</button>}
                    onOpen={this.handleOpen}
                    onClose={this.handleClose}
                    on={'click'}
                    closeOnDocumentClick={false}
                    position={"bottom center"}
                >
                    {
                        (close) => {
                            return (
                                <div>
                                    <div>Content Of Popup goes here</div>
                                    <button onClick={close}>Close Popup</button>
                                </div>
                            );
                        }
                    }
                </Popup>
            </div>
        );
    }
}

export default ExampleReactjsPopup;