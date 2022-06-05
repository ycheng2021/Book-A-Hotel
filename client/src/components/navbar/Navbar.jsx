import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Hotel from "../../images/hotel.png";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Card from "@mui/material/Card";
import "./navbar.css";

const pages = ["List your property", "Support", "Trips", "Sign in"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [openMore, setOpenMore] = useState(false);

  return (
    <div className="navbar">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              className="brandName"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Roboto",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src={Hotel}
                className="hotel-icon"
                alt="colorful design icon for hotel"
              ></img>
              Book-A-Hotel
            </Typography>
            <div className="moreTravelExpand">
              <span className="more-btn" onClick={() => setOpenMore(!openMore)}>
                More travel
                <FontAwesomeIcon className="downCaret" icon={faAngleDown} />
              </span>
              {openMore && (
                <Card className="options-container" sx={{ width: 250}}>
                  <div className="logoText">
                    <div className="horizontal">
                      <FontAwesomeIcon className="more-icons" icon={faHotel} />
                      <span>Stays</span>
                    </div>
                    <div className="horizontal">
                      <FontAwesomeIcon className="more-icons" icon={faPlane} />
                      <span>Flights</span>
                    </div>
                    <div className="horizontal">
                      <FontAwesomeIcon className="more-icons" icon={faCar} />
                      <span>Cars</span>
                    </div>
                    <div className="horizontal">
                      <FontAwesomeIcon className="more-icons" icon={faBagShopping} />
                      <span>Packages</span>
                    </div>
                    <div className="horizontal">
                      <FontAwesomeIcon className="more-icons" icon={faTicket} />
                      <span>Things to do</span>
                    </div>
                    <div className="horizontal">
                      <FontAwesomeIcon className="more-icons" icon={faShip} />
                      <span>Cruises</span>
                    </div>
                    <div className="horizontal">
                      <span>Deals</span>
                    </div>
                    <div className="horizontal">
                      <span>Groups & meetings</span>
                    </div>
                  </div>
                </Card>
              )}
            </div>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Roboto",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Book-A-Hotel
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key="English"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <FontAwesomeIcon className="icon" icon={faGlobe} />
                English
              </Button>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default ResponsiveAppBar;
