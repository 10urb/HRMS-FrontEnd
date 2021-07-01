import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {  Icon,  Menu, Container, Sidebar } from 'semantic-ui-react'
import JobAdvertisementForm from '../forms/JobAdvertisementForm'


export default function SidebarMenu() {
    const [state, setState] = useState()

    

    return (
        <div>
            <Sidebar
                direction="left"
                as={Menu}
                animation='uncover'
                icon='labeled'
                width="thin"
                vertical
                visible
            >
                <Container className="main">
                    <Menu.Item  as={NavLink} to="/jobadvertisements/form">
                        <Icon   name='add' />
                        
                        İş ilanı ver
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='search' />
                        İş ara
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='eye' />
                        İş arayanlar
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='child' />
                        İş verenler
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Icon name='users' />
                        Kullanıcılar
                    </Menu.Item>
                    <Menu.Item  as={NavLink} to="/confirmto/advertisements">
                        <Icon name='address card' />
                        Onay bekleyen ilanlar
                    </Menu.Item>
                    <Menu.Item  as={NavLink} to="/confirmto/users">
                        <Icon name='street view' />
                        Onay bekleyen kullanıcılar
                    </Menu.Item>
                </Container>
            </Sidebar>
        </div>
    )
}
