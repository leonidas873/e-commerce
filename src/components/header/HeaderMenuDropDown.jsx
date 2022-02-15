import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setActiveCategory } from "../../redux/actions/catalogActions";

const HeaderMenuDropDown = ({ name, items }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();

  return (
    <HeaderMenuDropDownStyled>
      <div
        className={
          "header-dropdown__title" +
          (showDropdown ? " header-dropdown__title--underline" : " ")
        }
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <span>{name}</span>
        <IoIosArrowDown className={showDropdown ? "arrow-up" : "arrow-down"} />
      </div>
      {showDropdown && (
        <div
          className="dropdown-background"
          onClick={() => {
            setShowDropdown(false);
          }}
        >
          {" "}
        </div>
      )}
      {showDropdown && (
        <div className="header-dropdown__items">
          {items.map((item) => (
            <Link to={`/catalog/${item.route}`}><div className="header-dropdown__item" onClick={() => dispatch((setActiveCategory(name)))}>{item.value}</div></Link>
          ))}
        </div>
      )}
    </HeaderMenuDropDownStyled>
  );
};

export default HeaderMenuDropDown;

const HeaderMenuDropDownStyled = styled.div`
  padding: 12px;
  font-size: 14px;
  position: relative;
  .header-dropdown__title span{
    border-bottom: 1px solid #12121200;
    cursor:pointer;
}

  .header-dropdown__title span:hover{
    border-bottom: 1px solid #121212;
    cursor:pointer;
}

.header-dropdown__items a{
text-decoration:none !important;
}
  .dropdown-background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    cursor: pointer;
  }

  .header-dropdown__title {
    display: flex;
    align-items: center;
    gap: 5px;
    color: rgb(18, 18, 18, 0.75);
    cursor: pointer;
    z-index: 0;
  }



  .header-dropdown__title--underline span{
    border-bottom: 1px solid #121212;
   
  }

  .arrow-up {
    transform: rotate(180deg);
  }

  .header-dropdown__items {
    position: absolute;
    width: 200px;
    box-sizing: border-box;
    padding: 10px 0px;
    left: 0;
    top: 45px;
    border: 1px solid rgb(18, 18, 18, 0.1);
    z-index: 1;
    background-color: white;
    animation: dropdownAnimate 0.3s;
    text-decoration:none;
  }

  .header-dropdown__item {
    box-sizing: border-box;
    padding: 9.5px 35px 9.5px 20px;
    cursor: pointer;
    color: rgb(18, 18, 18, 0.75);
    text-decoration:none;
  }

  .header-dropdown__item:hover {
    color: rgb(18, 18, 18, 1);
  }

  @keyframes dropdownAnimate {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
