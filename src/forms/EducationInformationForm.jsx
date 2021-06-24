import { Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Zorunlu_Alan } from './JobAdvertisementForm'
import EducationInformationService from '../services/educationInformationService'
export default function EducationInformationForm() {

    let educationInformationService = new EducationInformationService()
    const initialValues = {
        schoolName: "",
        startDateOfSchool: "",
        schoolDepartment: "",
        graduationDate: "",
        educationStatus: ""

    }
    const validationSchema = Yup.object({
        schoolName: Yup.string().required(Zorunlu_Alan),
        startDateOfSchool: Yup.date().required(Zorunlu_Alan),
        schoolDepartment: Yup.string().required(Zorunlu_Alan),
        graduationDate: Yup.date(),
        educationStatus: Yup.bool()
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    educationInformationService.postAdd(values)
                }}
            >
                <Form className="ui form">
                    <Header as='h3' disabled dividing>
                        Okul bilgisi ekleme
                    </Header>
                    <Segment padded >
                        <Grid>
                            <Grid.Row>
                                <GridColumn width={8}>
                                    <HRMSTextInput name="schoolName" placeholder="Okul adı"></HRMSTextInput>
                                    <HRMSTextInput name="startDateOfSchool" placeholder="Bu okula başladığınız yıl"></HRMSTextInput>
                                    <HRMSTextInput name="schoolDepartment" placeholder="Okuduğunuz bölüm"></HRMSTextInput>
                                    <HRMSTextInput name="graduationDate" placeholder="Meznuniyet tarihi"></HRMSTextInput>
                                    <HRMSTextInput name="educationStatus" placeholder="Okula halen devam ediyor"></HRMSTextInput>
                                </GridColumn>
                                <GridColumn width={8}>
                                    <Button color="olive" circular type="submit">Ekle</Button>
                                </GridColumn>
                            </Grid.Row>
                        </Grid>
                        <Divider ></Divider>
                    </Segment>
                </Form >
            </Formik>
            <Header as='h6' icon disabled dividing>
                HRMS
            </Header>
        </div>
    )
}
