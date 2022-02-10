import styled from 'styled-components';
import {IoIosArrowDown} from 'react-icons/io';
import { useState } from 'react';
import {useRef} from 'react';
import {useOnClickOutside} from '../../hooks/uiHooks';
const AvailabilityFilter = () => {

    const ref = useRef();
    useOnClickOutside(ref, () => setShow(false));
    const [show, setShow] = useState(false);

    return <AvailabilityFilterStyled>
        {/* {show && <div className="filter__bg" onClick={()=>setShow(false)}> </div>} */}
        <div className="filter__title" onClick={()=>setShow(!show)}><span className={show && "filter__title--selected"}>Availability</span><IoIosArrowDown/></div>

       {show && <div className="filter__items" ref={ref}>
            <div className="filter__items-header">
                <div className="filter__items-selected">0 selected</div>
                <div className="filter__items-reset"><span>Reset</span></div>
            </div>
            <div className="filter__items-body">
                <div className="filter__item"><input type="checkbox"/> In Stock</div>
                <div className="filter__item"><input type="checkbox"/> Out of stock</div>
            </div>
        </div>}
    </AvailabilityFilterStyled>
}

export default AvailabilityFilter;

const AvailabilityFilterStyled = styled.div`
cursor:pointer;
position:Relative;


    .filter__items-header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        box-sizing:border-box;
        padding:15px 20px;
        gap:100px;
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
`