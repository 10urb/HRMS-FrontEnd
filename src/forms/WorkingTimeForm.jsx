import { Formik } from 'formik'
import React from 'react'
import { Button, Form, Grid, GridColumn, Header, Divider, Segment, FormButton, GridRow } from 'semantic-ui-react'
import * as Yup from 'yup';
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput';
import { Zorunlu_Alan } from './JobAdvertisementForm';
export default function WorkingTimeForm() {
    const initialValues = {
        workingTime: ""
    }
    const validationSchema = Yup.object({
        workingTime: Yup.string().required(Zorunlu_Alan).min(5)
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
                            Çalışma zamanı ekleme
                        </Header>
                        <Segment padded >
                            <Grid>
                                <GridRow>
                                    <GridColumn width={8}>
                                        <HRMSTextInput name="workingTime" placeholder="Çalışma zamanı giriniz"></HRMSTextInput>
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
