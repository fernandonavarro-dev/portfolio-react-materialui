import React, {useState} from 'react'
import { makeStyles } from '@material-ui/styles'
import RightMenuSlider from "@material-ui/core/Drawer"
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
// import avatar from "../avatar.png"
import pencilPortrait from "../pencilPortraitTorso.png"

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#505050",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: ".5rem auto",
        width: "10rem",
        height: "10rem",
        // width: theme.spacing(13),
        // height: theme.spacing(13)
    },
    // listItem: {
    //     color: "#FE97B7",
    //     background: "#FE97B7"
    // }
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
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    }
    const classes = useStyles();

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={pencilPortrait} alt="Fernando Navarro" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon classname={classes.listItem} style={{ color: "#FE97B7" }}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText classname={classes.listItem} style={{ color: "#00B293" }} primary={lsItem.listText} />
                    </ListItem>
                ))}

            </List>
        </Box>
    )
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)} >
                            <ArrowBack style={{ color: "#FE97B7", background: "#222" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#00B293" }} >
                            Portfolio
                    </Typography>
                    <RightMenuSlider
                    anchor="right"
                        open={state.right}
                        onClose={toggleSlider("right", false)} >
                        {sideList("right")}
                    </RightMenuSlider>
                    </Toolbar>
                </AppBar>

            </Box>
        </>
    )
}

export default Navbar
