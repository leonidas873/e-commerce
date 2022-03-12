import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useOnClickOutside } from "../../hooks/uiHooks";
import { setCatalog, setFilters } from "../../redux/actions/catalogActions";
import { useDispatch, useSelector } from "react-redux";


const AvailabilityFilter = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [selectedNum, setSelectedNum] = useState(0);

  useOnClickOutside(ref, () => setShow(false));
  const [show, setShow] = useState(false);
  const filters = useSelector(state=>state.catalog.filters);

  const [inStock, setInStock] = useState(filters.stock=="in");
  const [notInStock, setNotInStock] = useState(filters.stock=="out");



  useEffect(() => {
        if ((inStock && notInStock) || (!inStock && !notInStock)) {
          dispatch(setFilters({...filters, stock:""}));

        } else if (inStock){
          dispatch(setFilters({...filters, stock:"in"}));
        } else if (notInStock){
          dispatch(setFilters({...filters, stock:"out"}));
        } 

        if(inStock && notInStock) {
          setSelectedNum(2)
        } else if(!inStock && !notInStock) {
          setSelectedNum(0)
        } else {
          setSelectedNum(1)
        }
  }, [inStock, notInStock]);

  const handleReset = () => {
    setInStock(false)
    setNotInStock(false)
    if(document.getElementById('inStock')) {
      document.getElementById('inStock').checked = false
    }
    if(document.getElementById('outOfStock')) {
      document.getElementById('outOfStock').checked = false
    }
  }

  return (
    <AvailabilityFilterStyled>
      <div className="filter__title" onClick={() => setShow(!show)}>
        <span className={show && "filter__title--selected"}>Availability</span>
        <IoIosArrowDown />
      </div>

      {show && (
        <div className="filter__items" ref={ref}>
          <div className="filter__items-header">
            <div className="filter__items-selected">{selectedNum} selected</div>
            <div className="filter__items-reset" onClick={handleReset}>
              <span>Reset</span>
            </div>
          </div>
          <div className="filter__items-body">
            <div className="filter__item">
              <input
                id="inStock"
                type="checkbox"
                onChange={e=>setInStock(e.target.checked)}
                defaultChecked={filters.stock=="in"}
              /> 
              <label htmlFor="inStock">In Stock</label>
            </div>
            <div className="filter__item">
              <input
                id="outOfStock"
                type="checkbox"
                onChange={e=>setNotInStock(e.target.checked)}
                defaultChecked={filters.stock=="out"}
              />
              <label htmlFor="outOfStock">Out of stock</label>
            </div>
          </div>
        </div>
      )}
    </AvailabilityFilterStyled>
  );
};

export default AvailabilityFilter;

const AvailabilityFilterStyled = styled.div`
  cursor: pointer;
  position: Relative;

  .filter__items-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 15px 20px;
    gap: 100px;
    border-bottom: 2px solid #12121275;
  }

  .filter__items-body {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 5px 20px;
  }

  .filter__item {
    box-sizing: border-box;
    padding: 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
`;
