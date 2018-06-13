import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

export class LandingPage extends Component { 
    login() {
        this.props.auth.login();
    }

    render() {
        return(
            <div>
                <Grid container spacing={24} justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="display3" align="center" gutterBottom>
                            UFM CryptoHunt
                        </Typography>
                        <Button variant="contained" color="primary" fullWidth onClick={this.login.bind(this)}>
                            Empezar
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}