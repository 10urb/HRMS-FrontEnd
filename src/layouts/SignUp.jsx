import React, { Component } from 'react'




export default class SignUp extends Component {
    state = { userName: '' }
    onChangeHandler = (event) => {
        this.setState({ userName: event.target })
    }
    render() {
        return (
            <div>
              
            </div>
        )
    }
}
