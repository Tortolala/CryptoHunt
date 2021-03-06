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

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';

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

function getSteps() {
  return ['Bienvenid@ a CryptoHunter!',
  'Registro',
  'Credenciales',
  'CryptoHunt',
  'Adivinanzas',
  'Hints',
  'Estaciones',
  'Premio',
  'Login Page'];
}

function getStepContent(step) {
  switch (step) {
    // 0 : Bienvenida
    case 0:
      return `Los alumnos de Computer Science, del curso, "Technologies & Freedom",
      te damos la bienvenida a nuestro juego basado en blockchain!
      Esperamos que lo disfrutes, pero sobretodo, que experimentes un poco
      de todo lo que se puede realizar con ésta nueva tecnología!`;
    // 1 : Registro
    case 1:
      return `Para ingresar a la red de "CryptoHunt", debes de crear una cuenta,
      la cual automáticamente, te creará tu "wallet", y con la cual estarás almacenando
      los "MarroCoins" que recolectes durante el juego.
      Puedes crear tu cuenta con la plataforma de tu preferencia entre facebook & google.`;

    // 2 : Credenciales
    case 2:
      return `Al momento de crear tu cuenta, se te asignará una llave privada única,
      la cual se verá como una cadena de caracteres entre números y letras.
      Te recomendamos almacenar ésta credencial junto con tu contraseña en un lugar seguro`;

    // 3 : CryptoHunt
    case 3:
      return `CryptoHunt, es un juego basado en la metodología de "búsqueda del tesoro",
      pero en éste caso, cada vez que cumplas con el reto asignado, dependiendo de tu
      efectividad para resolverlo, se te acreditarán cierta cantidad de MarroCoins en tu wallet.
      Mientras más rápido te muevas, más MarroCoins ganas, y recuerda que el juego dura 60 minutos.`;

    // 4 : Adivinanzas
    case 4:
      return `Para cumplir cada reto, se te presentará una adivinanza o acertijo,
      el cual debes de resolver para descifrar el CryptoSpot exacto al que te debes de
      dirigir para que se te presente el siguiente reto. El juego se desarrolla en 7
      CryptoSpots dentro del campus de la UFM.`;

    // 5 : Hints
    case 5:
      return `En caso de que no logres descifrar el acertijo, dispones de hasta 2 "hints".
      Ambos son pagados pero con diferente precio. Por el primero, se te descontarán 15 MarroCoins (MC),
      mientras que por el segundo, 25 MarroCoins`;

    // 6 : Estaciones
    case 6:
      return `Para identificar el CryptoSpot al que te llevará el acertijo del reto,
      encontrarás un sticker con el logo de CryptoHunt y un código, el cual debes de ingresar
      en la plataforma para que se te asigne el siguiente reto.
      * En la última estación, se te pedirá que llenes una encuesta para fines académicos.`;

    // 7 : Premio
    case 7:
      return `Al final del juego, se premiará al CryptoHunter que tenga la wallet más llena,
      es decir, que haya recolectado la mayor cantidad de MarroCoins`;

    // 8 : LoginPage (Facebook || Google)
    case 8:
      return `A continuación, puedes ingresar al juego CryptoHunt iniciando sesión
      con la plataforma de tu preferencia, Facebook o Google.`;

    default:
      return 'Unknown step';
  }
}


export class LandingPage extends Component {
    login() {
        this.props.auth.login();
    }


    state = {
   activeStep: 0,
 };

 handleNext = () => {
   this.setState({
     activeStep: this.state.activeStep + 1,
   });
 };

 handleBack = () => {
   this.setState({
     activeStep: this.state.activeStep - 1,
   });
 };

 handleReset = () => {
   this.setState({
     activeStep: 0,
   });
 };


    render() {


        const steps = getSteps();
   const { activeStep } = this.state;

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


                <div className={styles.root}>
       <Stepper activeStep={activeStep} orientation="vertical">
         {steps.map((label, index) => {
           return (
             <Step key={label}>
               <StepLabel>{label}</StepLabel>
               <StepContent>
                 <Typography>{getStepContent(index)}</Typography>
                 <div className={styles.actionsContainer}>
                   <div>
                     <Button
                       disabled={activeStep === 0}
                       onClick={this.handleBack}
                       className={styles.button}
                     >
                       Atrás
                     </Button>
                     <Button
                       variant="contained"
                       color="primary"
                       onClick={this.handleNext}
                       className={styles.button}
                     >
                       {activeStep === steps.length - 1 ? 'Login' : 'Siguiente'}
                     </Button>
                   </div>
                 </div>
               </StepContent>
             </Step>
           );
         })}
       </Stepper>
       {activeStep === steps.length && (
         <Paper square elevation={0} className={styles.resetContainer}>
           <Typography>All steps completed - you&quot;re finished</Typography>
           <Button onClick={this.handleReset} className={styles.button}>
             Reset
           </Button>
         </Paper>
       )}
     </div>


            </div>
        );
    }
}
