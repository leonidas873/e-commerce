import React from 'react';
import { CartComponent, FeaturedCollection } from '../../components/Components';
import MainLayout from '../../styles/MainLayout';

export const Cart = () => {
    return (
        <>
        <MainLayout>
            <CartComponent />
            <FeaturedCollection />
            </MainLayout>
        </>
    );
};

