import { useEffect, useState } from 'react';
import styled from "styled-components";
import MainLayout from "../../styles/MainLayout";
import { HeroSlider, Overview, Stock, VideoReview } from '../../components/Components';
import {getSortedProducts } from '../../api';

export const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      getSortedProducts('date-DESC')
      .then(res => setProducts(res.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <HomeStyled>
      <MainLayout>
        <HeroSlider />
        <Overview products={products} />
        <Stock singleProduct={products[0]} />
        <VideoReview />
      </MainLayout>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  /* background-color: #42b67e; */
`;
