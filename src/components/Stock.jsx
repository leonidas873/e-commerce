import React from 'react';
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs'


const Container = styled.div`
    width: 100%;
    padding: 36px 0 72px 0;
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

const FlexContainer = styled.div`
    display: flex;

    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: all 0.5s ease;
`;

const ImageContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;

const Content = styled.div`
    padding: 1.7rem 0;
    display: flex;
    align-items: center;
`;
const Title = styled.h3`
    display: block;
    font-size: 1.1rem;
    color: rgb(18, 18, 18);
    border: 1px solid #FFFFFF;
`;
const Span = styled.span`
    display: flex;
    align-items: flex-end;
    margin-left: 0.4rem;
    transition: all 0.3s ease;
    white-space: nowrap;
    border: 1px solid #FFFFFF;
`;
const Price = styled.span`
    display: block;
    color: rgb(18, 18, 18);
    margin-top: 0.7rem;
`;

const Left = styled.div`
    flex: 2;
    cursor: pointer;
    margin-right: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover ${Image} {
        transform: scale(1.1);
    }

    ${ImageContainer} {
        height: 100%;
    }

    @media screen and (max-width: 750px){
        margin: 0;
    }
`;

const Item = styled.div`
    flex: 1;
    cursor: pointer;

    &:nth-child(1) ${Content} {
        flex-direction: column;
        align-items: flex-start;
    }

    &:hover {
        ${Image} {
            transform: scale(1.1);
        }
        &:nth-child(1) ${Title} {
            border-bottom: 1px solid rgb(18, 18, 18);
        }
    }
`;

const FlexColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 4px;

    @media screen and (max-width: 750px){
        flex-direction: row;
        margin: 0;

        ${Item}:nth-child(1){
            margin-right: 4px;
        }

        ${Item}:nth-child(2){
            margin-left: 4px;
        }
    }
`;

const Stock = () => {
    return (
        <Container>
            <Wrapper>
                <Header>Back in stock!</Header>
                <FlexContainer>
                    <Left>
                        <ImageContainer>
                            <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/collections/Mlouye_-_Bags_collection_750x.jpg?v=1637109194" />
                        </ImageContainer>
                        <Content>
                            <Title>Bags</Title>
                            <Span>
                                <BsArrowRight />
                            </Span>
                        </Content>
                    </Left>
                    <FlexColumn>
                        <Item>
                            <ImageContainer>
                                <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-mini-eddy-off-white-1_1c48b857-644c-44b6-825f-b87bc84a9ab6_165x.jpg?v=1642620360" />
                            </ImageContainer>
                            <Content>
                                <Title>Mini Eddy</Title>
                                <Price>$375.00 CAD</Price>
                            </Content>
                        </Item>
                        <Item>
                            <ImageContainer>
                                <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/collections/Mlouye_-_Shoe_collection_165x.jpg?v=1637109743" />
                            </ImageContainer>
                            <Content>
                                <Title>Shoes</Title>
                                <Span>
                                    <BsArrowRight />
                                </Span>
                            </Content>
                        </Item>
                    </FlexColumn>
                </FlexContainer>
            </Wrapper>
        </Container>
    );
};

export default Stock;
