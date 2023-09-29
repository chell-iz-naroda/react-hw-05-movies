import { Nav, StyledLink } from "./Nav.styled"

export const NavMenu =   () => {
    return (
        <>
            <Nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/movies">Movies</StyledLink>
            </Nav>
        </>
    );
}