import React, { useState, useEffect } from 'react'
import { Label } from 'reactstrap'
import { Button, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import JobAdvertisementOrderDateDesc from '../pages/JobAdvertisementOrderDateDesc'
import { NavLink, Route } from 'react-router-dom'

export default function JobAdvertisementList() {

  const [jobAdvertisements, setJobAdvertisements] = useState([])
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getJobAdvertisement().then(result => setJobAdvertisements(result.data.data))
  }, [])
  return (
    <div>
      <Button color="grey" as={NavLink} to="jobadvertisementsdesc"  >Tarihe göre sırala</Button>
      <Table celled structured>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell rowSpan='2'>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>İş Türü</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Gerekli Personel Sayısı</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Yayınlanma Tarihi</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'> Son Başvuru Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobAdvertisements.map(jobAdvertisements => (
            <Table.Row key={jobAdvertisements.id}>
              <Table.Cell>{jobAdvertisements.employer.companyName}</Table.Cell>
              <Table.Cell> {jobAdvertisements.jobTitle.jobName}</Table.Cell>
              <Table.Cell>{jobAdvertisements.numberOfOpenPosition}</Table.Cell>
              <Table.Cell>{jobAdvertisements.publicationDate}</Table.Cell>
              <Table.Cell>{jobAdvertisements.applicationDeadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
