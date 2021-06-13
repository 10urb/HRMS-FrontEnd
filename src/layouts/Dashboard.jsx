import React from 'react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobAdvertisements from './JobAdvertisements'
import { Grid, GridColumn } from 'semantic-ui-react'
import JobAdvertisementOrderDateDesc from '../pages/JobAdvertisementOrderDateDesc'



export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <JobAdvertisements/>
                    </GridColumn>
                    <Grid.Column width={12}> 
                        <JobAdvertisementList/>
                      
                    </Grid.Column>
                </Grid.Row>
            </Grid>
           <JobAdvertisementOrderDateDesc/>
          
        </div>

    )
}
