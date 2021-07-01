import {  Formik } from 'formik'
import React from 'react'
import { Button, Grid, GridColumn, Header, Segment,Form } from 'semantic-ui-react'
import * as Yup from "yup"
import JobSeekerService from '../services/jobSeekerService'
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput'
import { Gecerli_Bir_Sayi_Degil, Posta_Adresi_Gecerli_Degil, Zorunlu_Alan } from './JobAdvertisementForm'
export const Sifreler_Eslesmiyor="Şifreler eşleşmiyor"

export default function JobSeekerForm() {
    let jobSeekerService = new JobSeekerService()


    const initialValues = {
        firstName: "",
        lastName: "",
        nationalityId: "",
        birthYear: "",
        eMail: "",
        password: "",
        passwordAgain: ""

    }
    const validationSchema = Yup.object({
        firstName: Yup.string().required(Zorunlu_Alan),
        lastName: Yup.string().required(Zorunlu_Alan),
        nationalityId: Yup.number(Gecerli_Bir_Sayi_Degil).required(Zorunlu_Alan).positive(),
        birthYear: Yup.number(Gecerli_Bir_Sayi_Degil).required(Zorunlu_Alan).min(1950).positive(),
        eMail: Yup.string().email(Posta_Adresi_Gecerli_Degil).required(Zorunlu_Alan),
        password: Yup.string().required(Zorunlu_Alan),
        passwordAgain: Yup.string().required(Zorunlu_Alan).oneOf([Yup.ref('password')],Sifreler_Eslesmiyor)
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
                            İş arayan kayıt
                        </Header>
                        <Segment padded >
                            <Grid>
                                <Grid.Row>
                                    <GridColumn width={4}>
                                    </GridColumn>
                                    <GridColumn width={8}>
                                        <HRMSTextInput name="firstName" placeholder="Adınız"></HRMSTextInput>
                                        <HRMSTextInput name="lastName" placeholder="Soyadınız"></HRMSTextInput>
                                        <HRMSTextInput type="email" name="eMail" placeholder="E posta adresiniz"></HRMSTextInput>
                                        <HRMSTextInput name="birthYear" placeholder="Doğum yılınız"></HRMSTextInput>
                                        <HRMSTextInput name="nationalityId" placeholder="TC kimlik numaranız"></HRMSTextInput>
                                        <HRMSTextInput type="password" name="password" placeholder="Şifrenizi oluşturun"></HRMSTextInput>
                                        <HRMSTextInput type="password" name="passwordAgain" placeholder="Şifrenin tekrarı"></HRMSTextInput>
                                        <Button color="olive" circular type="submit">Ekle</Button>

                                    </GridColumn>

                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
