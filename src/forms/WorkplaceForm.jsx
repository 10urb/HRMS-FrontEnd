import React from 'react'
import { useEffect,useState } from 'react'
import WorkplaceService from '../services/workplaceService'
import * as Yup from "yup"
import { Formik } from 'formik'
import { Button, Form, Grid, GridColumn, Header, Divider, Segment, GridRow } from 'semantic-ui-react'
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput'
import { Zorunlu_Alan } from './JobAdvertisementForm'


export default function WorkplaceForm() {

    const [workplace, setWorkplace] = useState([])
    useEffect(() => {
        let workplaceService = new WorkplaceService()
        workplaceService.getGetAll().then(result => setWorkplace(result.data.data))
    }, [])

    const initialValues = {
        typeOfWorkplace: ""
    }
    const validationSchema = Yup.object({
        typeOfWorkplace: Yup.string().required(Zorunlu_Alan).min(5)
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
                            Çalışma yeri ekleme
                        </Header>
                        <Segment padded >
                            <Grid>
                                <GridRow>
                                    <GridColumn width={8}>
                                        <HRMSTextInput name="typeOfWorkplace" placeholder="Çalışma yeri giriniz"></HRMSTextInput>
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
