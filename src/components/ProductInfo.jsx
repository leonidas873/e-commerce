import React, { useEffect, useState } from 'react';
import { BsZoomIn } from 'react-icons/bs';
import { AiOutlineCar, AiOutlineHeart } from 'react-icons/ai';
import { GiPirateCoat } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaRuler } from 'react-icons/fa';
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    padding-top: 36px;
    padding-bottom: 12px;
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
    align-items: flex-start;
    justify-content: space-between;
`;

const ImageContainerColumn = styled.div`
    max-width: 65%;
    width: calc(65% - 4px);
    display: flex;
    flex-direction: column;
`;

const PayInfo = styled.div`
    /* position: ${props => props.className === "relative" ? "relative" : "fixed"}; */
    /* top: ${window.scrollY}; */
    /* left: calc(65% - 4px); */
    padding-left: 2rem;
    max-width: 35%;
    width: calc(35% - 4px);
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;

const ZoomIn = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 7px 10px;
    font-size: 14px;
    border-radius: 50%;
    background-color: #FFFFFF;
    opacity: 0;
`;

const ImageRow = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 8px;

    &:nth-child(1){
        grid-template-columns: auto;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    margin: 4px 0;
    position: relative;
    cursor: pointer;

    &:hover ${ZoomIn} {
        opacity: 1;
    }
`;

const Title = styled.h1`
    margin-bottom: 1rem;
    word-break: break-word;
`;

const Price = styled.span`
    display: block;
    margin: 1.5rem 0;
`;

const Properties = styled.div`
    
`;
const PropertyItem = styled.div`
    margin-bottom: 1rem;
    max-width: 37rem;
`;
const PropertyTitle = styled.p`
    margin-bottom: 0.2rem;
    letter-spacing: 0.04rem;
    color: rgba(18, 18, 18, 0.75);
    font-size: 0.9rem;
`;
const ButtonRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const PropertyButton = styled.button`
    color: rgb(18, 18, 18);
    border: 1px solid rgba(18, 18, 18, 0.55);
    background-color: #FFFFFF;
    padding: 0.3rem 1.1rem;
    font-size: 0.9rem;
    margin: 0.3rem 0.5rem 0.2rem 0;
    border-radius: 40px;

    &:hover {
        border: 1px solid rgb(18, 18, 18);
    }

`;

const StyleGuide = styled.span`
    align-self: flex-start;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid rgb(18, 18, 18);
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid rgb(18, 18, 18);
    }
`;

const AddToCart = styled.button`
    width: 100%;
    color: rgb(18, 18, 18);
    border: 1px solid rgb(18, 18, 18);
    background-color: #FFFFFF;
    padding: 0.7rem 1.25rem;
    font-size: 0.9rem;
    margin: 0.3rem 0.5rem 0.2rem 0;
`;

const Desc = styled.p`
    margin: 2.5rem 0;

    & p {
        color: rgba(18, 18, 18, 0.75);
        font-size: 1rem;
        letter-spacing: 0.06rem;
    }
`;

const Accordion = styled.div`
    margin-bottom: 0;
    border-bottom: 0.1rem solid rgba(18, 18, 18, 0.08);

    &:nth-child(1) {
        border-top: 0.1rem solid rgba(18, 18, 18, 0.08);
        margin-top: 2.5rem;
    }
`;

const AccordionDetails = styled.div`
    padding: 1rem 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & svg {
        color: rgba(18, 18, 18, 0.75);
    }
`;
const AccordionDetailsTitle = styled.div`
    
    & svg {
        color: rgb(18, 18, 18);
    }

    & span {
        font-size: 1.1rem;
        color: rgb(18, 18, 18);
        margin-left: 0.5rem;
        letter-spacing: 0.06rem;
    }
`;
const AccordionContent = styled.div`
    display: ${props => props.className === "active" ? "block" : "none"};
    padding: 0 1rem;
    margin-bottom: 1.5rem;
    word-break: break-word;
    color: rgba(18, 18, 18, 0.75);
    font-size: 0.9rem;
    letter-spacing: 0.06rem;
`;

