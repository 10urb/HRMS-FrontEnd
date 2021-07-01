import React from 'react'
import { useEffect,useState } from 'react'
import * as Yup from "yup"
import { Formik } from 'formik'
import { Button, Form, Grid, GridColumn, Header, Divider, Segment, GridRow } from 'semantic-ui-react'
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput'
import KnownTechnologyService from '../services/knownTechnologyService'
import { Gecerli_Bir_Sayi_Degil, Zorunlu_Alan } from './JobAdvertisementForm'


export default function KnownTechnologyForm() {

    const [knownTechnology, setknownTechnology] = useState([])
    useEffect(() => {
        let knownTechnologyService = new KnownTechnologyService()
        knownTechnologyService.getGetAll().then(result => setknownTechnology(result.data.data))
    }, [])

    const initialValues = {
        technology:"",
        resumeId:""
        
    }
    const validationSchema = Yup.object({
        technology:Yup.string().required(Zorunlu_Alan),
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
                            Teknoloji ekleme
                        </Header>
                        <Segment padded >
                            <Grid>
                                <GridRow>
                                    <GridColumn width={8}>
                                        <HRMSTextInput name="technology" placeholder="Teknoloji adı giriniz"></HRMSTextInput>
                                        <HRMSTextInput name="resumeId" placeholder="cv no  //geçici"></HRMSTextInput>

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
