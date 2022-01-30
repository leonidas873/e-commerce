import styled from "styled-components";
import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBag } from "react-icons/bs";
import HeaderMenuDropDown from "./HeaderMenuDropDown";

const styles={
  searchDrawer:{
    background:"red",
    height:"64px"
  },
  burgerDrawer:{
    width:"clamp(230px, 400px, calc(100vw - 40px))",  
  }
}

const Header = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleCloseBurgerMenu = () => setShowBurgerMenu(false);
  const handleShowBurgerMenu = () => setShowBurgerMenu(true);

  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);
  const bags = {
    name: "Bags",
    subCategories: [
      "Shop all",
      "Tote Bags",
      "Shoulder Bags",
      "Crossbody bags",
      "Top handle bags",
      "Mini bags",
    ],
  };
  const shoes = {
    name: "Shoes",
    subCategories: ["Shop all", "Sandals", "Boots"],
  };

  return (
    <HeaderStyled>
      <div className="header__content">
        <div className="header-col">
          <GiHamburgerMenu className="burger-icon" onClick={handleShowBurgerMenu}/>
        </div>
        <div className="header-col">
          <img
            className="header__logo"
            src="/images/Dawn_logo_90x.png"
            alt="logo"
          />
        </div>
        <div className="header-col">
          <div className="header__menu">
            <HeaderMenuDropDown name={bags.name} items={bags.subCategories} />
            <HeaderMenuDropDown name={shoes.name} items={shoes.subCategories} />
            <div className="header__menu-item">Lookbook</div>
          </div>
        </div>
        <div className="header-col">
          <div className="header__icons">
            <IoSearchOutline onClick={handleShowSearch}/>
            <AiOutlineUser />
            <BsBag />
          </div>
        </div>
        <Offcanvas height={64} show={showSearch} onHide={handleCloseSearch} placement="top" style={styles.searchDrawer}>
        <div className="search-modal__body">
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </div>
      </Offcanvas>
      </div>



      <>
      <Offcanvas show={showBurgerMenu} onHide={handleCloseBurgerMenu} style={styles.burgerDrawer}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  &{background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;}

.burger-modal{
  background-color:red;
  width:100vw;
}
  .offcanvas-top{
    height:64px !important;
    background:red;
  }
  .header__content {
    display: flex;
    flex: 1;
    max-width: 1200px;
    box-sizing: border-box;
    padding: 10px 50px;
    gap: 32px;
  }

  .header__logo {
    cursor: pointer;
    padding:7.5px;
  }
  .header-col:nth-child(1) {
    display: none;
  }

  .burger-icon {
    font-size: 20px;
    color: #121212;
    cursor: pointer;
  }
  .header-col:nth-child(2) {
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header-col:nth-child(3) {
    
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .header__menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .header__menu-item {
    display: flex;
    align-items: center;
    gap: 5px;
    color: rgb(18, 18, 18, 0.75);
    cursor: pointer;
    font-size: 14px;
    padding: 12px;
  }
  .header-col:nth-child(4) {
    height:44px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .header__icons {
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 25px;
    color: #121212;
  }
  .header__icons svg {
    cursor: pointer;
  }
  @media (max-width: 990px) {
    .header__content {
      padding: 10px 15px;
    }

    .header-col:nth-child(3) {
      display: none;
    }
    .header-col:nth-child(1) {
      display: block;
      display:flex;
      justify-content:flex-start;
      align-items:center;
    }
    .header-col:nth-child(1) {
      flex: 1;
    }
  }

  @media (max-width: 750px) {
    .header__icons svg:nth-child(2) {
      display: none;
    }
  }
`;
