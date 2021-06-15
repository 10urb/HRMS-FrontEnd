import React from 'react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobAdvertisements from './JobAdvertisements'
import { Grid, GridColumn } from 'semantic-ui-react'
import JobAdvertisementOrderDateDesc from '../pages/JobAdvertisementOrderDateDesc'
import { Route } from 'react-router-dom'



export default function Dashboard() {
    return (
        <div>
            <Grid>
                
                <Grid.Row>
                    <GridColumn width={4}>
                      
                    </GridColumn>
                    <Grid.Column width={12}> 
                    <Route exact path="/" component={JobAdvertisementList}/>,
                    <Route exact path="/jobadvertisements" component={JobAdvertisementList}/>
                    <Route exact path="/jobadvertisementsdesc" component={JobAdvertisementOrderDateDesc}/>
                   

                    </Grid.Column>
                </Grid.Row>
            </Grid>
       
          
        </div>

    )
}
