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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px;
    padding-top: 28px;
    padding-bottom: 36px;

    @media screen and (max-width: 991px){
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

const AlsoLike = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Header>You may also like</Header>
                    <GridContainer>
                        <Item>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_360x.jpg?v=1637106934' />
                                <Sale>Sale</Sale>
                            </ImageContainer>
                            <Content>
                                <Title>Art Deco</Title>
                                <Price>$ 165.00 CAD</Price>
                            </Content>
                        </Item>
                        <Item>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-bo-ivy-emerald-1_73c3987e-5ec7-4e72-879a-2ba2e560648f_360x.jpg?v=1637107948' />
                            </ImageContainer>
                            <Content>
                                <Title>Bo Ivy</Title>
                                <Price>$ 390 CAD</Price>
                            </Content>
                        </Item>
                        <Item>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-bo-soft-strap-brown-1_360x.jpg?v=1637107682' />
                            </ImageContainer>
                            <Content>
                                <Title>Bo Soft Strap</Title>
                                <Price>$ 365 CAD</Price>
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
                    </GridContainer>
                </Wrapper>
            </Container>
        </>
    );
};

export default AlsoLike;
