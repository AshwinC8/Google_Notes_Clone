import MenuIcon from "@mui/icons-material/Menu.js";
import { AppBar, Toolbar, Typography, IconButton, styled } from '@mui/material';
import * as React from "react";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 75px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
    color : rgb(95, 99, 104);
    font-size : 24px;
    margin-left : 20px;
     
`

const HeaderBar = ( {open, handleDrawerOpen} ) => {
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';

    return (
        <Header open={open}>
            <Toolbar>
                <IconButton
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt="logo" style={{ width: 30 }}></img>
                <Heading >G Notes</Heading>
            </Toolbar>
        </Header>
    )
}

export default HeaderBar;