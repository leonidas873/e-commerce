import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


// styled components

const FilterStyled = styled.div`
  background-color:white;
  position:fixed;
  top:70.69px;
  height:calc(100vh - 159.19px);
  width:100%;
  

`

const TitleStyled = styled.div`
box-sizing:border-box;
padding:13px 26px;
display:flex;
justify-content:flex-start;
align-items:center;
color:#121212;
gap:10px;
text-transform:capitalize;

& > svg {
  transform:rotate(180deg);
  cursor:pointer;
}
`

//  availability content

const AvailabilityBodyStyled = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
`

const AvailabilityOption = styled.div`
  box-sizing:border-box;
        padding:15px 20px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        gap:10px;
`

//  price content

const PriceBodyStyled = styled.div`
& > h5 {
  margin: 15px 0;
  padding:0 26px;
  text-align:start;
  font-size:15px;
  color:#121212BF;
}

& > .inputs {
  display:flex;
  padding:20px;
  gap:20px;
}
`
const PriceInput = styled.div`
display:flex;
align-items:center;
gap:8px;
font-size:15px;
flex:1;

  color:#121212BF;
  & > input {
    padding:15px;
  font-size:15px;
  color:#121212BF;
  flex:1;
  max-width:130px;
  }
`

//  color

const ColorBodyStyled = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  overflow-y:auto;
  max-height:90%;
  
`

const ColorOption = styled.div`
  box-sizing:border-box;
        padding:15px 20px 15px 25px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        gap:10px;
`



const AvailabilityContent = () => {

return <AvailabilityBodyStyled>
<AvailabilityOption><input type="checkbox" /> In Stock</AvailabilityOption>
    <AvailabilityOption><input type="checkbox" /> Out of stock</AvailabilityOption>
</AvailabilityBodyStyled>
}


const PriceContent = () => {

  return <PriceBodyStyled>
    <h5>The highest price is $615.00</h5>
    <div className="inputs">
    <PriceInput>$ <input type="number" placeholder="From"/></PriceInput>
      <PriceInput>$ <input type="number" placeholder="To"/></PriceInput>
      </div>
  </PriceBodyStyled>
  }



  const ColorContent = () => {
const colors = ["black", "red", "white", "blue",1,2,3,4,5,1,2,3,41,2,31,23,123,12,31,23,1,3];
    return <ColorBodyStyled>
    {colors.map(color =><ColorOption><input type="checkbox" /> {color}</ColorOption>)}
    </ColorBodyStyled>
    }  



const filterContents = {
  availability: <AvailabilityContent/>,
  price: <PriceContent/>,
  color: <ColorContent/>
}

const FilterBurgerSubDrawer = ({ show, setShow, name }) => {




    const burgerItemVariants = {
        initial: { x: "100vh" },
        animate: { x: 0, transition: { duration: 0.3, type: "tween" } },
        exit: { x: "100vh", transition: { duration: 0.3, type: "tween" } },
      };


  return (<AnimatePresence>
      {(show) && (
        <motion.div
            variants={burgerItemVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
             <FilterStyled>
            
            <TitleStyled>
            <BsArrowRight onClick={setShow}/>
            {name}
            </TitleStyled>
            {filterContents[name]}
          </FilterStyled>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterBurgerSubDrawer;





