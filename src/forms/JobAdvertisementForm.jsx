import React, { useEffect, useState } from 'react'
import WorkingTimeService from '../services/workingTimeService'
import CityService from '../services/cityService'
import JobAdvertisementService from '../services/jobAdvertisementService'
import WorkplaceService from '../services/workplaceService'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput'
import { Button, Grid, GridColumn, Header, Divider, Segment } from 'semantic-ui-react'
export const Zorunlu_Alan = "Zorunlu alan"
export const Tarih_Girmelisiniz = "Tarih girmelisiniz"
export const Posta_Adresi_Gecerli_Degil = "Posta adresi geçerli değil"
export const Gecerli_Bir_Sayi_Degil = "Geçerli bir sayı değil"


export default function JobAdvertisementForm() {


    let jobAdvertisementService = new JobAdvertisementService()
    const [workingTime, setWorkingTime] = useState([])
    const [workplace, setWorkplace] = useState([])
    const [city, setCity] = useState([])
    const [jobAdvertisement, setjobAdvertisement] = useState([])

    useEffect(() => {
        let workingTimeService = new WorkingTimeService()
        workingTimeService.getGetAll().then(result => setWorkingTime(result.data.data))

        let workplaceService = new WorkplaceService()
        workplaceService.getGetAll().then(result => setWorkplace(result.data.data))

       

        let cityService = new CityService()
        cityService.getAllCity().then(result => setCity(result.data.data))
    }, [])




    const workingTimeOption = workingTime.map((workingTime, index) => ({
        key: index,
        text: workingTime.workingTime,
        value: workingTime.workingTimeId,
    }));

    const cityOption = city.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.id
    }));

    const workplaceOption = workplace.map((workplace, index) => ({
        key: index,
        text: workplace.typeOfWorkplace,
        value: workplace.id,
    }))

    const initialValues = {
        companyName: "",
        companyMail: "",
        city: "",
        workingTime: "",
        workplace: "",
        webSite: "",
        jobDescription: "",
        minSalary: "",
        maxSalary: "",
        numberOfOpenPosition: "",
        publicationDate: "",
        applicationDeadline: "",
        positionName: ""
    }

    const validationSchema = Yup.object({
        companyName: Yup.string().required(Zorunlu_Alan),
        companyMail: Yup.string().email(Posta_Adresi_Gecerli_Degil).required(Zorunlu_Alan),
        city: Yup.string().required(Zorunlu_Alan),
        workingTime: Yup.string().required(Zorunlu_Alan),
        workplace: Yup.string().required(Zorunlu_Alan),
        webSite: Yup.string().required(Zorunlu_Alan),
        jobDescription: Yup.string().required(Zorunlu_Alan),
        minSalary: Yup.number(Gecerli_Bir_Sayi_Degil).required(Zorunlu_Alan),
        maxSalary: Yup.number(Gecerli_Bir_Sayi_Degil).required(Zorunlu_Alan),
        numberOfOpenPosition: Yup.number(Gecerli_Bir_Sayi_Degil).required(Zorunlu_Alan),
        publicationDate: Yup.date(Tarih_Girmelisiniz).required(Zorunlu_Alan),
        applicationDeadline: Yup.date(Tarih_Girmelisiniz).required(Zorunlu_Alan),
        positionName: Yup.string().required(Zorunlu_Alan),

    })
    return (
        <div>
      
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values)
                jobAdvertisementService.postAdd()
                

            }}
        >

            <Form className="ui form">
           

                <Header as='h3' disabled dividing>
                    İş İlanı Ekleme
                </Header>
                <Segment padded >
                    <Grid>
                        <Grid.Row>

                            <GridColumn width={8}>
                                <HRMSTextInput name="companyName" placeholder=" Şirket adı"></HRMSTextInput>
                                <HRMSTextInput name="city" placeholder=" Şehir seçiniz"></HRMSTextInput>
                                <HRMSTextInput name="companyMail" placeholder=" Şirket e-posta adresi"></HRMSTextInput>
                                <HRMSTextInput name="webSite" placeholder=" Web sitesi adı"></HRMSTextInput>
                                <HRMSTextInput name="positionName" placeholder=" Pozisyon adı"></HRMSTextInput>
                                <HRMSTextInput name="workingTime" placeholder=" Çalışma zamanı seçiniz"></HRMSTextInput>
                                <HRMSTextInput name="numberOfOpenPosition" placeholder="Açık pozisyon sayısı"></HRMSTextInput>
                            </GridColumn>

                            <GridColumn width={8}>

                                <HRMSTextInput name="workplace" placeholder=" Çalışma yeri seçiniz"></HRMSTextInput>
                                <HRMSTextInput name="jobDescription" placeholder=" İş açıklaması"></HRMSTextInput>
                                <HRMSTextInput name="minSalary" placeholder=" En düşük ücret"></HRMSTextInput>
                                <HRMSTextInput name="maxSalary" placeholder=" En yüksek ücret"></HRMSTextInput>
                                <HRMSTextInput name="publicationDate" placeholder=" Yayın tarihi"></HRMSTextInput>
                                <HRMSTextInput name="applicationDeadline" placeholder=" İlan bitiş tarihi"></HRMSTextInput>
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
