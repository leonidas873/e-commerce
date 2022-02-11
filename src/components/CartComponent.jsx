import React from 'react';
import styled from 'styled-components';
import { cart } from '../cart';

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
        width: 60%;
    }
    &:nth-child(2){
        padding-left: 4rem;
    }
    &:nth-child(3){
        text-align: right;
    }
`;

const TdItem = styled.td`
    padding: 2rem 0 0 2rem;
    vertical-align: top;

    &:nth-child(1){
        padding-left: 0;
        max-width: 30px;
    }
    &:nth-child(4){
        text-align: right;
    }
`;
const Image = styled.img`
    width: 100%;
    min-width: 50px;
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
    margin: 0;
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
const CartQuantity = styled.div`
    border: 1px solid black;
    width: 9rem;
    height: 3rem;
    display: flex;
    align-items: center;
`;
const ButtonQuantity = styled.button`
    border: none;
    width: 3rem;
    height: 100%;
    color: rgb(18, 18, 18);
    font-size: 1.4rem;
    font-weight: bold;
    background-color: white;
    opacity: 0.85;
`;
const Input = styled.input`
    border: none;
    width: 3.5rem;
    height: 100%;
    text-align: center;
    color: rgb(18, 18, 18);
    font-size: 1.2rem;
    padding: 0 0.5rem;
    opacity: 0.85;
    
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 

    &:focus {
        background-color: red !important;
    }
}
`;

const EmptyTitle = styled.h1`
    color: rgb(18, 18, 18);
`;

const DisplayFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    display: block;
    border: none;
    color: #FFFFFF;
    background: rgb(18, 18, 18);
    padding: 0.75rem 1.75rem;
    font-size: 0.9rem;
    margin: 2rem auto 0 auto;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`;

const CartComponent = () => {
    console.log(cart)
    return (
        <>
            <Container>
                <Wrapper>
                    <Header>
                        <CartHeader>Your cart</CartHeader>
                        <ContinueShopping>Continue Shopping</ContinueShopping>
                    </Header>
                    {cart.length === 0 ?
                        <DisplayFlex>
                            <EmptyTitle>Your cart is empty</EmptyTitle>
                            <Button>Continue Shopping</Button>
                        </DisplayFlex>
                        :
                        <Table>
                            <thead>
                                <tr>
                                    <Theader colSpan="2">Product</Theader>
                                    <Theader>Quantity</Theader>
                                    <Theader>Total</Theader>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (

                                    <tr key={item.id}>
                                        <TdItem>
                                            <Image src={item.img} />
                                        </TdItem>
                                        <TdItem>
                                            <Title>{item.title}</Title>
                                            <Price>{item.price}</Price>
                                            <Properties>
                                                {item.properties.map(prop => (
                                                    <Item key={prop.id}>{prop.name}: {prop.value}</Item>
                                                ))}
                                            </Properties>
                                        </TdItem>
                                        <TdItem>
                                            <CartQuantity>
                                                <ButtonQuantity>-</ButtonQuantity>
                                                <Input value={0} type="number" />
                                                <ButtonQuantity>+</ButtonQuantity>
                                            </CartQuantity>
                                        </TdItem>
                                        <TdItem>
                                            <Price>$390.00</Price>
                                        </TdItem>
                                    </tr>

                                ))}
                            </tbody>
                        </Table>
                    }
                </Wrapper>
            </Container>
        </>
    );
};

export default CartComponent;
