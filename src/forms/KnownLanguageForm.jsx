import React from 'react'
import { useEffect,useState } from 'react'
import * as Yup from "yup"
import { Formik } from 'formik'
import { Button, Form, Grid, GridColumn, Header, Divider, Segment, GridRow } from 'semantic-ui-react'
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput'
import KnownLanguageService from '../services/knownLanguageService'
import { Gecerli_Bir_Sayi_Degil, Zorunlu_Alan } from './JobAdvertisementForm'
export const Bir_Ile_Bes_Arasinda_Olmali = "1 ile 5 arasında olmalı"


export default function KnownLanguageForm() {

    const [knownLanguage, seKnownLanguage] = useState([])
    useEffect(() => {
        let knownLanguageService = new KnownLanguageService()
        knownLanguageService.getGetAll().then(result => seKnownLanguage(result.data.data))
    }, [])

    const initialValues = {
        language:"",
        languageLevel:"",
        resumeId:""
        
    }
    const validationSchema = Yup.object({
        language:Yup.string().required(Zorunlu_Alan),
        languageLevel:Yup.number(Gecerli_Bir_Sayi_Degil).required(Zorunlu_Alan).min(1,Bir_Ile_Bes_Arasinda_Olmali).max(5,Bir_Ile_Bes_Arasinda_Olmali),
        resumeId:Yup.number(Gecerli_Bir_Sayi_Degil).required(Zorunlu_Alan)
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
                            Dil ekleme
                        </Header>
                        <Segment padded >
                            <Grid>
                                <GridRow>
                                    <GridColumn width={8}>
                                        <HRMSTextInput name="language" placeholder="Dil adı"></HRMSTextInput>
                                        <HRMSTextInput name="languageLevel" placeholder="Dil seviyesi (1-5)"></HRMSTextInput>
                                        <HRMSTextInput name="resumeId" placeholder="cv no geçici"></HRMSTextInput>

                                   
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
