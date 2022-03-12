import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
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
  const [selectedNum, setSelectedNum] = useState(0);

  useEffect(() => {
    setSelectedNum(filters?.colors?.length)
  }, [filters])

  const handleReset = () => {
    dispatch(setFilters({ ...filters, colors: [] }))
    colors?.forEach((color, index) => {
      if(document.getElementById(`color-checkbox-${index}`)) {
        document.getElementById(`color-checkbox-${index}`).checked = false
      }
    })
  }

  return (
    <ColorFilterStyled>
      <div className="filter__title" onClick={() => setShow(!show)}>
        <span className={show && "filter__title--selected"}>color</span>
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
            {colors.map((color, ind) => (
              <div className="filter__item" key={ind}>
                <input
                  id={`color-checkbox-${ind}`}
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
                />
                <label htmlFor={`color-checkbox-${ind}`}>{color}</label>
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
