import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import FilterBurgerSubDrawer from "./FilterBurgerSubDrawer";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/actions/catalogActions";


const FiltersBurger = ({ showFiltersBurger, setShowFiltersBurger }) => {
  const [activeFilter, setActiveFilter] = useState("");
  const [show, setShow] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const dispatch = useDispatch();
  const filters = useSelector(state=>state.catalog.filters);
  const products = useSelector(state=>state.catalog.catalog);

  const handleSortChange = (e) => {
    setSelectValue(e.target.value);
    dispatch(setFilters({...filters, sort:e.target.value}))
  };

  const handleReset = () => {
    dispatch(setFilters({
      priceFrom: '',
      priceTo: '',
      stock: '',
      colors: [],
      typeId: null,
      sort:''
    }))
    setShowFiltersBurger(false)
  }

  return (
    <>
      <Offcanvas
        show={showFiltersBurger}
        placement="end"
        onHide={setShowFiltersBurger}
        
      >
        <FilterBurgerSubDrawer
          show={show}
          setShow={() => setShow(false)}
          name={activeFilter}
        />
        <Header>
          <h3>Filter and sort</h3>
          <p>{ products ? products?.length : 0 } products</p>
          <AiOutlineClose
            className="close-filtersBurger"
            onClick={setShowFiltersBurger}
          />
        </Header>
        <Body>
          <div className="filterBurger__filter">
            Availability{" "}
            <BsArrowRight
              onClick={() => {
                setActiveFilter("availability");
                setShow(true);
              }}
            />
          </div>
          <div className="filterBurger__filter">
            Price{" "}
            <BsArrowRight
              onClick={() => {
                setActiveFilter("price");
                setShow(true);
              }}
            />
          </div>
          <div className="filterBurger__filter">
            Color{" "}
            <BsArrowRight
              onClick={() => {
                setActiveFilter("color");
                setShow(true);
              }}
            />
          </div>
          <div className="filterBurger__filter">
            sort by:{" "}
            <div className="sort__wrapper">
            <select defaultValue={filters.sort} onChange={handleSortChange}>
              <option value="">Featured</option>
              <option value="alph-AZ">Alphabetically A-Z</option>
              <option value="alph-ZA">Alphabetically Z-A</option>
              <option value="price-ASC">Price low to high</option>
              <option value="price-DESC">Price high to low</option>
            </select>
            </div>
          </div>
        </Body>
        <Footer>
          <div className="btn">
            <button onClick={handleReset}>Clear all</button>
          </div>
          <div className="btn">
            <button onClick={() => setShowFiltersBurger(false)}>Apply</button>
          </div>
        </Footer>
      </Offcanvas>
    </>
  );
};

export default FiltersBurger;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 25px;
  border-bottom: 2px solid #74707024;

  .close-filtersBurger {
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 17px;
    right: 14px;
    width: 30px;
    height: 30px;
    z-index: 101;
    cursor: pointer;
  }

  h3 {
    margin: 0;
    font-size: 16px;
  }

  p {
    margin: 0;
    font-size: 13px;
    color: #121212b3;
  }
`;

const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding:10px 0;

  .filterBurger__filter {
    padding: 13px 25px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    color: #121212;
  }
  .filterBurger__filter > svg {
    cursor: pointer;
  }
  .sort__wrapper{
    padding: 10px;
    border: 2px solid #12121200;
  }

  .sort__wrapper:focus-within {
    padding: 10px;
    border: 2px solid black;
  }
  .sort__wrapper select {
    outline: none;
    border: none;
    background: transparent;
    color: #121212bf;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 20px;

  & > .btn:nth-child(1) {
    flex: 1;
  }
  & > .btn:nth-child(1) button {
    background: none;
    border: none;
    outline: none;
    color: #121212;
    border-bottom: 2px solid #121212;
    font-size: 15px;
  }
  & > .btn:nth-child(2) {
    flex: 1;
    background-color: green;
    padding: 0;
  }
  & > .btn:nth-child(2) button {
    border: 2px solid #121212;
    background-color: #121212;
    width: 100%;
    height: 100%;
    color: white;
    padding: 10px;
    font-size: 15px;
    outline: none;
  }

  /* & > .btn:nth-child(2) button:hover{
  border: 2px solid black;

} */
`;
