import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core"
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import avatar from "../avatar.png"
import pencilPortrait from "../pencilPortfolio.png"

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#505050",
        height: "30rem"
    },
    avatar: {
        display: "block",
        margin: ".5rem auto",
        width: "8rem",
        height: "8rem",
        // width: theme.spacing(13),
        // height: theme.spacing(13)
    },
    listItem: {
        color: "#FE97B7",  
        background: "#FE97B7"  
      }
}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact"
    }
]

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.menuSliderContainer} component="div">
                <Avatar className={classes.avatar} src={pencilPortrait} alt="Fernando Navarro" />
                <Divider />
                <List>
                    {menuItems.map((lsItem, key) => (
                        <ListItem button key={key}>
                            <ListItemIcon classname={classes.listItem} style={{color:"#FE97B7"}}>
                                {lsItem.listIcon}
                            </ListItemIcon>
                            <ListItemText classname={classes.listItem} style={{color:"#00B293"}} primary={lsItem.listText} />
                        </ListItem>
                    ))}

                </List>
            </Box>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{ color: "#FE97B7", background: "#222" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#00B293" }} >
                            Portfolio
                    </Typography>
                    </Toolbar>
                </AppBar>

            </Box>
        </>
    )
}

export default Navbar
