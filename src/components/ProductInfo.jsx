import React, { useEffect, useState, useRef } from 'react';
import { BsZoomIn } from 'react-icons/bs';
import { AiOutlineCar, AiOutlineHeart } from 'react-icons/ai';
import { GiPirateCoat } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaRuler } from 'react-icons/fa';
import styled from "styled-components";
import ImageGallery from 'react-image-gallery';
import { Modal } from 'react-bootstrap';
import {addToCart, fetchCartProducts, getAllColors} from '../api';
import Loading from './loading/Loading';
import {setCart} from "../redux/actions/cartActions";
import {useDispatch} from "react-redux";

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

    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`;

const ImageContainerColumn = styled.div`
    max-width: 65%;
    width: calc(65% - 4px);
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 990px){
        width: 50%;
    }
    @media screen and (max-width: 750px){
        display: none;
    }
`;

const PayInfo = styled.div`
    position: ${props => props.className === "scrolling" ? "sticky" : "relative"};
    top: ${props => props.className === "scrolling" ? "0" : `${props.top}px`};
    left: 0;
    padding-left: 2rem;
    width: calc(35% - 4px);
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 990px){
        width: 50%;
    }
    @media screen and (max-width: 750px){
        width: 100%;
        padding-left: 0;
        position: relative;
        top: 0;
    }
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

    @media screen and (max-width: 990px){
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

const ProductInfo = ({ singleProduct }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isAdded, setIsAdded] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [colors, setColors] = useState([])

    const refPayOut = useRef();
    const refImageContainer = useRef();

    const [dropDown, setDropDown] = useState({
        materials: false,
        shipping: false,
        dimensions: false,
        care: false,
    });
    const [activeProp, setActiveProp] = useState({
        color: 'Beige',
        Size: '36',
    });
    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [stopScrolling, setStopScrolling] = useState();
    const [imageStartIndex, setImageStartIndex] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stopScrolling = refImageContainer.current.clientHeight - refPayOut.current.clientHeight

            if (window.scrollY >= 124 && window.scrollY <= stopScrolling) {
                setScroll(true);
            } else if (window.scrollY < 124) {
                setScroll(false);
                setStopScrolling(0);
            } else {
                setScroll(false);
                setStopScrolling(stopScrolling);
            }
        });
        const currentY = window.scrollY
        window.scrollTo(0, currentY + 1);
    }, [dropDown]);

    const images = [
        {
            original: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-beige-1_7cd2ddf8-5fd4-4570-a5a8-16b645ba7f59_600x.jpg?v=1637106673',
            thumbnail: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-beige-1_7cd2ddf8-5fd4-4570-a5a8-16b645ba7f59_600x.jpg?v=1637106673',
        },
        {
            original: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-1_1800x1800_2c06129f-4e73-4ffa-ad8b-39e8d4486d1a_600x.jpg?v=1637106673',
            thumbnail: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-1_1800x1800_2c06129f-4e73-4ffa-ad8b-39e8d4486d1a_600x.jpg?v=1637106673',
        },
        {
            original: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-denim-5_edbc146e-5629-4f5d-8614-2e0972a09f16_600x.jpg?v=1637106673',
            thumbnail: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-denim-5_edbc146e-5629-4f5d-8614-2e0972a09f16_600x.jpg?v=1637106673',
        },
        {
            original: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-denim-3_7014ad43-2606-4fbb-abf8-6a0d358c0be4_600x.jpg?v=1637106673',
            thumbnail: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-denim-3_7014ad43-2606-4fbb-abf8-6a0d358c0be4_600x.jpg?v=1637106673',
        },
        {
            original: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-beige-2_a3129ddf-438e-4058-81c7-0eca0ea35119_600x.jpg?v=1637106673',
            thumbnail: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-beige-2_a3129ddf-438e-4058-81c7-0eca0ea35119_600x.jpg?v=1637106673',
        },
        {
            original: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-2_1800x1800_a1b8a93d-f0ea-4ecb-80b7-f233ae96d5e4_600x.jpg?v=1637106673',
            thumbnail: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-2_1800x1800_a1b8a93d-f0ea-4ecb-80b7-f233ae96d5e4_600x.jpg?v=1637106673',
        },
        {
            original: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-bordeaux-5_fa88cc7b-441c-4383-b2c8-665ea543ca57_600x.jpg?v=1637106673',
            thumbnail: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-bordeaux-5_fa88cc7b-441c-4383-b2c8-665ea543ca57_600x.jpg?v=1637106673',
        },
        {
            original: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-bordeaux-5_fa88cc7b-441c-4383-b2c8-665ea543ca57_600x.jpg?v=1637106673',
            thumbnail: 'https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-bordeaux-5_fa88cc7b-441c-4383-b2c8-665ea543ca57_600x.jpg?v=1637106673',
        },
    ];

    const handleModal = (e) => {
        setImageStartIndex(parseInt(e.target.dataset.id) - 1);
        setVisible(true);
        console.log(parseInt(e.target.dataset.id) - 1);
    }

    const handleAddToCard = id => {
        setIsLoading(true)
        addToCart(singleProduct?.productId)
        .then(res => {
            setTimeout(() =>{
                setIsLoading(false)
                setIsAdded(true)
                setIsDisabled(false)
            }, 500)
            fetchCartProducts().then(res=>dispatch(setCart(res.data)))
        })
        .catch(error => {
            if(error.response.status === 403) {
                setTimeout(() => {
                    setIsLoading(false)
                    alert('Product is not avalaible any more')
                    setIsDisabled(true)
                }, 850)
            } else {
                console.log(error)
            }
            setIsAdded(false)
        })
    }

    useEffect(() => {
        getAllColors()
        .then(res => setColors(res.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <Container>
            <Wrapper>
                <DisplayFlex>
                    <ImageContainerColumn ref={refImageContainer}>
                        <ImageContainer onClick={(e) => handleModal(e)}>
                            <Image data-id={1} src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-beige-1_7cd2ddf8-5fd4-4570-a5a8-16b645ba7f59_600x.jpg?v=1637106673' />
                            <ZoomIn>
                                <BsZoomIn />
                            </ZoomIn>
                        </ImageContainer>
                        <ImageRow>
                            <ImageContainer onClick={(e) => handleModal(e)}>
                                <Image data-id={2} src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-1_1800x1800_2c06129f-4e73-4ffa-ad8b-39e8d4486d1a_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                            <ImageContainer onClick={(e) => handleModal(e)}>
                                <Image data-id={3} src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-denim-5_edbc146e-5629-4f5d-8614-2e0972a09f16_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                        </ImageRow>
                        <ImageRow>
                            <ImageContainer onClick={(e) => handleModal(e)}>
                                <Image data-id={4} src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-denim-3_7014ad43-2606-4fbb-abf8-6a0d358c0be4_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                            <ImageContainer onClick={(e) => handleModal(e)}>
                                <Image data-id={5} src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-beige-2_a3129ddf-438e-4058-81c7-0eca0ea35119_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                        </ImageRow>
                        <ImageRow>
                            <ImageContainer onClick={(e) => handleModal(e)}>
                                <Image data-id={6} src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-mules-off-white-2_1800x1800_a1b8a93d-f0ea-4ecb-80b7-f233ae96d5e4_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                            <ImageContainer onClick={(e) => handleModal(e)}>
                                <Image data-id={7} src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-bordeaux-5_fa88cc7b-441c-4383-b2c8-665ea543ca57_600x.jpg?v=1637106673' />
                                <ZoomIn>
                                    <BsZoomIn />
                                </ZoomIn>
                            </ImageContainer>
                        </ImageRow>
                        <ImageContainer onClick={(e) => handleModal(e)}>
                            <Image data-id={8} src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-pleated-heel-mules-bordeaux-5_fa88cc7b-441c-4383-b2c8-665ea543ca57_600x.jpg?v=1637106673' />
                            <ZoomIn>
                                <BsZoomIn />
                            </ZoomIn>
                        </ImageContainer>
                    </ImageContainerColumn>
                    <PayInfo ref={refPayOut} top={stopScrolling} className={scroll && "scrolling"}>
                        <Title>
                            {singleProduct?.title}
                        </Title>
                        <Price>
                            $ {singleProduct?.price?.find(p => p.name == 'USD')?.price}.00 CAD
                        </Price>
                        <Properties>
                            <PropertyItem>
                                <PropertyTitle>Color</PropertyTitle>
                                <ButtonRow>
                                    {
                                        colors?.map(color => (
                                            <PropertyButton key={color}>
                                                {color}
                                            </PropertyButton>
                                        ))
                                    }
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
                        <div style={{position: 'relative'}}>
                            {
                                isAdded ? <AddToCart>Successfuly Added</AddToCart> :
                                <AddToCart
                                    onClick={() => handleAddToCard(singleProduct?.productId)}
                                    disabled={isDisabled}
                                    style={{opacity: isDisabled ? .5 : 1}}
                                >
                                    Add to cart
                                </AddToCart>
                            }
                            {isLoading && <Loading />}
                        </div>
                        <Desc>
                            <p>
                                {singleProduct?.about}
                            </p>
                        </Desc>
                        <Accordion>
                            <AccordionDetails onClick={() => setDropDown({ ...dropDown, materials: !dropDown.materials })}>
                                <AccordionDetailsTitle>
                                    <GiPirateCoat />
                                    <span>Materials</span>
                                </AccordionDetailsTitle>
                                {dropDown.materials ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </AccordionDetails>
                            <AccordionContent className={dropDown.materials ? "active" : null}>
                                {singleProduct?.materials}
                            </AccordionContent>
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
                            <AccordionContent className={dropDown.dimensions ? "active" : null}>
                                {singleProduct?.dimensions}
                            </AccordionContent>
                        </Accordion>
                        <Accordion>
                            <AccordionDetails onClick={() => setDropDown({ ...dropDown, care: !dropDown.care })}>
                                <AccordionDetailsTitle>
                                    <AiOutlineHeart />
                                    <span>Care Instructions</span>
                                </AccordionDetailsTitle>
                                {dropDown.care ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </AccordionDetails>
                            <AccordionContent className={dropDown.care ? "active" : null}>
                                {singleProduct?.careInstructions}
                            </AccordionContent>
                        </Accordion>
                    </PayInfo>
                </DisplayFlex>
                <Modal
                    size="lg"
                    show={visible}
                    onHide={() => setVisible(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Large Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ImageGallery
                            items={images}
                            showFullscreenButton={false}
                            startIndex={imageStartIndex}
                            showPlayButton={false}
                            thumbnailPosition="left"
                            autoPlay={false}
                        />
                    </Modal.Body>
                </Modal>
            </Wrapper>
        </Container>
    )
}

export default ProductInfo