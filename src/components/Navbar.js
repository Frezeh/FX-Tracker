import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { logoutUser } from "../redux/ActionCreators";
import { useDispatch } from "react-redux";

export default function NavBar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <React.Fragment>
      <Navbar>
        <div className="container d-flex justify-content-between align-items-center">
          <NavbarBrand>
            <div className="logo">
              <a href="/">
                <img
                  src="assets/images/logo.png"
                  height="100"
                  width="100"
                  alt="Failed to load"
                  class="img-fluid"
                />
              </a>
            </div>
          </NavbarBrand>

          <Nav navbar>
            <NavItem>
              <Button
                outline
                onClick={handleLogout}
                style={{ color: "white", backgroundColor: "purple" }}
              >
                Logout
              </Button>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </React.Fragment>
  );
}
