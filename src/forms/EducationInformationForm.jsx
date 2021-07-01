import { Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"
import { Zorunlu_Alan } from './JobAdvertisementForm'
import EducationInformationService from '../services/educationInformationService'
import { Button, Divider, Form, Grid, GridRow, GridColumn, Header, Segment } from 'semantic-ui-react'
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput'
import HRMSTextSelectInput from '../Utilities/CustomFormControls/HRMSTextSelectInput'
export const Secim_Yapmalisiniz = "Seçim yapmalısınız"
export default function EducationInformationForm() {

    let educationInformationService = new EducationInformationService()
    const [educationInformation, setEducationInformation] = useState([])

    const educationStatusOption = [
        {
            key: true,
            text: "Devam ediyor",
            value: true
        },
        {
            key: false,
            text: "Mezun",
            value: false,
        }
    ]
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
        educationStatus: Yup.bool().required(Secim_Yapmalisiniz)
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit} className="ui form">
                        <Header as='h3' disabled dividing>
                            Akademik bilgi ekleme
                        </Header>
                        <Segment padded >
                            <Grid>
                                <GridRow>
                                    <GridColumn width={4}>
                                    </GridColumn>
                                    <GridColumn width={8}>
                                        <HRMSTextInput name="schoolName" placeholder="Okul adı"></HRMSTextInput>
                                        <HRMSTextInput name="startDateOfSchool" placeholder="Bu okula başladığınız yıl"></HRMSTextInput>
                                        <HRMSTextInput name="schoolDepartment" placeholder="Okuduğunuz bölüm"></HRMSTextInput>
                                        <HRMSTextInput name="graduationDate" placeholder="Meznuniyet tarihi"></HRMSTextInput>
                                        <HRMSTextSelectInput options={educationStatusOption} placeholder="Halen devam ediyor mu?" name="educationStatus" ></HRMSTextSelectInput>
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
        </div >
    )
}
