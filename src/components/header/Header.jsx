import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getTypes } from "../../api";
import { setFilters } from "../../redux/actions/catalogActions";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBag } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { BiExit } from "react-icons/bi";
import { setLogin } from "../../redux/actions/authActions";
import { setSearchQuery } from "../../redux/actions/catalogActions";
import HeaderMenuDropDown from "./HeaderMenuDropDown";
import BurgerMenu from "./BurgerMenu";
import styled from "styled-components";
import "./header.css";


const Header = () => {
  const navigate = useNavigate();
  const [types, setTypes] = useState([]);
  const [typeId, setTypeId] = useState(null);
  const filters = useSelector((state) => state.catalog.filters);

  const handleCloseBurgerMenu = () => setShowBurgerMenu(false);
  const handleShowBurgerMenu = () => setShowBurgerMenu(true);

  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSearch = () => setShowSearch(true);

  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.login);

  useEffect(() => {
    getTypes()
    .then(res => setTypes(res.data))
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    dispatch(setFilters({...filters, typeId: typeId}))
  }, [typeId])

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    dispatch(setSearchQuery(searchValue));
  };

  return (
    <HeaderStyled>
      <div className="header__content">
        <div className="header-col">
          {showBurgerMenu ? (
            <GrClose className="burger-icon" onClick={handleCloseBurgerMenu} />
          ) : (
            <GiHamburgerMenu
              className="burger-icon"
              onClick={handleShowBurgerMenu}
            />
          )}
        </div>
        <div className="header-col">
          <Link to="/">
            <img
              className="header__logo"
              src="/images/Dawn_logo_90x.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header-col">
          <div className="header__menu">
            <HeaderMenuDropDown
              name={"Bags"}
              types={types?.filter(type => Number(type?.typeId)<6)}
              setTypeId={setTypeId}
            />
            <HeaderMenuDropDown
              name={"Shoes"}
              types={types?.filter(type => Number(type?.typeId)>=6)}
              setTypeId={setTypeId}
            />
            <div className="header__menu-item">
              <span>
                <Link to="/lookbook">Lookbook</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="header-col">
          <div className="header__icons">
            <IoSearchOutline onClick={handleShowSearch} />
            <BsBag onClick={() => navigate("/cart")} />
            {!login ? (
              <AiOutlineUser onClick={() => navigate("/login")} />
            ) : (
              <BiExit
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  dispatch(setLogin(false));
                }}
              />
            )}
          </div>
        </div>
        <Offcanvas
          height={64}
          show={showSearch}
          onHide={handleCloseSearch}
          placement="top"
          className={"searchDrawer"}
        >
          <div className="header__search-wrapper">
            <div className="header__search">
              <input
                type="text"
                placeholder="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <IoSearchOutline className="header__search-icon" onClick={handleSearch}/>
            </div>
            <AiOutlineClose
              className="search__close-icon"
              onClick={handleCloseSearch}
            />
          </div>
        </Offcanvas>
      </div>

      <BurgerMenu
        showBurgerMenu={showBurgerMenu}
        setShowBurgerMenu={() => setShowBurgerMenu(false)}
        setTypeId={setTypeId}
        categories={{ 
          bags: types?.filter(type => Number(type?.typeId)<6),
          shoes: types?.filter(type => Number(type?.typeId)>=6)
        }}
      />
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  & {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.1rem solid rgba(18, 18, 18, 0.08);
  }

  .burger__menu-item__title {
  }

  .header__search {
    background-color: blue;
  }

  .burger-modal {
    background-color: red;
    width: 100vw;
  }
  .offcanvas-top {
    height: 64px !important;
    background: red;
  }
  .header__content {
    display: flex;
    flex: 1;
    max-width: 1200px;
    box-sizing: border-box;
    padding: 20px 50px;
    gap: 32px;
  }

  .header__logo {
    cursor: pointer;
    /* padding:7.5px; */
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
  .header__menu-item span {
    border-bottom: 1px solid #12121200;
  }
  .header__menu-item span:hover {
    border-bottom: 1px solid #121212;
  }
  .header__menu-item span a {
    text-decoration: none;
    color: #121212bf;
  }
  .header-col:nth-child(4) {
    height: 44px;
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
  }

  .header__icons svg {
    color: #121212;
  }
  .header__icons svg:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
  .burgerDrawer {
    display: none;
  }
  @media (max-width: 990px) {
    .header__content {
      padding: 20px 50px;
    }

    .header-col:nth-child(3) {
      display: none;
    }
    .header-col:nth-child(1) {
      display: block;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .burgerDrawer {
      display: flex;
    }

    .header-col:nth-child(1) {
      flex: 1;
    }
  }

  @media (max-width: 750px) {
    .header__icons svg:nth-child(3) {
      display: none;
    }
    .header__content {
      padding: 10px 15px;
    }
  }
`;
