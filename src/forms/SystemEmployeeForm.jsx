import React from 'react'
import { useEffect,useState } from 'react'
import * as Yup from "yup"
import { Formik } from 'formik'
import { Button, Form, Grid, GridColumn, Header, Divider, Segment, GridRow } from 'semantic-ui-react'
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput'
import SystemEmployeeService from '../services/systemEmployeeService'
import { Zorunlu_Alan } from './JobAdvertisementForm'

export default function SystemEmployeeForm() {

    const [systemEmployee, setSystemEmployee] = useState([])
    useEffect(() => {
        let systemEmployeeService = new SystemEmployeeService()
        systemEmployeeService.getGetAll().then(result => setSystemEmployee(result.data.data))
    }, [])

    const initialValues = {
        firstName:"",
        lastName:""
    }
    const validationSchema = Yup.object({
        firstName:Yup.string().required(Zorunlu_Alan),
        lastName:Yup.string().required(Zorunlu_Alan)
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => (
                    console.log(values)
                )}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="ui form">
                        <Header as='h3' disabled dividing>
                            Sistem çalışanı ekleme
                        </Header>
                        <Segment padded >
                            <Grid>
                                <GridRow>
                                    <GridColumn width={8}>
                                        <HRMSTextInput name="firstName" placeholder="Adınız"></HRMSTextInput>
                                        <HRMSTextInput name="lastName" placeholder="Soyadınız"></HRMSTextInput>

                                    </GridColumn>
                                    <GridColumn width={8}>

                                        <Button color="olive" circular type="submit">Ekle</Button>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                            <Divider ></Divider>
                        </Segment>
                    </Form >
                )}
            </Formik>
            <Header as='h6' icon disabled dividing>
                HRMS
            </Header>
        </div>
    )
}
