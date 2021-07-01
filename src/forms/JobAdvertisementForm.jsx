import React, { useEffect, useState } from 'react'
import WorkingTimeService from '../services/workingTimeService'
import CityService from '../services/cityService'
import JobAdvertisementService from '../services/jobAdvertisementService'
import WorkplaceService from '../services/workplaceService'
import JobTitleService from '../services/jobTitleService'
import { Formik } from 'formik';
import * as Yup from 'yup';
import HRMSTextInput from '../Utilities/CustomFormControls/HRMSTextInput'
import HRMSTextSelectInput from '../Utilities/CustomFormControls/HRMSTextSelectInput'
import { Button, Form, Grid, GridColumn, Header, Divider, Segment } from 'semantic-ui-react'
import { toast } from 'react-toastify'

export const Zorunlu_Alan = "Zorunlu alan"
export const Tarih_Girmelisiniz = "Tarih girmelisiniz"
export const Posta_Adresi_Gecerli_Degil = "Posta adresi geçerli değil"
export const Gecerli_Bir_Sayi_Degil = "Geçerli bir sayı değil"
export const Ekleme_Basarili = "Ekleme başarılı "


export default function JobAdvertisementForm() {
    const [workingTime, setWorkingTime] = useState([])
    const [workplace, setWorkplace] = useState([])
    const [city, setCity] = useState([])
    const [jobAdvertisement, setjobAdvertisement] = useState([])
    const [jobTitle, setJobTitle] = useState([])

    useEffect(() => {
        let workingTimeService = new WorkingTimeService()
        workingTimeService.getGetAll().then(result => setWorkingTime(result.data.data))

        let workplaceService = new WorkplaceService()
        workplaceService.getGetAll().then(result => setWorkplace(result.data.data))

        let cityService = new CityService()
        cityService.getAllCity().then(result => setCity(result.data.data))

        let jobTitleService = new JobTitleService()
        jobTitleService.getGetAll().then(result => setJobTitle(result.data.data))
    }, [])




    const workingTimeOption = workingTime.map((workingTime) => ({
        key: workingTime.workingTimeId,
        text: workingTime.workingTime,
        value: workingTime.workingTime,
    }));

    const cityOption = city.map((city) => ({
        key: city.id,
        text: city.cityName,
        value: city.cityName
    }));

    const workplaceOption = workplace.map((workplace) => ({
        key: workplace.id,
        text: workplace.typeOfWorkplace,
        value: workplace.typeOfWorkplace,
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
        jobTitle: ""
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
        jobTitle: Yup.string().required(Zorunlu_Alan)
    })




    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    // let jobAdvertisementService = new JobAdvertisementService()
                    // jobAdvertisementService.postAdd(values).then(toast.success(Ekleme_Basarili))
                    console.log(values)
                }}
            >
                {({ handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit} className="ui form">
                        <Header as='h3' disabled dividing>
                            İş ilanı ekleme
                        </Header>
                        <Segment padded >
                            <Grid>
                                <Grid.Row>
                                    <GridColumn width={8}>
                                        <HRMSTextInput name="companyName" placeholder=" Şirket adı"></HRMSTextInput>
                                        <HRMSTextSelectInput options={cityOption} placeholder="Şehir seçiniz" name="city" ></HRMSTextSelectInput>
                                        <HRMSTextInput name="companyMail" placeholder=" Şirket e-posta adresi"></HRMSTextInput>
                                        <HRMSTextInput name="webSite" placeholder=" Web sitesi adı"></HRMSTextInput>
                                        <HRMSTextInput name="jobTitle" placeholder=" Pozisyon adı"></HRMSTextInput>
                                        <HRMSTextSelectInput options={workingTimeOption} placeholder="Çalışma zamanı seçiniz" name="workingTime" ></HRMSTextSelectInput>
                                        <HRMSTextInput name="numberOfOpenPosition" placeholder="Açık pozisyon sayısı"></HRMSTextInput>
                                    </GridColumn>
                                    <GridColumn width={8}>
                                        <HRMSTextSelectInput options={workplaceOption} placeholder="Çalışma yeri seçiniz" name="workplace" ></HRMSTextSelectInput>
                                        <HRMSTextInput name="jobDescription" placeholder=" İş açıklaması"></HRMSTextInput>
                                        <HRMSTextInput name="minSalary" placeholder=" En düşük ücret"></HRMSTextInput>
                                        <HRMSTextInput name="maxSalary" placeholder=" En yüksek ücret"></HRMSTextInput>
                                        <HRMSTextInput name="publicationDate" placeholder=" Yayın tarihi"></HRMSTextInput>
                                        <HRMSTextInput name="applicationDeadline" placeholder=" İlan bitiş tarihi"></HRMSTextInput>

                                    </GridColumn>
                                </Grid.Row>
                            </Grid>
                            <Divider ></Divider>
                            <Button color="olive" circular type="submit">Ekle</Button>

                        </Segment>
                    </Form>
                )}
            </Formik>

            <Header as='h6' icon disabled dividing>
                HRMS
            </Header>

        </div >
    )
}
