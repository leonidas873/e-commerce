import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import BurgerMenuItemDrawer from "./BurgerMenuItemDrawer";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import {AiOutlineTwitter, AiFillFacebook, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import {SiTiktok} from 'react-icons/si';
import { Offcanvas } from "react-bootstrap";


const BurgerMenu = ({
  showBurgerMenu,
  categories,
  setShowBurgerMenu,
  setTypeId
}) => {
  const [activeBurgerItem, setActiveBurgerItem] = useState("");

  return (<>
    <Offcanvas show={showBurgerMenu} onHide={setShowBurgerMenu} className="burgerDrawer" backdropClassName="burgerDrawer__bg">
    <div className="burger__menu-items">
            <BurgerMenuItemDrawer
              name='shoes'
              subCategories={categories.shoes}
              activeBurgerItem={activeBurgerItem}
              hideBurgerItemDrawer={() => setActiveBurgerItem("")}
              setTypeId={setTypeId}
              setShowBurgerMenu={setShowBurgerMenu}
            />
            <BurgerMenuItemDrawer
              name='bags'
              subCategories={categories.bags}
              activeBurgerItem={activeBurgerItem}
              hideBurgerItemDrawer={() => setActiveBurgerItem("")}
              setTypeId={setTypeId}
              setShowBurgerMenu={setShowBurgerMenu}
            />
            <div className="burger__menu-item">
              <div
                className="burger__menu-item__title"
                onClick={() => {
                  setTypeId('bags')
                  setActiveBurgerItem('bags')
                }}
              >
                Bags
                <BsArrowRight />
              </div>
            </div>

            <div className="burger__menu-item">
              <div
                className="burger__menu-item__title"
                onClick={() => {
                  setTypeId('shoes')
                  setActiveBurgerItem('shoes')
                }}
              >
                Shoes
                <BsArrowRight />
              </div>
            </div>
            <Link to="/lookbook" className="burger__menu-item__title">
              <div onClick={() => setShowBurgerMenu(false)}>
                Lookbook
              </div>
            </Link>
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
