import React, { Component } from 'react'
import SignUpForm from ".../src/pages/forms/SignUpForm.jsx"
import { Button } from 'semantic-ui-react'



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
