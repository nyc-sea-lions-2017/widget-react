import React, {Component} from 'react';
import './Widget.css'



class Widget extends Component {
    constructor(){
        super();
        this.state = {
            clickCount: 0
        }
        this.updateState = this.updateState.bind(this)
    }

    updateState(){
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }

    render() {
        return (
            <div className="widget">
                <label> Click here</label>
                <input type="text" value={`I have been cliked ${this.state.clickCount} times`} onClick={this.updateState}/>
            </div>
        )
    }
}

export default Widget;