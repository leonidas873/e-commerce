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
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0rem 0 3rem 0;
`;
const CartHeader = styled.h2`
    font-size: 2rem;
    color: rgb(18, 18, 18);
`;
const ContinueShopping = styled.p`
    font-size: 1rem;
    color: rgb(18, 18, 18);
    border-bottom: 1px solid #000000;
    cursor: pointer;
    padding-bottom: 2px;

    &:hover{
        border-bottom: 2px solid #000000;
        text-decoration: none;
    }
`;
const Table = styled.table`
    width: 100%;
    /* background-color: red; */
`;

const Theader = styled.th`
    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 0.07rem;
    text-align: left;
    padding-bottom: 1.8rem;
    opacity: 0.85;
    border-bottom: 0.1rem solid rgba(18, 18, 18, 0.08);

    &:nth-child(1){
        /* width: 60%; */
    }
    &:nth-child(3){
        text-align: right;
    }
`;

const TdItem = styled.td`
    padding: 4rem 0 0 4rem;

    &:nth-child(1){
        padding-left: 0;
        width: 100px;
    }
    &:nth-child(4){
        text-align: right;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;

const Title = styled.h3`
    display: inline-block;
    font-size: 1.1rem;
    padding-bottom: 2px;
    color: rgb(18, 18, 18);
    border: 2px solid #FFFFFF;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid #000000;
    }
`;
const Price = styled.p`
    font-size: 0.9rem;
    margin-top: 0.6rem;
    color: rgba(18, 18, 18, 0.7);
`;
const Properties = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const Item = styled.p`
    font-size: 0.9rem;
    margin-top: 0.6rem;
    color: rgba(18, 18, 18, 0.7);
`;

const CartComponent = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Header>
                        <CartHeader>Your cart</CartHeader>
                        <ContinueShopping>Continue Shopping</ContinueShopping>
                    </Header>
                    <Table>
                        <thead>
                            <tr>
                                <Theader colSpan="2">Product</Theader>
                                <Theader>Quantity</Theader>
                                <Theader>Total</Theader>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <TdItem>
                                    <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-bo-ivy-emerald-1_73c3987e-5ec7-4e72-879a-2ba2e560648f_300x.jpg?v=1637107948" />
                                </TdItem>
                                <TdItem>
                                    <Title>Bo Ivy</Title>
                                    <Price>$ 390.00</Price>
                                    <Properties>
                                        <Item>Color: Emerald</Item>
                                    </Properties>
                                </TdItem>
                                <TdItem>
                                    asd
                                </TdItem>
                                <TdItem>
                                    <Price>$390.00</Price>
                                </TdItem>
                            </tr>
                        </tbody>
                    </Table>
                </Wrapper>
            </Container>
        </>
    );
};

export default CartComponent;
