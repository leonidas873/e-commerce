import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
    width: 100%;
`;

const Wrapper = styled.div`
    padding: 0 50px;
    margin: 0 auto;
    max-width: 1200px;

    @media screen and (max-width: 750px){
        padding: 0 15px;
    }
`;

const Header = styled.div`
    width: 100%;
    padding-top: 30px;
    text-align: center;
`;

const HeaderTitle = styled.h2`
    font-size: 2rem;
`;

const Desc = styled.p`
    margin-top: 2rem;
    color: rgba(18,18,18,.75);
`;

const GridContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 8px;
    padding-top: 28px;
    padding-bottom: 36px;

    @media screen and (max-width: 991px){
        grid-template-columns: auto auto auto;
    }
    @media screen and (max-width: 750px){
        grid-template-columns: auto auto;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    max-height: 260px;
    @media screen and (max-width: 991px){
        height: 180px;
    }
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
    padding: 1.7rem 0;
`;

const Title = styled.p`
    display: inline-block;
    font-size: 1.1rem;
    padding-bottom: 2px;
    border: 1px solid white;
    color: rgb(18, 18, 18);
`;

const Price = styled.span`
    display: block;
    margin-top: 0.7rem;
`;

const Item = styled.div`
    min-width: 100%;
    cursor: pointer;

    &:hover {
        ${Title} {
            border-bottom: 1px solid rgb(18, 18, 18);
        }
        ${Image}:nth-child(1){
            opacity: 0;
        }
        ${Image}:nth-child(2){
            opacity: 1;
            transform: scale(1.1);
        }
    }
`;

const Overview = ({products}) => {
    const navigation = useNavigate()

    return (
        <Container>
            <Wrapper>
                <Header>
                    <HeaderTitle>Obsessive Attention. Intelligent Effort.</HeaderTitle>
                    <Desc>Functional handbags made of luxurious materials to improve people's lives in small but mighty ways.</Desc>
                </Header>
                <GridContainer>
                    {
                        products?.map((product, index) => (
                            index < 8 && <Item key={index} onClick={() => navigation(`/product/${product?.productId}`)}>
                                <ImageContainer>
                                    <Image src={product?.img} />
                                    <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-small-convertible-flex-bag-cappuccino-n2_360x.jpg?v=1637107143' />
                                    {
                                        product?.sale && 
                                        <Sale> Sale </Sale>
                                    }
                                </ImageContainer>
                                <Content>
                                    <Title>
                                        {product?.title}
                                    </Title>
                                    <Price>
                                        $ {product?.price}.00
                                    </Price>
                                </Content>
                            </Item>
                        ))
                    }
                </GridContainer>
            </Wrapper>
        </Container >
    );
};

export default Overview;
