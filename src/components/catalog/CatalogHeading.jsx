import styled from 'styled-components';
import {useSelector} from 'react-redux';


const CatalogHeading = () => {

    const activeCategory = useSelector(state=>state.catalog.activeCategory);

    return (
        <CatalogHeadingStyled>
            <h1>{activeCategory}</h1>
        </CatalogHeadingStyled>
    )
}

export default CatalogHeading;

const CatalogHeadingStyled = styled.div`
    
    
    
    & > h1{
        max-width:1200px;
        margin:auto;
        box-sizing:border-box;
        padding:25px 50px;
        font-size:40px;
    }

    @media (max-width:750px){
        & > h1{
            font-size:30px;
            padding:25px 15px;
        }
    }

`