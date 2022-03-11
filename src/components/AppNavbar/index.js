import { cloneElement } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import logo from "../../assets/img/logo.png";

const ElevationScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const AppNavbar = (props) => {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "#fff",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
            paddingLeft: "24px",
          }}
        >
          <Toolbar>
            <img src={logo} alt="logo" />
            <Typography variant="h6" component="div">
              Scroll to Elevate App Bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

export default AppNavbar;
