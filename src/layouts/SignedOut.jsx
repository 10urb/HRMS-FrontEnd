import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button  inverted color="teal" basic circular  onClick={signIn}>Giriş yap</Button>
            </Menu.Item>

        </div>
    )
}
