import "./header.css";
import BurgerMenuItemDrawer from "./BurgerMenuItemDrawer";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {AiOutlineTwitter, AiFillFacebook, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {SiTiktok} from 'react-icons/si';
import { Offcanvas } from "react-bootstrap";


const BurgerMenu = ({ showBurgerMenu, categories, setShowBurgerMenu }) => {
  
  const [activeBurgerItem, setActiveBurgerItem] = useState("");


  return (<>
    <Offcanvas show={showBurgerMenu} onHide={setShowBurgerMenu} className="burgerDrawer" backdropClassName="burgerDrawer__bg">
    <div className="burger__menu-items">
            <BurgerMenuItemDrawer
              name={categories.shoes.name}
              subCategories={categories.shoes.subCategories}
              activeBurgerItem={activeBurgerItem}
              hideBurgerItemDrawer={() => setActiveBurgerItem("")}
            />
            <BurgerMenuItemDrawer
              name={categories.bags.name}
              subCategories={categories.bags.subCategories}
              activeBurgerItem={activeBurgerItem}
              hideBurgerItemDrawer={() => setActiveBurgerItem("")}
            />
            <div className="burger__menu-item">
              <div
                className="burger__menu-item__title"
                onClick={() => setActiveBurgerItem(categories.bags.name)}
              >
                {categories.bags.name}
                <BsArrowRight />
              </div>
            </div>

            <div className="burger__menu-item">
              <div
                className="burger__menu-item__title"
                onClick={() => setActiveBurgerItem(categories.shoes.name)}
              >
                {categories.shoes.name}
                <BsArrowRight />
              </div>
            </div>

            <div className="burger__menu-item__title">Lookbook</div>
          </div>
          <div className="burgerMenu__footer">
            <div className="burgerMenu__login">
<AiOutlineUser/>
<div>Log in</div>
            </div>
            <div className="burgerMenu__logos">
              <AiOutlineTwitter/>
              <AiFillFacebook/>
              <AiFillInstagram/>
              <AiFillYoutube/>
              <SiTiktok/>
            </div>
          </div>
          </Offcanvas>
          </>

  );
};

export default BurgerMenu;
