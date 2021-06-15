import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Button, Label, Menu, MenuHeader } from 'semantic-ui-react';

export default function SignUpForm() {
    return (
        <div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={async (values) => {

                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ isSubmitting }) => (
                    <Form >
                        <Menu vertical >

                            <Menu.Item>
                            <Label basic htmlFor="firstName" >İsim</Label>
                            <Field name="firstName" placeholder="İsim" />
                        </Menu.Item>
                        <Menu.Item>
                            <Label basic htmlFor="lastName">Soyisim</Label>
                            <Field name="lastName" placeholder="Soyisim" />
                        </Menu.Item>
                        <Menu.Item>
                            <Label basic htmlFor="companyMail">Şirket E-Posta</Label>
                            <Field name="companyMail" placeholder="Şirket E-Posta Adresi" />
                        </Menu.Item>
                        <Menu.Item >
                            <Label  basic htmlFor="phoneNumber">Telefon bilgisi</Label>
                            <Field  name="phoneNumber" placeholder="Telefon Bilgisi" />
                        </Menu.Item>
                        <Menu.Item>
                            <Label basic htmlFor="webSite">Web Adresi</Label>
                            <Field name="webSite" placeholder="Web Adresi" type="webSite" />
                        </Menu.Item>
                        <Menu.Item>
                            <Button basic  type="submit" disabled={isSubmitting}>
                                Kaydol
                            </Button>
                        </Menu.Item>
                        </Menu>
                        
                    </Form>
                )}
            </Formik>
        </div>
    )
}
