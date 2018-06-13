import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


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
    }
    
}

class Home extends Component {
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

    render() {
        const { profile } = this.state;
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container">
            {
                isAuthenticated() && (
                    <div style={styles.root}>
                        <AppBar position="static">
                            <Toolbar>
                            <Typography variant="subheading" color="inherit" style={styles.flex}>
                                UFM-CryptoHunt
                            </Typography>
                            <Button color="inherit" onClick = {this.logout.bind(this)}>Logout</Button>
                            </Toolbar>
                        </AppBar>

                        <br/>
                        <LinearProgress color="secondary"/>
                        <br/>
                        
                        <Grid container spacing={0} wrap="nowrap">
                            <Grid item xs={6} style={styles.userGrid}>
                                <Avatar
                                    alt={profile.nickname}
                                    src={profile.picture}
                                    style={styles.bigAvatar}
                                />
                                <Typography variant="subheading" noWrap>
                                    {profile.nickname}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} style={styles.ethGrid}>
                                <Typography variant="headline" color="inherit" align="center">
                                    3.5 ETH
                                </Typography>
                            </Grid>
                        </Grid>

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