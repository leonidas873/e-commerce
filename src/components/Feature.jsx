import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding-top: 36px;
    padding-bottom: 36px;
`;
const Wrapper = styled.div`
    padding: 0 50px;
    margin: 0 auto;
    max-width: 1200px;

    @media screen and (max-width: 750px){
        padding: 0 15px;
    }
`;
const Header = styled.h2`
    margin-bottom: 3rem;
    font-size: 2rem;
    color: rgb(18, 18, 18);
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
            transform: scale(1.1);
        }
    }
`;

const Feature = () => {
    return (
        <Container>
            <Wrapper>
                <Header>Featured</Header>
                <GridContainer>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-studio-denim-1_cb1da2bc-0ed8-4836-a120-dcf9f2caf1e3_360x.jpg?v=1637108123' />
                        </ImageContainer>
                        <Content>
                            <Title>Studio Bag</Title>
                            <Price>$ 465.00 CAD</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-business-bag-black_grey-1_360x.jpg?v=1637106913' />
                        </ImageContainer>
                        <Content>
                            <Title>Business Bag</Title>
                            <Price>$ 545 CAD</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-lantern-bag-pleated-mint-nn1_360x.jpg?v=1637106944' />
                        </ImageContainer>
                        <Content>
                            <Title>Lantern Bag Pleated</Title>
                            <Price>$ 460 CAD</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-helix-multicolor-2_1800x1800_10c62242-6743-4d46-a251-defa246dd195_360x.jpg?v=1637107119' />
                        </ImageContainer>
                        <Content>
                            <Title>Helix</Title>
                            <Price>$ 470 CAD</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-sera-tote-butter-1_40a894e5-2624-4582-b8f1-8fbd5e46776d_360x.jpg?v=1637107252' />
                        </ImageContainer>
                        <Content>
                            <Title>Hera Tote</Title>
                            <Price>$ 545 CAD</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-brick-oil-yellow-1_360x.jpg?v=1637107420' />
                        </ImageContainer>
                        <Content>
                            <Title>Brick</Title>
                            <Price>$ 385 CAD</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-stormi-cognac-olive-leaf-1_360x.jpg?v=1637107747' />
                        </ImageContainer>
                        <Content>
                            <Title>Stormi</Title>
                            <Price>$ 545 CAD</Price>
                        </Content>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-mini-eddy-off-white-1_1c48b857-644c-44b6-825f-b87bc84a9ab6_360x.jpg?v=1642620360' />
                        </ImageContainer>
                        <Content>
                            <Title>Mini Eddy</Title>
                            <Price>$ 375 CAD</Price>
                        </Content>
                    </Item>
                </GridContainer>
            </Wrapper>
        </Container>
    );
};

export default Feature;
