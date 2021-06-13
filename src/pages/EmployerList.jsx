import React from 'react'
import { Table } from 'semantic-ui-react'


export default function EmployerList() {
    return (
        <div>
               <Table celled structured>
                   <Table.Header rowSpan='2'>Şirket Adı</Table.Header>
                   <Table.Header rowSpan='2'>Adı</Table.Header>
                   <Table.Header rowSpan='2'>Soyadı</Table.Header>
                   <Table.Header rowSpan='2'>Telefon Bilgisi</Table.Header>
                   <Table.Header rowSpan='2'>Şehir</Table.Header>
               </Table>

        </div>
    )
}
