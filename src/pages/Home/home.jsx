import styled from "styled-components";
import MainLayout from "../../styles/MainLayout";
import { HeroSlider, Overview, Stock, VideoReview } from '../../components/Components';

export const Home = () => {
  return (
    <HomeStyled>
      <MainLayout>
        <HeroSlider />
        <Overview />
        <Stock />
        <VideoReview />
      </MainLayout>
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  /* background-color: #42b67e; */
`;