const ProductInfo = () => {

    const [dropDown, setDropDown] = useState({
        materials: false,
        shipping: false,
        dimensions: false,
        care: false,
    });
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100 && window.scrollY < 1450) {
                setScroll(true)
            } else {
                setScroll(false);
            }
            console.log(window.scrollY);
        });
    }, []);

    return (
        <Container>
            <Wrapper>
                <DisplayFlex>
                    <ImageContainerColumn>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-beige-1_7cd2ddf8-5fd4-4570-a5a8-16b645ba7f59_600x.jpg?v=1637106673' />
                            <ZoomIn>
                                <BsZoomIn />
                            </ZoomIn>
                        </ImageContainer>
                        <ImageRow>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-1_1800x1800_2c06129f-4e73-4ffa-ad8b-39e8d4486d1a_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-denim-5_edbc146e-5629-4f5d-8614-2e0972a09f16_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                        </ImageRow>
                        <ImageRow>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-denim-3_7014ad43-2606-4fbb-abf8-6a0d358c0be4_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-beige-2_a3129ddf-438e-4058-81c7-0eca0ea35119_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                        </ImageRow>
                        <ImageRow>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-2_1800x1800_a1b8a93d-f0ea-4ecb-80b7-f233ae96d5e4_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-bordeaux-5_fa88cc7b-441c-4383-b2c8-665ea543ca57_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                        </ImageRow>
                        <ImageContainer>
                            <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-bordeaux-5_fa88cc7b-441c-4383-b2c8-665ea543ca57_600x.jpg?v=1637106673' />
                            <ZoomIn>
                                <BsZoomIn />
                            </ZoomIn>
                        </ImageContainer>
                    </ImageContainerColumn>
                    <PayInfo className={scroll ? "fixed" : "relative"}>
                        <Title>Pleated Heel Mule</Title>
                        <Price>$495.00 CAD</Price>
                        <Properties>
                            <PropertyItem>
                                <PropertyTitle>Color</PropertyTitle>
                                <ButtonRow>
                                    <PropertyButton>Beige</PropertyButton>
                                    <PropertyButton>Off White</PropertyButton>
                                    <PropertyButton>Olive</PropertyButton>
                                    <PropertyButton>Bordeaux</PropertyButton>
                                    <PropertyButton>Denim</PropertyButton>
                                </ButtonRow>
                            </PropertyItem>
                            <PropertyItem>
                                <PropertyTitle>Size</PropertyTitle>
                                <ButtonRow>
                                    <PropertyButton>35</PropertyButton>
                                    <PropertyButton>36</PropertyButton>
                                    <PropertyButton>37</PropertyButton>
                                    <PropertyButton>38</PropertyButton>
                                    <PropertyButton>39</PropertyButton>
                                    <PropertyButton>40</PropertyButton>
                                    <PropertyButton>41</PropertyButton>
                                </ButtonRow>
                            </PropertyItem>
                        </Properties>
                        <StyleGuide>Size Guide</StyleGuide>
                        <AddToCart>Add to cart</AddToCart>
                        <Desc>
                            <p>This is a demonstration store. You can purchase products like this from Mlouye.</p>
                            <p>Featuring a unique combination of modern art and minimalist perspective, our Helix Bag is perfectly sized to fit just the essentials - think small wallet, keys, sunglasses and large phone. It has a wind spinner silhouette that will remind you summer breezes out on the porch. The top handle is cleverly linked to the body through its hidden joint; it can fall down when you use the bag with shoulder strap. Made from smooth leather and has a suede internal with a drawstring top to keep all you have stowed inside safe and secure.</p>
                        </Desc>
                        <Accordion>
                            <AccordionDetails onClick={() => setDropDown({ ...dropDown, materials: !dropDown.materials })}>
                                <AccordionDetailsTitle>
                                    <GiPirateCoat />
                                    <span>Materials</span>
                                </AccordionDetailsTitle>
                                {dropDown.materials ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </AccordionDetails>
                            <AccordionContent className={dropDown.materials ? "active" : null}>Crafted from Italian cow leather, and suede. You can carry it by the top handle or go hands-free with the shoulder strap. Silver hardware.</AccordionContent>
                        </Accordion>
                        <Accordion>
                            <AccordionDetails onClick={() => setDropDown({ ...dropDown, shiping: !dropDown.shiping })}>
                                <AccordionDetailsTitle>
                                    <AiOutlineCar />
                                    <span>Shipping & Returns</span>
                                </AccordionDetailsTitle>
                                {dropDown.shiping ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </AccordionDetails>
                            <AccordionContent className={dropDown.shiping ? "active" : null}>Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days!</AccordionContent>
                        </Accordion>
                        <Accordion>
                            <AccordionDetails onClick={() => setDropDown({ ...dropDown, dimensions: !dropDown.dimensions })}>
                                <AccordionDetailsTitle>
                                    <FaRuler />
                                    <span>Dimensions</span>
                                </AccordionDetailsTitle>
                                {dropDown.dimensions ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </AccordionDetails>
                            <AccordionContent className={dropDown.dimensions ? "active" : null}>h:16 X w:19 cm (6.25 X 7.5 in)</AccordionContent>
                        </Accordion>
                        <Accordion>
                            <AccordionDetails onClick={() => setDropDown({ ...dropDown, care: !dropDown.care })}>
                                <AccordionDetailsTitle>
                                    <AiOutlineHeart />
                                    <span>Care Instructions</span>
                                </AccordionDetailsTitle>
                                {dropDown.care ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </AccordionDetails>
                            <AccordionContent className={dropDown.care ? "active" : null}>Use a soft damp cloth and a drop of mild soap to remove any haze. Air dry.</AccordionContent>
                        </Accordion>
                    </PayInfo>
                </DisplayFlex>
            </Wrapper>
        </Container>
    )
}

export default ProductInfo