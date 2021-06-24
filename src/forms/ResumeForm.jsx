import { Formik, Form } from 'formik'
import React from 'react'
import { FormButton } from 'semantic-ui-react';
import * as Yup from 'yup';
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput';
import ResumeService from '../services/resumeService'

export default function ResumeForm() {
    let resumeService= new ResumeService()

    const initialValues = {
        gitHubLink: "",
        linkedinLink: "",
        coverLetter: ""
    }
    const validationSchema = Yup.object({
        gitHubLink: Yup.string(),
        linkedinLink: Yup.string(),
        coverLetter: Yup.string(),
    })


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values)
                resumeService.postAdd(values)
            }}
        >
            <Form className="ui form">
                <HRMSTextInput name="gitHubLink" placeholder="GitHub linkinizi yazınız"></HRMSTextInput>
                <HRMSTextInput name="linkedinLink" placeholder="Linkedin linkinizi yazınız"></HRMSTextInput>
                <HRMSTextInput name="coverLetter" placeholder="Kapak yazınızı giriniz"></HRMSTextInput>
                <FormButton type="submit" color="olive" circular> Ekle </FormButton>
            </Form>
        </Formik>
    )
}