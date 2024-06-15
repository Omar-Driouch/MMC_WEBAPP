import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom" 
import { Link, NavLink} from "react-router-dom";
import { colors } from "../../theme";
import styled from "styled-components"
const {yellow} = colors;
const HeaderContainer = styled.header`
  height:90px;
  position:fixed;
  inset:0;
  z-index:1000;
  display:flex;
  align-items:center;
  background:#ffffffbb;
  transition: 0.3s ease-in;
  &.active{
  background:#fff;
  backdrop-filter: blur(20px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
  rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }
`;
const Container = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   width:1200px;
   margin:0 auto;
   @media (max-width:992px){
    padding:0 20px;
  }
`;

const LogoBox = styled(Link)``;
const LogoImage = styled.img``;
const Box = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
gap:50px;
`
const Menu = styled.ul`
  display:flex;
  gap:8px;
  @media (max-width:1130px){
    // display:${(props)=>props.show === 'true' ? 'flex':'none'};
    flex-direction:column;
    background:#fff;
    width:300px;
    padding:50px 0;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
    height:100vh;
    position:absolute;
    top:0;
    right:0;
    transform:${(props)=>props.show === 'true' ? 'translateX(0)':'translateX(350px)'};
    transition:0.3s ease;
  }
`;
const NavigationLink = styled(NavLink)`
padding:8px 12px;
text-transform:capitalize;
font-size:15px;
${HeaderContainer}.active &{
  &{
    color:#333;
  }
  &.active{
    font-weight: 600;
    color:${yellow};
    &::before{
      position:absolute;
      content:"";
      width:100%;
      height:5px;
      background:${yellow};
      left:0;
      bottom:0;
    }
 }
}
color:#333;
 font-weight:500;
 transition:0.3s linear;
 position:relative;
 &.active{
  font-weight: 600;
  color: ${yellow};
  &::before{
    position:absolute;
  content:"";
  width:100%;
    height:5px;
    background:${yellow};
    left:0;
    bottom:0;
  }
 }
 &:hover{
  color:${yellow}
 }
 @media (max-width:1130px){
  padding:12px;
  border-bottom:1px solid #ccc;
  ${HeaderContainer}.active &{
    color:${yellow};
    &.active{
      color:${yellow};
      font-weight: 600;
     &::before{
    position:absolute;
    content:"";
    width:100%;
    height:5px;
    background:${yellow};
    left:0;
    bottom:0;
  }
    }
  }
 }
`
// const LinksList = styled.div``;

const MenuIconBar = styled(MenuIcon)`
  display:none !important;
  font-size:50px !important;
  padding:5px !important;
  cursor:pointer;
  border:2px solid ${yellow};
  color:${yellow};
  @media (max-width:1130px){
    display:block !important;
    ${HeaderContainer}.active &{
      color:#fff;
      border:2px solid #fff;
    }
  }
`
const CloseBtn = styled(CloseIcon)`
  position:absolute;
  top:15px;
  right:5px;
  font-size:35px !important;
  padding:5px !important;
  cursor:pointer;
  border:2px solid ${yellow};
  color:${yellow};
  @media (min-width:1130px){
    display:none !important;
  }
`;
const SearchBox = styled.div`
  position:relative;
  margin-left:60px;
  @media (max-width:1130px){
    width:250px;
    margin:16px auto;
  }
`
const Input = styled.input`
  width:280px;
  // background:#f1f1f1;
  padding:10px 0 10px 35px;
  font-size:16px;
  font-weight:300;
  color:${yellow};
  border:1px solid ${yellow};
  &::placeholder{
    font-weight:300;
    color:${yellow};
  }
  &:focus{
    border:1px solid ${yellow};
    outline:3px solid #ffb80347;
  }
  @media (max-width:1130px){
    width:100%;
  }

`

const SearchIconStyle = styled(SearchIcon)`
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  left:5px;
  color:${yellow};
`
const Header = () => {
  const pages = ["programs","events", "speakers", "contact","jobintech"];
  const navigateTo = useNavigate();
  const [colorChange, setColorchange] = useState();
  const [query , setQuery] = useState("");
  const [showNav , setShowNav] = useState(false);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 60) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
  },[]);

  const handleChange = (event)=>{
    setQuery(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      navigateTo(`/search/${query}`,{replace:true});
      setQuery("");
      setShowNav(false);
    }
  };

  return (
      <HeaderContainer className={`${(colorChange || window.location.pathname !== "/") && 'active'}`}>
        <Container>
          <LogoBox to="/">
            <LogoImage src={logo} width={170} alt="app_logo" />
          </LogoBox>
          <Box>
          <Menu show={showNav?.toString()}>
              <NavigationLink
                to="/"
                onClick={()=>{setShowNav(false)}}
              >
                home
              </NavigationLink>
            {pages.map((page, index) => (
                <NavigationLink
                onClick={()=>{setShowNav(false)}}
                  key={index}
                  to={`/${page}`}
                >
                  {page}
                </NavigationLink>
            ))}
            <CloseBtn onClick={()=>{setShowNav(false)}}/>
          <SearchBox>
           <Input onChange={handleChange} value={query} onKeyPress={handleKeyPress} type="text" placeholder="search event..."/>
           <SearchIconStyle/>
          </SearchBox>
          </Menu>
          </Box>
            <MenuIconBar onClick={()=>{setShowNav(true)}}/>
        </Container>
      </HeaderContainer>
  );
};

export default Header;