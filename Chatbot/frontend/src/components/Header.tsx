import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";
import {Avatar} from "@mui/material";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "#1B1212", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <Avatar
                    sx={{
                      bgcolor: "#1B1212",
                      color: "#8B0000",
                      fontWeight: 500,
                    }}
                >
                  {auth?.user?.name[0]}
                  {auth?.user?.name.split(" ")[1][0]}
                </Avatar>

                <NavigationLink
                    bg="#8B0000"
                    to="/chat"
                    text="Go To Chat"
                    textColor="#1B1212"
                />

                <NavigationLink
                    bg="#1B1212"
                    textColor="#8B0000"
                    to="/"
                    text="logout"
                    onClick={auth.logout}
                />
              </div>

            </>
          ) : (
            <>
              <NavigationLink
                bg="#8B0000"
                to="/login"
                text="Login"
                textColor="#1B1212"
              />
              <NavigationLink
                bg="#1B1212"
                textColor="#8B0000"
                to="/signup"
                text="Signup"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
