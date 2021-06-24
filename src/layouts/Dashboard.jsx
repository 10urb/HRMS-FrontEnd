import React from 'react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import { Grid, GridColumn } from 'semantic-ui-react'
import JobAdvertisementOrderDateDesc from '../pages/JobAdvertisementOrderDateDesc'
import { Route } from 'react-router-dom'
import JobAdvertisementForm from '../forms/JobAdvertisementForm'
import ResumeFormPost from '../forms/ResumeForm'
import EmployerForm from '../forms/EmployerForm'
import SidebarMenu from './SidebarMenu'
import EmployerList from '../pages/EmployerList'
import JobSeekerForm from '../forms/JobSeekerForm'



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
                        <Route exact path="/jobadvertisementform" component={JobAdvertisementForm} />
                        <Route exact path="/resumeformpost" component={ResumeFormPost} />
                        <Route exact path="/employerform" component={EmployerForm} />
                        <Route exact path="/employerslist" component={EmployerList} />
                        <Route exact path="/jobseekerform" component={JobSeekerForm} />

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
