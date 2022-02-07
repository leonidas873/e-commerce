import styled from 'styled-components';
import {IoIosArrowDown} from 'react-icons/io';
import { useState } from 'react';


const PriceFilter = () => {


    const [show, setShow] = useState(false);

    return <PriceFilterStyled>
        
        <div className="filter__title" onClick={()=>setShow(!show)}><span className={show && "filter__title--selected"}>Price</span><IoIosArrowDown/></div>
       {show && <div className="filter__items">
            <div className="filter__items-header">
                <div className="filter__items-selected">The highest price is $615.00</div>
                <div className="filter__items-reset"><span>Reset</span></div>
            </div>
            <div className="filter__items-body">
                <div className="filter__input-price"><span>$</span><input type="number" placeholder='From'/></div>
                <div className="filter__input-price"><span>$</span><input type="number" placeholder='To'/></div>
            </div>
        </div>}
        {/* {show && <div className="filter__bg" onClick={()=>setShow(false)}> </div>} */}
    </PriceFilterStyled>
}

export default PriceFilter;

const PriceFilterStyled = styled.div`
cursor:pointer;
position:Relative;


    .filter__items-header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        box-sizing:border-box;
        padding:15px 20px;
        gap:50px;
        border-bottom:2px solid #12121275;
    }

    .filter__items-body{
        display:flex;
        justify-content:flex-start;
        flex-direction:column;
        align-items:flex-start;
        box-sizing:border-box;
        padding:5px 20px;
    }

    .filter__item{
        box-sizing:border-box;
        padding:10px 0;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        gap:10px;
    }

    .filter__items-body{
        display:flex;
        gap:20px;
        flex-direction:row;
        box-sizing:border-box;
        padding:20px;
    }

    .filter__input-price{
        display:flex;
        align-items:center;
        font-size:16px;
    }

    .filter__input-price input{
        padding:15px;
        width:127px;
    }
    .filter__input-price span{
        margin-right:7px;
        
    }



`