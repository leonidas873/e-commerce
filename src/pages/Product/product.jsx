import React, { useState, useEffect } from 'react';
import MainLayout from "../../styles/MainLayout";
import { ProductInfo, NewKind, AlsoLike } from '../../components/Components';
import { useParams } from 'react-router-dom';
import { getAllProducts, getSingleProduct } from '../../api';

export const Product = () => {
    let { id } = useParams()
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [singleProduct, setSingleProduct] = useState([])

    useEffect(() => {
        getAllProducts()
        .then(res => setFeaturedProducts(res.data?.filter((_, index) => index < 4)))
        .catch(error => console.log(error))

        if(id) {
            getSingleProduct(id)
            .then(res => setSingleProduct(res.data))
            .catch(error => console.log(error))
        }
    }, [])

    return (
        <MainLayout>
            <ProductInfo singleProduct={singleProduct} />
            <NewKind />
            <AlsoLike featuredProducts={featuredProducts} />
        </MainLayout>
    )
}