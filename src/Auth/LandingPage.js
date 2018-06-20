import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    bigAvatar: {
        width: 60,
        height: 60,
        margin: 10,
        float: "left",
    },
    userGrid: {
        display: "flex",
        alignItems: "center"
    },
    ethGrid:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "inset 0px 0px 0px 1px black",
        backgroundColor: "#c3cbff",
    },
    card: {
    minWidth: 275,
    maxWidth: 500,
    marginTop: 50,
    marginLeft: 0,

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

}

export class LandingPage extends Component {
    login() {
        this.props.auth.login();
    }

    render() {
        return(
            <div>
                {/*<Grid container spacing={24} justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="display3" align="center" gutterBottom>
                            UFM CryptoHunt
                        </Typography>
                        <Button variant="contained" color="primary" fullWidth onClick={this.login.bind(this)}>
                            Empezar
                        </Button>
                    </Grid>
                </Grid>*/}



                <AppBar position="static">

                    <Toolbar>

                        <Typography variant="subheading" color="inherit" style={styles.flex}>
                            UFM CryptoHunt
                        </Typography>

                        <Button color="inherit" onClick={this.login.bind(this)}> Log In </Button>

                    </Toolbar>

                </AppBar>


                <Card style={styles.card}>

                   <CardContent>

                     <Typography variant="headline" component="h2">
                         Instrucciones
                     </Typography>

                     <Typography style={styles.pos} color="textSecondary">
                       Descifra la adivinanza
                     </Typography>
                     <Typography component="p">

                         Te ofrecemos hasta 2 hints (pagados) por si los necesitas. <br />

                         Ve al Cryptospot y escanea el código QR. <br />

                         Sigue avanzando! <br />

                         Por último, responde las preguntas lo más sincero posible, no hay malas respuestas. <br />

                         *Tiempo limitado <br />
                         *Mientras más rápido te muevas, más tokens ganas

                     </Typography>
                   </CardContent>

                   {/*<CardActions>
                     <Button size="medium" color="primary"> Continuar </Button>
                   </CardActions>*/}

                </Card>



            </div>
        );
    }
}
