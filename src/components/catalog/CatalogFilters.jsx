import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BsSliders } from "react-icons/bs";
import AvailabilityFilter from "./AvailabilityFilter";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import FiltersBurger from "./FiltersBurger";
import { setFilters } from "../../redux/actions/catalogActions";
import {IoIosClose} from "react-icons/io";

const CatalogFilters = () => {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.catalog.catalog)
  const [showFiltersBurger, setShowFiltersBurger] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const filters = useSelector(state=>state.catalog.filters);

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
  }

  const handleRemoveFilter = filter => {

    if(filter !=  'typeId' && filter != 'sort') {
      dispatch(setFilters({...filters, [filter]: filter == 'colors' ? [] : ''}))
    }
  }

  return (
    <CatalogFilterStyled>
      <FiltersBurger
        showFiltersBurger={showFiltersBurger}
        setShowFiltersBurger={() => setShowFiltersBurger(false)}
      />
      <div className="catalogFilters-content">
        <div
          className="catalogFilter-modal-opener"
          onClick={() => setShowFiltersBurger(true)}
        >
          <BsSliders />
          Filter and Sort
        </div>
        <div className="catalogFilters-left">
          <div className="catalogFilters-left__title">Filter:</div>
          <AvailabilityFilter />
          <PriceFilter />
          <ColorFilter />
        </div>
        <div className="catalogFilters-right">
          <div className="catalogFilters-right__title">Sort by:</div>
          <div className="catalogFilters-right__select">
            <select defaultValue={filters.sort} onChange={handleSortChange}>
              <option value="">Featured</option>
              <option value="alph-AZ">Alphabetically A-Z</option>
              <option value="alph-ZA">Alphabetically Z-A</option>
              <option value="price-ASC">Price low to high</option>
              <option value="price-DESC">Price high to low</option>
            </select>
          </div>
          <div className="products__quantity">{products?.length} products</div>
        </div>
      </div>
      <FiltersTypesStyled>
        {
          Object.keys(filters)?.map(key => {
            let filter = filters[key]
            if(filter != null && filter != '' && filter != [] && key != 'typeId' && key != 'sort') {
              return <SingleFilterStyled key={key}>
                {key} <IoIosClose onClick={() => handleRemoveFilter(key)}/>
              </SingleFilterStyled>
            }
          })
        }
        {(Object.keys(filters)?.filter(key=>
            key != 'sort' && filters[key]?.length > 0
        ).length !==0) && <button style={{padding: 0, fontSize: 12}} onClick={handleReset}>Clear all</button>}
      </FiltersTypesStyled>
    </CatalogFilterStyled>
  );
};

export default CatalogFilters;

const FiltersTypesStyled = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  max-width: 1200px;
  padding: 0 50px;
  gap:10px;

  & >  button{
    border:none;
    background:transparent;
    outline:none;
    font-size: 9px;
    border-bottom:1px solid #121212bf; 
  }
`

const SingleFilterStyled = styled.div`
  background: white;
    color: #121212bf;
    border: 1px solid gray;
    padding: 5px 10px;
    border-radius: 17px;
    font-size: 12px;
    position:relative;
    cursor:pointer;
    dispaly: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    &>svg {
      font-size: 16px;
    }
  }

`

const CatalogFilterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: rgb(18, 18, 18, 0.75);
  flex-direction:column;

  .catalogFilters-content {
    display: flex;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    padding: 0 50px;
  }

  .catalogFilters-left {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
  }

  .catalog__filter {
    position: relative;
  }

  .filter__items {
    position: absolute;
    background-color: white;
    top: 30px;
    left: -10px;
    border: 1px solid #121212bc;
    animation: dropdownAnimate 0.3s;
    z-index: 123;
  }
  .filter__items-selected {
    white-space: nowrap;
  }

  .filter__items-reset span {
    border-bottom: 1px solid #121212bc;
  }
  .filter__items-reset span:hover {
    color: black;
    border-bottom: 2px solid #121212bc;
  }
  @keyframes dropdownAnimate {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .filter__title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }

  .filter__title span {
    border: 1px solid;
    border-color: #12121200;
  }
  .filter__title span:hover {
    border-bottom: 1px solid #121212;
    cursor: pointer;
  }
  .catalogFilters-right {
    flex: 1;
    display: flex;
    gap: 15px;
    justify-content: flex-end;
    align-items: center;
  }
  .catalogFilters-right__select {
    padding: 10px;

    border: 2px solid #12121200;
  }

  .catalogFilters-right__select:focus-within {
    padding: 10px;
    border: 2px solid black;
  }
  .catalogFilters-right__select select {
    outline: none;
    border: none;
    background: transparent;
    color: #121212bf;
  }

  .filter__title--selected {
    border-bottom: 1px solid #121212 !important;
    cursor: pointer;
  }

  .catalogFilter-modal-opener {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    .catalogFilters-content {
      padding: 10px 15px 10px 15px;
    }

    .catalogFilter-modal-opener {
      display: block;
    }

    .catalogFilter-modal-opener > svg {
      margin-right: 10px;
    }

    .catalogFilters-left {
      display: none;
    }
    .catalogFilters-right__title {
      display: none;
    }

    .catalogFilters-right__select {
      display: none;
    }
  }
`;
