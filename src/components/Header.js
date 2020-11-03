import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import Typed from 'react-typed'
import pencilPortrait from "../pencilPortraitTorso.png"

// CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar: {
        margin: "2rem", 
        height: "11rem", 
        width: "11rem"
    },
    title: {
        color: "black"
    },
    subtitle: {
        color: "#FE97B7",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={pencilPortrait} alt="Fernando Navarro"  />

            </Grid>
            <Typography className={classes.title} variant="h4" >
                <Typed strings={["Fernando Navarro"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5" >
                <Typed strings={["Web Design", "Web Development", "MERN Stack"]} typeSpeed={40} backSpeed={60} loop />
            </Typography>
        </Box>
    )
}

export default Header
