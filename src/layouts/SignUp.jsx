import { Formik } from 'formik'
import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'
import SignUpForm from '../pages/SignUpForm'

export default class SignUp extends Component {
    state = { userName: '' }
    onChangeHandler = (event) => {
        this.setState({ userName: event.target })
    }
    render() {
        return (
            <div>
                <Menu.Item>
              
           
               <SignUpForm></SignUpForm>
                </Menu.Item>
            </div>
        )
    }
}
