import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import {AiOutlineClose} from 'react-icons/ai';
import {BsArrowRight} from 'react-icons/bs';
import styled from 'styled-components';
import FilterBurgerSubDrawer from './FilterBurgerSubDrawer';

const FiltersBurger = ({ showFiltersBurger, setShowFiltersBurger }) => {
    
const [activeFilter, setActiveFilter] = useState('');

    return (<>
    <Offcanvas show={showFiltersBurger}  placement="end" onHide={setShowFiltersBurger}>
      {/* <FilterBurgerSubDrawer name="na" activeBurgerItem="na"><div>chidrearhi</div></FilterBurgerSubDrawer> */}
        <Header>
            <h3>Filter and sort</h3>
            <p>26 products</p>
            <AiOutlineClose className="close-filtersBurger" onClick={setShowFiltersBurger}/>
        </Header>
        <Body>
          <div className="filterBurger__filter">Availability <BsArrowRight onClick={()=>setActiveFilter('availability')}/></div>
          <div className="filterBurger__filter">Price <BsArrowRight onClick={()=>setActiveFilter("price")}/></div>
          <div className="filterBurger__filter">Color <BsArrowRight onClick={()=>setActiveFilter("color")}/></div>
          <div className="filterBurger__filter">sort by:</div>
        </Body>
        <Footer>
          <div className="btn"><button>Clear all</button></div>
          <div className="btn"><button>Apply</button></div>
        </Footer>
    </Offcanvas>
  </>)
}

export default FiltersBurger;

const Header = styled.div`
  
  position:relative;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  box-sizing:border-box;
  padding:15px 25px;
  border-bottom:2px solid #74707024;


  .close-filtersBurger{
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 17px;
    right: 14px;
    width: 30px;
    height: 30px;
    z-index: 101;
    cursor:pointer;
  }

  h3{
    margin:0;
    font-size:16px;
  }

  p{
    margin:0;
    font-size:13px;
    color:#121212b3;
  }
`

const Body = styled.div`


height:100%;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;

.filterBurger__filter{
  padding:13px 25px;
  display:flex;
  width:100%;
  justify-content:space-between;
  align-items:center;
  font-size:15px;
  color:#121212;
}
.filterBurger__filter > svg {
  cursor:pointer;
}
`

const Footer = styled.div` 


display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
gap:20px;

& > .btn:nth-child(1){
flex:1;

}
& > .btn:nth-child(1) button{
background:none;
border:none;
outline:none;
color:#121212;
border-bottom:2px solid #121212;
font-size:15px;
}
& > .btn:nth-child(2){
flex:1;
background-color:green;
padding:0;
}
& > .btn:nth-child(2) button{
  border:2px solid #121212;
  background-color:#121212;
  width:100%;
  height:100%;
  color:white;
  padding:10px;
  font-size:15px;
  outline:none;
}


/* & > .btn:nth-child(2) button:hover{
  border: 2px solid black;

} */

`