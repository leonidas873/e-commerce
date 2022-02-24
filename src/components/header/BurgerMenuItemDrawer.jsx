import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const BurgerMenuItemDrawer = ({ name, subCategories,activeBurgerItem,hideBurgerItemDrawer}) => {



    const burgerItemVariants = {
        initial: { x: "100vh" },
        animate: { x: 0, transition: { duration: 0.3, type: "tween" } },
        exit: { x: "100vh", transition: { duration: 0.3, type: "tween" } },
      };


  return (<AnimatePresence>
      {(activeBurgerItem===name) && (
        <motion.div
            variants={burgerItemVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <BurgerMenuItemDrawerStyled>
            <div className="burgerMenuItemDrawer__title" onClick={hideBurgerItemDrawer}>
              <BsArrowRight classNAme="arrow-left"/> {name}
            </div>
            {subCategories.map((category) => (
              <div className="burgerMenuItemDrawer__item" key={category}>
                {category.value}
              </div>
            ))}
          </BurgerMenuItemDrawerStyled>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BurgerMenuItemDrawer;

const BurgerMenuItemDrawerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: -56px;
  left: 0;
  width: clamp(230px, 400px, calc(100vw - 40px));
  height: calc(100vh - 84px);
background-color:white;
  .burgerMenuItemDrawer__title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
    padding: 12px 26px;
    font-size: 14px;
    color: #12121276;
    background-color:#F6F6F6;
    cursor:pointer;
  }

  .burgerMenuItemDrawer__title svg {
    transform: rotate(180deg);
    cursor:pointer;
  }

  .burgerMenuItemDrawer__item {
    text-align: left;
    font-size: 18px;
    color: #12121276;
    padding: 11px 32px;
    cursor:pointer;
    
  }

  .burgerMenuItemDrawer__item:hover{
  background-color:#F6F6F6;
}
  @media (max-width: 750px) {
    &{
      height: calc(100vh - 64px);
    }
  }
  .arrow-left{
    transform:rotate(180deg)
  }
`;
