import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { cart } from '../cart';
import axiosInstance from '../shared/axios/axiosInstance';
import CartItem from './CartItem';

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

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const url = `/cart`;
                const response = await axiosInstance.get(url);
                setCartItems(response.data.responseResult.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts();
    }, [cartItems]);

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
                                {cart.map(item => <CartItem item={item} />)}
                            </tbody>
                        </Table>
                    }
                </Wrapper>
            </Container>
        </>
    );
};

export default CartComponent;
