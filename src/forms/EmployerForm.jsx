import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from "yup"
import EmployerService from '../services/employerService'
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput'
import {  Posta_Adresi_Gecerli_Degil, Zorunlu_Alan } from './JobAdvertisementForm'

export default function EmployerFormPost() {
    let employerService = new EmployerService()

    const initialValues = {
        companyName: "",
        firstName: "",
        lastName: "",
        webSiteName: "",
        phoneNumber: "",
        companyMail: "",
        password1: "",
        password2: ""
    }
    const validationSchema = Yup.object({
        companyName: Yup.string().required(Zorunlu_Alan),
        firstName: Yup.string().required(Zorunlu_Alan),
        lastName: Yup.string().required(Zorunlu_Alan),
        webSiteName: Yup.string().required(Zorunlu_Alan),
        phoneNumber: Yup.number().required(Zorunlu_Alan),
        companyMail: Yup.string().email(Posta_Adresi_Gecerli_Degil).required(Zorunlu_Alan),
        password1: Yup.string().oneOf([Yup.ref('password'), null]).matches(/[a-z]/, Error),
        password2: Yup.string().oneOf([Yup.ref('password'), null]).matches(/[A-Z]/, Error)
    })
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values)=>{
            console.log(values)
            employerService.postAdd(values)
        }}
        >
            <Form className="ui form">
                <HRMSTextInput name="companyName"  placeholder="Şirket adı giriniz"></HRMSTextInput>
                <HRMSTextInput name="firstName" placeholder="Adınızı giriniz"></HRMSTextInput>
                <HRMSTextInput name="lastyName" placeholder="Soyadınızı giriniz"></HRMSTextInput>
                <HRMSTextInput name="webSiteName" placeholder="Web adresini giriniz"></HRMSTextInput>
                <HRMSTextInput name="phoneNumber"  placeholder="Telefon numarası giriniz"></HRMSTextInput>
            </Form>
        </Formik>
    )
}
