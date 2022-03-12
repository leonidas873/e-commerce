import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getAllColors, getProducts } from '../../api';
import { setAllColors, setCatalog } from '../../redux/actions/catalogActions';


const CatalogProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.catalog.catalog);
    const searchValue = useSelector(state=>state.catalog.searchQuery);
    const filters = useSelector(state=>state.catalog.filters);
    let searched = products.filter(item => item.title?.toLowerCase().includes(searchValue?.toLowerCase()));
    


    useEffect(()=>{
        
        getProducts(filters).then(res=>dispatch(setCatalog(res.data)));
        console.log(products);
      },[filters])

    useEffect(()=>{
        getAllColors().then(res=>dispatch(setAllColors(res.data)))
    },[])



    return <CatalogProductsStyled>
        <GridContainer>
            {searched && searched.map(product=>  <Item key={product.productId}>
                            <ImageContainer>
                                <Image src={product.img} />
                                {product.sale && <Sale>Sale</Sale>}
                            </ImageContainer>
                            <Content>
                                <Title>{product.title}</Title>
                                <Price>$ {product.price} CAD</Price>
                            </Content>
                        </Item>
            )}
                        </GridContainer>
    </CatalogProductsStyled>
}

export default CatalogProducts;

const CatalogProductsStyled = styled.div`
    
`

const GridContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 8px;
    box-sizing:border-box;
    padding:25px 50px;

    @media screen and (max-width: 991px){
        grid-template-columns: auto auto auto;
    }
    @media screen and (max-width: 750px){
        grid-template-columns: auto auto;
        padding:15px;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 280px;

`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: all 0.3s ease;

    &:nth-child(2){
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }
`;

const Sale = styled.span`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    left: 10px;
    border: 1px solid transparent;
    font-size: 0.8rem;
    letter-spacing: .1rem;
    padding: 0.4rem 0.9rem;
    background-color: rgb(51, 79, 180);
    border-radius: 4rem;
    color: #FFFFFF;
`;

const Content = styled.div`
    padding:17px 0;
`;

const Title = styled.p`
    display: inline-block;
    font-size: 1.1rem;
    border: 1px solid rgb(18, 18, 18,0);
    color: rgb(18, 18, 18);
    margin:0;
`;

const Price = styled.span`
    display: block;
    margin: 10px 0 0 0;
`;

const Item = styled.div`
    min-width: 100%;
    cursor: pointer;

    &:hover {
        ${Title} {
            border-bottom: 1px solid rgb(18, 18, 18);
        }
        ${Image}:nth-child(1){
            transform: scale(1.1);
        }
    }
`;

