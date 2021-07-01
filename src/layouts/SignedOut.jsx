import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button  inverted color="blue" basic circular  onClick={signIn}>Giriş yap</Button>
                <Button  inverted style={{marginLeft:'0.5em'}} basic circular size="large" color="olive" >Kaydol</Button>
            </Menu.Item>
        </div>
    )
}
