import React from 'react'
import { GridColumn, Header, Icon, Image, Menu, Container, Sidebar } from 'semantic-ui-react'
import EmployerList from '../pages/EmployerList'


export default function SidebarMenu() {
    return (
        <div>

            <Sidebar
                direction="left"
                as={Menu}
                animation='overlay'
                icon='labeled'
                width=" thin"
                vertical
                visible

            >
                <Menu.Item as='a'>
                    <Icon name='add' />
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
                <Menu.Item as='a'>
                    <Icon name='address card' />
                    Onay bekleyen ilanlar
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='street view' />
                    Onay bekleyen kullanıcılar
                </Menu.Item>
            </Sidebar>
            -
        </div>
    )
}
