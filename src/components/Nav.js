import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    return (
        <StyledNav>
            <StyledLogo>
                <strong>Anime</strong>Bros
            </StyledLogo>
            <StyledNavBar>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/topanime">Top Anime</Link>
                </li>
            </StyledNavBar>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vh;
`;

const StyledLogo = styled.h1`
    padding: 1rem;
    text-align: center;
    color: #dfdbd8;
    font-size: 2.5rem;
    strong {
        color: #9d7463;
    }
`;

const StyledNavBar = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
`;

export default Nav;
