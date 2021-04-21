
import React, {Component} from 'react'
export default class TextBox extends Component {
    constructor(){
        super()
        this.state={
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.userInput} onChange= {this.handleChange} />
            </div>
        )
    }
}