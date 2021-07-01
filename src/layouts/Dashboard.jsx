import React from 'react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import { Grid, GridColumn } from 'semantic-ui-react'
import JobAdvertisementOrderDateDesc from '../pages/JobAdvertisementOrderDateDesc'
import { Route } from 'react-router-dom'
import JobAdvertisementForm from '../forms/JobAdvertisementForm'
import EmployerForm from '../forms/EmployerForm'
import SidebarMenu from './SidebarMenu'
import EmployerList from '../pages/EmployerList'
import JobSeekerForm from '../forms/JobSeekerForm'
import EducationInformationForm from '../forms/EducationInformationForm'
import ResumeForm from '../forms/ResumeForm'
import ConfirmToUsers from '../pages/ConfirmToUsers'
import ConfirmToAdvertisements from '../pages/ConfirmToAdvertisements'
import WorkplaceForm from '../forms/WorkplaceForm'
import WorkingTimeForm from '../forms/WorkingTimeForm'
import KnownTechnologyForm from '../forms/KnownTechnologyForm'
import KnownLanguageForm from '../forms/KnownLanguageForm'



export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={3}>
                        <SidebarMenu />
                    </GridColumn>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={SidebarMenu} />
                        <Route exact path="/jobadvertisements" component={JobAdvertisementList} />
                        <Route exact path="/jobadvertisements/desc" component={JobAdvertisementOrderDateDesc} />
                        <Route exact path="/jobadvertisements/form" component={JobAdvertisementForm} />
                        <Route exact path="/resumes/form" component={ResumeForm} />
                        <Route exact path="/employers/form" component={EmployerForm} />
                        <Route exact path="/employers/list" component={EmployerList} />
                        <Route exact path="/jobseekers/form" component={JobSeekerForm} />
                        <Route exact path="/educationinformations/form" component={EducationInformationForm} />
                        <Route exact path="/confirmto/users" component={ConfirmToUsers} />
                        <Route exact path="/confirmto/advertisements" component={ConfirmToAdvertisements} />
                        <Route exact path="/workplaces/form" component={WorkplaceForm} />
                        <Route exact path="/workingtimes/form" component={WorkingTimeForm} />
                        <Route exact path="/knowntechnologies/form" component={KnownTechnologyForm} />
                        <Route exact path="/knownlanguages/form" component={  KnownLanguageForm} />
                     
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
