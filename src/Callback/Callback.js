import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

class Callback extends Component {
    render() {
        return (
            <div>
                <Typography variant="display3" align="center" gutterBottom>
                Cargando...
                </Typography>
                <br/>
                <LinearProgress color="secondary" />
            </div>
        );
    }
}

export default Callback;