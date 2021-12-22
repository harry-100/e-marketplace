import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { AuthContext } from "../../shared/context/auth-context";

const Logo = styled.h1`
  font-weight: bold;
  font-size: 30px;
  &:hover {
    font-size: 30px;
    cursor: pointer;
  }
  ${mobile({ fontSize: "18px" })}
`;

const Container = styled.div`
  text-decoration: none;
  height: 60px;
  background-color: #d85174;
  ${mobile({ height: "100px" })}
  @media (max-width: 768px) {
    flex-direction: column;
    height: 240px;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flex: 1, justifyContent: "center" })}
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuItem = styled.div`
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    font-size: 25px;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

  @media (max-width: 768px) {
    margin: 7px;
  }
`;

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo href="/">The Garage.</Logo>
        </Left>

        <Right>
          <MenuItem>
            {" "}
            <NavLink to="/collections" exact>
              Collections
            </NavLink>
          </MenuItem>
          {auth.isLoggedIn && (
          <MenuItem>
            <NavLink to="/myGarage">My Garage</NavLink>
          </MenuItem>
          )}
          {!auth.isLoggedIn && (
          <MenuItem>
            <NavLink to="/login">Login/ SignUp</NavLink>
          </MenuItem>
          )}
          {auth.isLoggedIn && (
          <MenuItem>
            <button onClick={auth.logout}>LOGOUT</button>
          </MenuItem>
          )}

          <MenuItem>
            {" "}
            <NavLink to="/cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </NavLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavLinks;
