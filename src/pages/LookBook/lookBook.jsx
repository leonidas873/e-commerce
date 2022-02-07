import React from 'react';
import { LookbookComponent, Feature } from '../../components/Components';
import MainLayout from '../../styles/MainLayout';

export const LookBook = () => {
    return (
        <>
        <MainLayout>
            <LookbookComponent />
            <Feature />
            </MainLayout>
        </>
    );
};