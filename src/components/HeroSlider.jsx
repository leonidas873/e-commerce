import React from 'react';
import Slider from 'react-slick/lib/slider';
import styled from 'styled-components';


const Container = styled.div`
    width: 100;
    position: relative;
`

const Wrapper = styled.div`
    padding: 0 50px;
    margin: 0 auto;

    @media screen and (max-width: 750px){
        padding: 0 15px;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        background: #000000;
        opacity: 0.4;
        z-index: 0;
        width: 100%;
        height: 100%;
    }
`;

const Image = styled.img`
    width: 50%;
    height: 80vh;
    object-fit: cover;
`;

const TextContent = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    text-align: center;
`;

const Title = styled.h1`
    color: #FFFFFF;
    font-size: 2.8rem;
`;

const Desc = styled.p`
    color: rgba(255,255,255,.75);
    margin-top: 1rem;
`;

const Button = styled.button`
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background: transparent;
    padding: 0.75rem 1.75rem;
    font-size: 0.9rem;
    margin-top: 2rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 1px 1px #FFFFFF;
    }
`;

const HeroSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            <Container>
                <ImageContainer>
                    <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/141569803_417219312901458_4638470652865432174_n_750x.jpg?v=1642635018" />
                    <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Mlouye_750x.jpg?v=1642635039" />
                </ImageContainer>
                <TextContent>
                    <Wrapper>
                        <Title>Industrial design meets fashion.</Title>
                        <Desc>Atypical leather goods</Desc>
                        <Button>Shop Now</Button>
                    </Wrapper>
                </TextContent>
            </Container>
            <Container>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1630750797329-9772dcdee075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <Image src="https://images.unsplash.com/photo-1630750794007-3561e4611134?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                </ImageContainer>
                <TextContent>
                    <Wrapper>
                        <Title>Industrial design meets fashion.</Title>
                        <Desc>Atypical leather goods</Desc>
                        <Button>Shop Now</Button>
                    </Wrapper>
                </TextContent>
            </Container>
        </Slider>
    );
};

export default HeroSlider;
