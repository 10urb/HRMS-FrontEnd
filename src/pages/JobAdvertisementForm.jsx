import { Formik } from 'formik'
import React from 'react'
import { Label } from 'reactstrap'
import { Dropdown, Menu } from 'semantic-ui-react'

function JobAdvertisementForm() {
    return (
        <div>
            <Formik >
                <Menu.Item >
                    <Dropdown  search multiple selection text="Çalışma zamanı"></Dropdown>
               
                </Menu.Item>
            </Formik>
        </div>
    )
}

export default JobAdvertisementForm
