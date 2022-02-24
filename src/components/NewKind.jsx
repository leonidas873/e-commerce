import React from 'react';
import styled from 'styled-components';

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

const DisplayFlex = styled.div`
    display: flex;
    align-items: center;
    background-color: rgb(243, 243, 243);

    @media screen and (max-width: 768px){
        flex-direction: column-reverse;
    }
`;

const FlexItem = styled.div`
    width: 50%;

    &:nth-child(1) {
        padding: 4rem 4rem 6rem;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;

const Title = styled.h3`
    color: rgb(18, 18, 18);
    letter-spacing: 0.06rem;
    font-size: 2rem;
`;

const Desc = styled.p`
    color: rgba(18, 18, 18, 0.75);
    letter-spacing: 0.06rem;
    line-height: 1.8rem;
    font-size: 0.9rem;
`;

const NewKind = () => {
    return (
        <Container>
            <Wrapper>
                <DisplayFlex>
                    <FlexItem>
                        <Title>A new kind of bag.</Title>
                        <Desc>Unexpected shapes with smart details, functionality, a new luxury feel with a contemporary price point.</Desc>
                    </FlexItem>
                    <FlexItem>
                        <Image style={{ maxHeight: "300px" }} src='https://cdn.shopify.com/s/files/1/0551/9242/0441/files/imgwithtext_1070x_91914dd5-dcb3-4f6b-a829-e6e75fb5813e_535x.png?v=1642621359' />
                    </FlexItem>
                </DisplayFlex>
            </Wrapper>
        </Container>
    )
}

export default NewKind