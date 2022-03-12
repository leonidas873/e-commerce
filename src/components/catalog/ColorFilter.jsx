import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/uiHooks";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../redux/actions/catalogActions";

const ColorFilter = () => {
  const ref = useRef();
  useOnClickOutside(ref, () => setShow(false));
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.catalog.filters);
  const colors = useSelector((state) => state.catalog.colors);

  return (
    <ColorFilterStyled>
      <div className="filter__title" onClick={() => setShow(!show)}>
        <span className={show && "filter__title--selected"}>color</span>
        <IoIosArrowDown />
      </div>

      {show && (
        <div className="filter__items" ref={ref}>
          <div className="filter__items-header">
            <div className="filter__items-selected">0 selected</div>
            <div className="filter__items-reset">
              <span>Reset</span>
            </div>
          </div>
          <div className="filter__items-body">
            {colors.map((color, ind) => (
              <div className="filter__item" key={ind}>
                <input
                  type="radio"
                  name="color"
                  value={color}
                  checked={filters.color==color}
                  onChange={(e) => dispatch(setFilters({ ...filters, color }))}
                />
                {color}
              </div>
            ))}
          </div>
        </div>
      )}
    </ColorFilterStyled>
  );
};

export default ColorFilter;

const ColorFilterStyled = styled.div`
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
