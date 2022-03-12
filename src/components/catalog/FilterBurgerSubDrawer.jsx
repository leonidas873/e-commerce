import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { setFilters } from "../../redux/actions/catalogActions";

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
  const filters = useSelector(state=>state.catalog.filters);
  const [inStock, setInStock] = useState(filters.stock=="in");
  const [notInStock, setNotInStock] = useState(filters.stock=="out");

  const dispatch = useDispatch();

  useEffect(() => {

        if ((inStock && notInStock) || (!inStock && !notInStock)) {
          dispatch(setFilters({...filters, stock:""}));
          
        } else if (inStock){
          dispatch(setFilters({...filters, stock:"in"}));
        } else if (notInStock){
          dispatch(setFilters({...filters, stock:"out"}));
        } 


  }, [inStock, notInStock]);


return <AvailabilityBodyStyled>
<AvailabilityOption><input type="checkbox" onChange={e=>setInStock(e.target.checked)} defaultChecked={filters.stock=="in"} /> In Stock</AvailabilityOption>
    <AvailabilityOption><input type="checkbox" onChange={e=>setNotInStock(e.target.checked)} defaultChecked={filters.stock=="out"}/> Out of stock</AvailabilityOption>
</AvailabilityBodyStyled>
}


const PriceContent = () => {

  const filters = useSelector(state=>state.catalog.filters);
  const dispatch = useDispatch();

  return <PriceBodyStyled>
    <h5>The highest price is $15000.00</h5>
    <div className="inputs">
    <PriceInput>$ <input type="number" placeholder="From" value={filters.priceFrom} onChange={e=>dispatch(setFilters({...filters, priceFrom:e.target.value}))}/></PriceInput>
      <PriceInput>$ <input type="number" placeholder="To" value={filters.priceTo} onChange={e=>dispatch(setFilters({...filters, priceTo:e.target.value}))}/></PriceInput>
      </div>
  </PriceBodyStyled>
  }



  const ColorContent = () => {

    const dispatch = useDispatch();
    const filters = useSelector(state=>state.catalog.filters);
    const colors = useSelector(state=>state.catalog.colors);


    return <ColorBodyStyled>
    {colors.map((color, index )=><ColorOption key={index}><input
                  type="checkbox"
                  name="color"
                  value={color}
                  checked={filters.colors?.includes(color)}
                  onChange={(e) => {
                    if(e.target.checked) {
                      dispatch(setFilters({ ...filters, colors: [...filters.colors, color] }))
                    } else {
                      let colorsArray = filters.colors
                      let index = colorsArray.indexOf(color)
                      if(index > -1) {
                        colorsArray.splice(index, 1)
                      }
                      dispatch(setFilters({ ...filters, colors: [...colorsArray] }))
                    }
                  }}
                /> {color}</ColorOption>)}
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





