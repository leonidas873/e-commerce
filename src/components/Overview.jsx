import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllProducts } from '../api';
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

const Overview = () => {
    const [products, setProducts] = useState([])
    const navigation = useNavigate()

    useEffect(() => {
        getAllProducts()
        .then(res => setProducts(res.data))
        .catch(error => console.log(error))
    }, [])

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
                                    <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-small-convertible-flex-bag-cappuccino-n1_360x.jpg?v=1637107143' />
                                    <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-small-convertible-flex-bag-cappuccino-n2_360x.jpg?v=1637107143' />
                                    {
                                        product?.price < 300 &&
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
                    {/* <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-small-convertible-flex-bag-cappuccino-n1_360x.jpg?v=1637107143' />
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-small-convertible-flex-bag-cappuccino-n2_360x.jpg?v=1637107143' />
                            <Sale>Sale</Sale>
                        </ImageContainer>
                        <Content>
                            <Title>Small Convertible Flex Bag</Title>
                            <Price>$ 465 CAD</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-studio-denim-1_cb1da2bc-0ed8-4836-a120-dcf9f2caf1e3_360x.jpg?v=1637108123' />
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-studio-denim-4_f841accc-a055-4250-a646-fe53c956b3af_360x.jpg?v=1637108123' />
                            <Sale>Sale</Sale>
                        </ImageContainer>
                        <Content>
                            <Title>Studio Bag</Title>
                            <Price>320$</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-louise-slide-sandal-buttermilk-1_b91db288-b05a-4882-ae45-c0c9a4edd5fb_360x.jpg?v=1637106712' />
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-louise-slide-sandal-buttermilk-5_04f1f6dd-4f7c-498b-bce7-2932fa651c00_360x.jpg?v=1637106712' />
                            <Sale>Sale</Sale>
                        </ImageContainer>
                        <Content>
                            <Title>Small Bag</Title>
                            <Price>320$</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-mini-naomi-bag-harvest-1_360x.jpg?v=1637107230' />
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-mini-naomi-bag-harvest-2_360x.jpg?v=1637107230' />
                            <Sale>Sale</Sale>
                        </ImageContainer>
                        <Content>
                            <Title>Small Bag</Title>
                            <Price>320$</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-helix-multicolor-2_1800x1800_10c62242-6743-4d46-a251-defa246dd195_360x.jpg?v=1637107119' />
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-helix-multicolor-4_1800x1800_fccc27b4-a30a-49ee-b1b8-81aafe12034a_360x.jpg?v=1637107119' />
                            <Sale>Sale</Sale>
                        </ImageContainer>
                        <Content>
                            <Title>Small Convertible Flex Bag</Title>
                            <Price>$ 465 CAD</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-bo-ivy-emerald-1_73c3987e-5ec7-4e72-879a-2ba2e560648f_360x.jpg?v=1637107948' />
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-bo-ivy-emerald-2_e192bf00-1ce2-4ae4-9061-9828e59229df_360x.jpg?v=1637107948' />
                            <Sale>Sale</Sale>
                        </ImageContainer>
                        <Content>
                            <Title>Studio Bag</Title>
                            <Price>320$</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-1_1800x1800_2c06129f-4e73-4ffa-ad8b-39e8d4486d1a_360x.jpg?v=1637106673' />
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-denim-5_edbc146e-5629-4f5d-8614-2e0972a09f16_360x.jpg?v=1637106673' />
                            <Sale>Sale</Sale>
                        </ImageContainer>
                        <Content>
                            <Title>Small Bag</Title>
                            <Price>320$</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-brick-oil-yellow-1_360x.jpg?v=1637107420' />
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-brick-oil-yellow-2_360x.jpg?v=1637107420' />
                            <Sale>Sale</Sale>
                        </ImageContainer>
                        <Content>
                            <Title>Small Bag</Title>
                            <Price>320$</Price>
                        </Content>
                    </Item> */}
                </GridContainer>
            </Wrapper>
        </Container >
    );
};

export default Overview;
