import React from 'react';
import MainLayout from "../../styles/MainLayout";
import { ProductInfo, NewKind, AlsoLike } from '../../components/Components';

export const Product = () => {
    return (
        <MainLayout>
            <ProductInfo />
            <NewKind />
            <AlsoLike />
        </MainLayout>
    )
}