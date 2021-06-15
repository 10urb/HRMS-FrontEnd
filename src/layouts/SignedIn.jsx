import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu,Image ,Dropdown, Button} from 'semantic-ui-react'
import SignUpForm from '../pages/SignUpForm'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="http://res.cloudinary.com/dlzwvem1a/image/upload/v1623683483/jwgqfdhz7abepmmbiu8o.jpg"/>
                <Dropdown  pointing="top left" text="Onur">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>

                        <Dropdown.Item active onClick={signOut} text="Çıkış yap" icon="sign-out" />
                    </Dropdown.Menu>

                </Dropdown>
            </Menu.Item>
        </div>
    )
}
