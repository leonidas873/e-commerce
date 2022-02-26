import styled from 'styled-components';

const CatalogProducts = () => {
    return <CatalogProductsStyled>
        <GridContainer>
<Item>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_360x.jpg?v=1637106934' />
                                <Sale>Sale</Sale>
                            </ImageContainer>
                            <Content>
                                <Title>Art Deco</Title>
                                <Price>$ 165.00 CAD</Price>
                            </Content>
                        </Item>
                        <Item>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_360x.jpg?v=1637106934' />
                                <Sale>Sale</Sale>
                            </ImageContainer>
                            <Content>
                                <Title>Art Deco</Title>
                                <Price>$ 165.00 CAD</Price>
                            </Content>
                        </Item>
                        <Item>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_360x.jpg?v=1637106934' />
                                <Sale>Sale</Sale>
                            </ImageContainer>
                            <Content>
                                <Title>Art Deco</Title>
                                <Price>$ 165.00 CAD</Price>
                            </Content>
                        </Item>
                        <Item>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_360x.jpg?v=1637106934' />
                                <Sale>Sale</Sale>
                            </ImageContainer>
                            <Content>
                                <Title>Art Deco</Title>
                                <Price>$ 165.00 CAD</Price>
                            </Content>
                        </Item>
                        <Item>
                            <ImageContainer>
                                <Image src='https://cdn.shopify.com/s/files/1/0551/9242/0441/products/mlouye-art-deco-cyclamen-1_ec8e69b6-92ea-4c48-b8b6-34601cf3c070_360x.jpg?v=1637106934' />
                                <Sale>Sale</Sale>
                            </ImageContainer>
                            <Content>
                                <Title>Art Deco</Title>
                                <Price>$ 165.00 CAD</Price>
                            </Content>
                        </Item>
                        </GridContainer>
    </CatalogProductsStyled>
}

export default CatalogProducts;

const CatalogProductsStyled = styled.div`
    
`

const GridContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 8px;
    box-sizing:border-box;
    padding:25px 50px;

    @media screen and (max-width: 991px){
        grid-template-columns: auto auto auto;
    }
    @media screen and (max-width: 750px){
        grid-template-columns: auto auto;
        padding:15px;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: all 0.3s ease;

    &:nth-child(2){
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }
`;

const Sale = styled.span`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    left: 10px;
    border: 1px solid transparent;
    font-size: 0.8rem;
    letter-spacing: .1rem;
    padding: 0.4rem 0.9rem;
    background-color: rgb(51, 79, 180);
    border-radius: 4rem;
    color: #FFFFFF;
`;

const Content = styled.div`
    padding:17px 0;
`;

const Title = styled.p`
    display: inline-block;
    font-size: 1.1rem;
    border: 1px solid rgb(18, 18, 18,0);
    color: rgb(18, 18, 18);
    margin:0;
`;

const Price = styled.span`
    display: block;
    margin: 10px 0 0 0;
`;

const Item = styled.div`
    min-width: 100%;
    cursor: pointer;

    &:hover {
        ${Title} {
            border-bottom: 1px solid rgb(18, 18, 18);
        }
        ${Image}:nth-child(1){
            transform: scale(1.1);
        }
    }
`;

