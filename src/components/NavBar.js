import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import App from "../App";

const NavBar = () => {
    return(
        <div>
            <App position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React & Material UI Simple Application
                    </Typography>
                </Toolbar>
            </App>
        </div>
    )
}

export default NavBar;