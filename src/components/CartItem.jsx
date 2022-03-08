import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setUpdatedCart } from '../redux/actions/cartActions';
import { API } from '../utils/API';
import { BiTrashAlt } from 'react-icons/bi';

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
    margin-bottom: 0;
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

const DisplayFlex = styled.div`
    display: flex;
    align-items: center;

    & svg {
        font-size: 25px;
        padding: 5px;
        color: rgba(18, 18, 18, .5);
        box-sizing: content-box;
        margin-left: 20px;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
            color: rgb(18, 18, 18);
        }
    }
`;

const CartItem = ({ item }) => {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.number);
    const cartProducts = useSelector(state => state.cart.cart);

    const handleQuantity = async (type) => {
        if (type === "add") {
            setQuantity(quantity + 1);
            try {
                const url = `/cart/${item.id}`;
                const response = await API.put(url, { number: quantity + 1 })
            } catch (error) {
                console.log(error);
            }
        } else if (type === "remove") {
            if (quantity === 1) {
                try {
                    const url = `/cart/${item.id}`;
                    const response = await API.delete(url);
                    const updatedCart = cartProducts.filter(component => component.id !== item.id);
                    dispatch(setUpdatedCart(updatedCart));
                } catch (error) {
                    console.log(error);
                }
            } else {
                setQuantity(quantity - 1)
                try {
                    const url = `/cart/${item.id}`;
                    const response = await API.put(url, { number: quantity - 1 })
                } catch (error) {
                    console.log(error);
                }
            }

        } else {
            try {
                const url = `/cart/${item.id}`;
                const response = await API.delete(url);
                const updatedCart = cartProducts.filter(component => component.id !== item.id);
                dispatch(setUpdatedCart(updatedCart));
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <tr key={item.id}>
            <TdItem>
                <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-small-convertible-flex-bag-cappuccino-n1_360x.jpg?v=1637107143" />
            </TdItem>
            <TdItem>
                <Title>{item.productData.title}</Title>
                <Price>${item.productData.price}.00</Price>
                <Properties>
                    <Item>Color: {item.productData.color}</Item>
                    <Item>Materias: {item.productData.materials}</Item>
                </Properties>
            </TdItem>
            <TdItem>
                <DisplayFlex>
                    <CartQuantity>
                        <ButtonQuantity onClick={() => handleQuantity("remove")}>-</ButtonQuantity>
                        <Input value={quantity} type="number" />
                        <ButtonQuantity onClick={() => handleQuantity("add")}>+</ButtonQuantity>
                    </CartQuantity>
                    <BiTrashAlt onClick={() => handleQuantity()} />
                </DisplayFlex>
            </TdItem>
            <TdItem>
                <Price>$ {quantity * item.productData.price}.00</Price>
            </TdItem>
        </tr>
    )
}

export default CartItem