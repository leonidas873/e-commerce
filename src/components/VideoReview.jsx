import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    padding: 36px 0;
`;
const Wrapper = styled.div`
    padding: 0 50px;
    margin: 0 auto;
    max-width: 1200px;

    @media screen and (max-width: 750px){
        padding: 0 15px;
    }
`;
const Video = styled.div`
    width: 100%;
    margin-bottom: 36px;
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 8px;
    padding: 36px 0;

    @media screen and (max-width: 750px){
        grid-template-columns: auto;
    }
`;
const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ImageContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`
    display: block;
    width: 180px;
    margin: 0 auto;
`;
const Desc = styled.div`
    padding: 2.5rem 1.5rem;
    text-align: center;
    line-height: 1.7rem;
    color: rgb(18, 18, 18);
`;

const VideoReview = () => {
    return (
        <Container>
            <Wrapper>
                <Video>
                    <iframe width="100%" height="450px" src="https://www.youtube.com/embed/yXWXFzjVnt8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Video>
                <GridContainer>
                    <Item>
                        <ImageContainer>
                            <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Mlouye_Refinery_logo_275x.png?v=1642635240" />
                        </ImageContainer>
                        <Desc>"The leather is sourced from environmentally friendly tanneries in Italy, France, and Turkey, where Rure is based and everything is assembled by hand."</Desc>
                    </Item>
                    <Item>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/files/the-cut-logo2_180x_eb657194-39db-4604-852b-1c97f84255ce.png?v=1642636917' />
                        </ImageContainer>
                        <Desc>"All too often, we're forced to pick: style, or sustainability. Recently, more designers have been making environmental impact a top priority"</Desc>
                    </Item>
                </GridContainer>
            </Wrapper>
        </Container>
    );
};

export default VideoReview;
