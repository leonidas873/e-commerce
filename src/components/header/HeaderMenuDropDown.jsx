import styled from "styled-components";
import {IoIosArrowDown} from 'react-icons/io';
import { useState } from "react";


const HeaderMenuDropDown = ({name,items}) => {

    const [showDropdown,setShowDropdown] = useState(false)

    return (
        <HeaderMenuDropDownStyled>
            <div className={"header-dropdown__title" + (showDropdown ? " header-dropdown__title--underline" : " ")} onClick={()=>{setShowDropdown(!showDropdown)}}>{name}<IoIosArrowDown className={showDropdown ? "arrow-up" : "arrow-down"}/></div>
            {showDropdown && <div className="dropdown-background" onClick={()=>{setShowDropdown(false)}}> </div>}
            {showDropdown && <div className="header-dropdown__items">
                {items.map(item=><div className="header-dropdown__item">{item}</div>)}
            </div>}
        </HeaderMenuDropDownStyled>
    )
}

export default HeaderMenuDropDown;

const HeaderMenuDropDownStyled = styled.div`

padding:12px;
font-size:14px;
position:relative;

.dropdown-background{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    cursor:pointer;
}

.header-dropdown__title{
    display:flex;
    align-items:center;
    gap:5px;
    color:rgb(18,18,18,0.75);
    cursor:pointer;
    z-index: 0;
}

.header-dropdown__title:hover{
    color:rgb(18,18,18,1);
    text-decoration:underline;

}

.header-dropdown__title--underline{
    color:rgb(18,18,18,1);
    text-decoration:underline;
}


.arrow-up{
    transform:rotate(180deg);
}

.header-dropdown__items{
    position:absolute;
    width:200px;
    box-sizing:border-box;
    padding:10px 0px;
    left:0;
    top: 45px;
    border:1px solid rgb(18,18,18,0.1);
    z-index:1;
    background-color:white;
    animation:dropdownAnimate 0.3s;
}

.header-dropdown__item{
    box-sizing:border-box;
    padding:9.5px 35px 9.5px 20px;
    cursor:pointer;
    color:rgb(18,18,18,0.75);

}

.header-dropdown__item:hover{
    color:rgb(18,18,18,1);

}

@keyframes dropdownAnimate {
    from{opacity:0; transform:translateY(-20px)}
    to{opacity:1; transform:translateY(0)}
}
`