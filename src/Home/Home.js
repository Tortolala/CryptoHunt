import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Popover from '@material-ui/core/Popover';
import CardMedia from '@material-ui/core/CardMedia';
import Input from '@material-ui/core/Input';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

function getSteps() {
  return ["1", "2", "3", "4", "5", "6", "7"];
}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    color: "red",
  },
});


const styles = {

    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    bigAvatar: {
        width: 100,
        height: 100,
        margin: 15,
        marginLeft: "calc(50% - 50px)",
        border: "solid",
        borderColor: "#F2105A",
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
        // maxWidth: 500,
        // marginLeft: "calc(50% - 250px)",
        // height: "650px",
        display: 'block',
        width: '50vw',
        transitionDuration: '0.2s',
        height: '50vw'
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
    tabLabel: {
        color: "#ddd",
    },
    font: {
        font: "roboto",
    },
    table: {
        minWidth: 700,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    popover: {
        margin: "15px",
    },
    // DEF CLASSES
    showKey: {
        width: "200px",
        padding: "5px",
        marginLeft: "calc(50% - 100px)",
    },
    privateKey: {
        visibility: "hidden"
    }

}


let id = 0;
function createData(name, tokens) {
  id += 1;
  return { id, name, tokens };
}

const data = [
  createData('Juan R.', 250),
  createData('Fernanda', 237),
  createData('Luis A.', 262),
  createData('Marisa', 305),
  createData('Edgar', 356,),
];



class Home extends Component {



    //Stepper

    state = {
       activeStep: 0,
    };

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
          activeStep: activeStep - 1,
        });
      };

      handleReset = () => {
        this.setState({
          activeStep: 0,
        });
    };



    //FINISH STEPPER






    state = {
       completed: 0,
     };

    state = {
      value: 0,
    };

    handleChange = (event, value) => {
       this.setState({ value });
     };


    componentWillMount() {
        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
            });
        }
        else {
            this.setState( { profile: userProfile })
        }
    }

    logout() {
        this.props.auth.logout();
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }





         submitAnswer = {
            //Sumar 1 a la estacion

         }

         state = {
            anchorEl: null,
          };

          handleClick = event => {
            this.setState({
              anchorEl: event.currentTarget,
            });
          };

          handleClose = () => {
            this.setState({
              anchorEl: null,
            });
          };


    render() {


        const { classes } = this.props;
        const { value } = this.state;
        const { profile } = this.state;
        const { isAuthenticated } = this.props.auth;
        const { count, page, rowsPerPage } = this.props;
        const { anchorEl } = this.state;


        // STEPPER
        const steps = getSteps();
        const { activeStep } = this.state;

        return (

            <div className="container">

            {
                isAuthenticated() && (
                    <div style={styles.root}>

                        <AppBar position="static">

                            <Toolbar>

                                <Typography variant="subheading" color="inherit" style={styles.flex}>
                                    UFM CryptoHunt
                                </Typography>

                                <Button color="inherit" onClick = {this.logout.bind(this)}> Log Out </Button>

                            </Toolbar>

                            <Tabs value={value} onChange={this.handleChange}
                              indicatorColor="secondary"
                              textColor="primary"
                              centered>
                              <Tab style={styles.tabLabel} label="Profile" />
                              <Tab style={styles.tabLabel} label="Hunt" />
                              <Tab style={styles.tabLabel} label="Hunters" />
                            </Tabs>

                        </AppBar>

                        {value === 0 && <TabContainer>



                            <Card style={styles.card}>



                               <CardContent>

                                   <Avatar
                                       src={profile.picture}
                                       style={styles.bigAvatar}
                                   />

                                   <Typography variant="title" align="center">

                                       {profile.nickname}

                                   </Typography>

                                   <br/>

                                   <Typography variant="subheading" align="center" gutterBottom>

                                       Ethereum address:

                                   </Typography>

                                   <Typography variant="body1" align="center" gutterBottom>

                                       1Ace0e17b704A0ea258C089a60fFAf9412f4D395

                                   </Typography>

                                   <br/>

                                   <Typography variant="subheading" align="center" gutterBottom>

                                       Marrocoins tokens:

                                   </Typography>

                                   <Typography variant="body1" align="center" gutterBottom>

                                       70.04

                                   </Typography>

                               </CardContent>

                               <CardActions>

                                   <Button  variant="outlined" size="medium" color="primary" style={styles.showKey}> Mostrar llave privada </Button>

                               </CardActions>

                               <Typography variant="body1" align="center" gutterBottom style={styles.privateKey}>

                                   bf907a8dcd5cd838c6c944eead0ea230<br/>
                                   7886d31dca77ea768d3e24a4a59ba7f3

                               </Typography>

                               <br/>

                           </Card>




                            {/*<Grid container spacing={0} wrap="nowrap">
                                <Grid item xs={6} style={styles.userGrid}>

                                    <Avatar
                                        alt={profile.nickname}
                                        src={profile.picture}
                                        style={styles.bigAvatar}
                                    />

                                <Typography style={styles.font}  variant="subheading" noWrap>
                                        {profile.nickname}

                                    </Typography>
                                </Grid>


                            </Grid>*/}



                        </TabContainer>}

                        {value === 1 && <TabContainer>


                            <Card style={styles.card}>


                                <Stepper activeStep={activeStep} alternativeLabel>
                                      {steps.map(label => {
                                        return (
                                          <Step>
                                            <StepLabel />
                                          </Step>
                                        );
                                      })}
                                    </Stepper>
                                    <div>
                                      {this.state.activeStep === steps.length ? (
                                        <div>
                                          <Typography>
                                            All steps completed - you&quot;re finished
                                          </Typography>
                                          <Button onClick={this.handleReset}>Reset</Button>
                                        </div>
                                      ) : (
                                        <div>

                                          {/*<div>
                                            <Button
                                              disabled={activeStep === 0}
                                              onClick={this.handleBack}
                                            >
                                              Back
                                            </Button>
                                            <Button
                                              variant="contained"
                                              color="primary"
                                              onClick={this.handleNext}
                                            >
                                              {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                            </Button>
                                          </div>*/}
                                        </div>
                                      )}
                                    </div>

                                    <CardContent>
                                      <Typography gutterBottom variant="headline" component="h2">

                                          Estación no. 1

                                      </Typography>
                                      <Typography component="p">
                                        El original está en Puebla, México
                                      </Typography>
                                    </CardContent>
                                    <CardActions>
                                      <Button size="medium" color="secondary" onClick={this.handleClick}>
                                        Hint 1
                                      </Button>
                                      <Popover
                                        className={styles.popover}
                                        open={Boolean(anchorEl)}
                                        anchorEl={anchorEl}
                                        onClose={this.handleClose}
                                        anchorOrigin={{
                                          vertical: 'bottom',
                                          horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                          vertical: 'bottom',
                                          horizontal: 'center',
                                        }}
                                      >
                                        <Typography className={styles.typography}> Esta es la pista... </Typography>
                                      </Popover>
                                      <Button size="medium" color="secondary" onClick={this.handleClick}>
                                        Hint 2
                                      </Button>
                                    </CardActions>

                                    <Input
                                        centered
                                        placeholder="Insertar código"
                                        className={styles.input}
                                        inputProps={{
                                          'aria-label': 'Description',
                                        }}
                                      />

                                  <Button size="big" color="primary" onClick={this.submitAnswer}>
                                        Enviar
                                      </Button>

                                  </Card>





                        </TabContainer>}


                        {value === 2 && <TabContainer>



                            <Paper className={styles.root}>

                                    {/*Live Score*/}

                                  <Table className={styles.table}>
                                    <TableHead>
                                      <TableRow>
                                        <TableCell> Hunter Alias </TableCell>
                                        <TableCell numeric> Tokens </TableCell>

                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {data.map(n => {
                                        return (
                                          <TableRow key={n.id}>
                                            <TableCell component="th" scope="row">
                                              {n.name}
                                            </TableCell>
                                            <TableCell numeric>{n.tokens}</TableCell>
                                          </TableRow>
                                        );
                                      })}
                                    </TableBody>
                                  </Table>
                                </Paper>


                        </TabContainer>}

                    </div>
                )
            }

            {
                !isAuthenticated() && (
                    <div>
                        {this.logout()}
                    </div>
                )
            }
            </div>
        );
    }
}


export default Home;
