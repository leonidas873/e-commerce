import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const FilterBurgerSubDrawer = ({ name, activeBurgerItem,hideBurgerItemDrawer,children}) => {



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
             <FilterStyled>
            {name}
            <button onCLick={hideBurgerItemDrawer}></button>
            {children}
          </FilterStyled>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterBurgerSubDrawer;


const FilterStyled = styled.div`
  background-color:red;
  position:fixed;
  top:70.69px;
  height:calc(100vh - 159.19px);
  width:100%;

`
