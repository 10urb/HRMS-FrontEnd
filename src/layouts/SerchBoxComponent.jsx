import React, { Component } from 'react'
import { Grid, Search } from 'semantic-ui-react'

export default class SerchBoxComponent extends Component {
    render() {
        return (
            <div>
                <Grid style={{ marginTop: "3em" }} inverted >
                    <Grid.Column width={15}>
                        <Search minCharacters={5} size="large" />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
