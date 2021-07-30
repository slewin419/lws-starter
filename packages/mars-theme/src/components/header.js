import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import tw from "tailwind.macro";

const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
]

const Header = styled.header`
  ${tw`bg-indigo-600`};
`;

const Nav = styled("nav")`
    ${tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`};
`;

const NavContainer = styled("NavContainer")`
    ${tw`w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none`};
`;

const FlexItemsCenter = styled("FlexItemsCenter")`
    ${tw`flex items-center`};
`;

const Image = styled("img")`
    ${tw`h-10 w-auto`};
`;

const NavLinksList = styled("NavLinks")`
    ${tw`hidden ml-10 lg:block`};    
`;

const NavLink = styled("NavLink")`
    ${tw`text-base font-medium text-white hover:text-indigo-50`};
    margin-left: 2rem;
    margin-right: 2rem;
`;

const ScreenReaderText = styled("ScreenReaderText")`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0
`;

const RoundedButton = styled("RoundedButton")`
    ${tw`inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75`};
`;

const SimpleHeader = ({ state }) => {
  return (
      <Header>
          <Nav aria-label="Top">
              <NavContainer>
                  <FlexItemsCenter>
                      <a href="#">
                          <ScreenReaderText>Workflow</ScreenReaderText>
                          <Image src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt=""/>
                      </a>
                      <NavLinksList>
                          {navigation.map((link) => (
                              <NavLink key={link.name} href={link.href}>
                                  {link.name}
                              </NavLink>
                          ))}
                      </NavLinksList>
                  </FlexItemsCenter>
                  <div className="ml-10 space-x-4">
                      <RoundedButton href="#"> Sign in </RoundedButton>
                      <RoundedButton href="#"> Sign up </RoundedButton>
                  </div>
              </NavContainer>
              <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                  {navigation.map((link) => (
                      <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                          {link.name}
                      </a>
                  ))}
              </div>
          </Nav>
      </Header>
    /*<>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>*/
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(SimpleHeader);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
