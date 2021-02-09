import React from 'react';

class LightSwitch extends React.Component{
    constructor(){
        super()
        this.state = {
            toggled: false
        }
    }

    //when handleclick is cllaed, setState will update the state so that toggle is reversed
    hanleClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick} > 
                {this.state.toggled ? "ON": "OFF"}
                </button>
            </div>
        )
    }
}

export default LightSwitch;