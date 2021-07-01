import { Formik } from 'formik'
import React from 'react'
import { Button, Divider, Form, Grid, GridColumn, Header, Segment } from 'semantic-ui-react'
import * as Yup from "yup"
import EmployerService from '../services/employerService'
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput'
import { Posta_Adresi_Gecerli_Degil, Zorunlu_Alan } from './JobAdvertisementForm'
import { Sifreler_Eslesmiyor } from './JobSeekerForm'

export default function EmployerFormPost() {
    let employerService = new EmployerService()

    const initialValues = {
        companyName: "",
        firstName: "",
        lastName: "",
        webSiteName: "",
        phoneNumber: "",
        companyMail: "",
        password: "",
        passwordAgain: ""
    }
    const validationSchema = Yup.object({
        companyName: Yup.string().required(Zorunlu_Alan),
        firstName: Yup.string().required(Zorunlu_Alan),
        lastName: Yup.string().required(Zorunlu_Alan),
        webSiteName: Yup.string().required(Zorunlu_Alan),
        phoneNumber: Yup.number().required(Zorunlu_Alan),
        companyMail: Yup.string().email(Posta_Adresi_Gecerli_Degil).required(Zorunlu_Alan),
        password: Yup.string().required(),
        passwordAgain: Yup.string().oneOf([Yup.ref('password')], Sifreler_Eslesmiyor)
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
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="ui form">
                        <Header as='h3' disabled dividing>
                            İş veren kayıt
                        </Header>
                        <Segment padded >
                            <Grid>
                                <Grid.Row>
                                    <GridColumn width={4}>
                                    </GridColumn>
                                    <GridColumn width={8}>
                                        <HRMSTextInput name="companyName" placeholder="Şirket adı giriniz"></HRMSTextInput>
                                        <HRMSTextInput name="firstName" placeholder="Adınızı giriniz"></HRMSTextInput>
                                        <HRMSTextInput name="lastyName" placeholder="Soyadınızı giriniz"></HRMSTextInput>
                                        <HRMSTextInput name="webSiteName" placeholder="Web adresini giriniz"></HRMSTextInput>
                                        <HRMSTextInput name="phoneNumber" placeholder="Telefon numarası giriniz"></HRMSTextInput>
                                        <HRMSTextInput name="companyMail" placeholder="Şirket uzantılı mail adresinizi giriniz"></HRMSTextInput>
                                        <HRMSTextInput name="password" placeholder="Şifrenizi oluşturun"></HRMSTextInput>
                                        <HRMSTextInput name="passwordAgain" placeholder="Şifrenin tekrarı"></HRMSTextInput>
                                    </GridColumn>
                                </Grid.Row>
                            </Grid>
                            <Divider />
                            <Button color="olive" circular type="submit">Ekle</Button>
                        </Segment>
                    </Form>
                )}
            </Formik>
            <Header as='h6' icon disabled dividing>
                HRMS
            </Header>
        </div>
    )
}
