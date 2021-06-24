import React, { useState, useEffect } from 'react'
import { Button, Dropdown, Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService'
import { NavLink } from 'react-router-dom'

export default function EmployerList() {
  

  const [employers, setEmployers] = useState([])
  useEffect(() => {
    let employerService = new EmployerService()
    employerService.getAllEmployers().then(result => setEmployers(result.data.data))
  }, [])
  return (
    <div>
      <Table celled structured>
        <Table.Header >
        <Dropdown placeholder="Sırala" additionPosition="top" >
          <Dropdown.Menu>
          <Dropdown.Item text="Traihe göre sırala"  as={NavLink} to="jobadvertisements/desc"/>
          </Dropdown.Menu>
        </Dropdown>
          <Table.Row >
        
            <Table.HeaderCell rowSpan='2'>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Adı</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Soyadı</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Web adresi</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'> E posta adresi</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'> Telefon numarası</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employers.map(employers => (
            <Table.Row key={employers.userId}>
              <Table.Cell>{employers.companyName}</Table.Cell>
              <Table.Cell> {employers.firstName}</Table.Cell>
              <Table.Cell>{employers.lastName}</Table.Cell>
              <Table.Cell>{employers.webSiteName}</Table.Cell>
              <Table.Cell>{employers.email}</Table.Cell>
              <Table.Cell>{employers.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
