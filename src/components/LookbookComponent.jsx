import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    padding-top: 32px;
`;
const Wrapper = styled.div`
    padding: 0 50px;
    margin: 0 auto;
    max-width: 1200px;

    @media screen and (max-width: 750px){
        padding: 0 15px;
    }
`;
const Header = styled.h2`
    margin-bottom: 3rem;
    font-size: 2rem;
    color: rgb(18, 18, 18);
`;


const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;

const Item = styled.div`
    width: 100%;
    margin: 4px 0;
`;

const FlexRow = styled.div`
    display: flex;

    & > ${Item}:nth-child(1) {
        flex: 2;
        margin-right: 4px;
    }
    & > ${Item}:nth-child(2) {
        flex: 1;
        margin-left: 4px;
    }

    @media screen and (max-width: 750px){
        & > ${Item}:nth-child(1) {
            flex: 1;
            margin-left: 4px;
        }
    }
`;

const FlexRowReverse = styled.div`
    display: flex;

    & > ${Item}:nth-child(1) {
        flex: 1;
        margin-right: 4px;
    }
    & > ${Item}:nth-child(2) {
        flex: 2;
        margin-left: 4px;
    }

    @media screen and (max-width: 750px){
        & > ${Item}:nth-child(2) {
            flex: 1;
            margin-left: 4px;
        }
    }
`;


const LookbookComponent = () => {
    return (
        <Container>
            <Wrapper>
                <Header>Summer inspiration</Header>
                <FlexRow>
                    <Item>
                        <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/beige_1100x_d4e0c67c-45cd-4f0f-903f-74d6dd8467fd_990x.jpg?v=1642635305" />
                    </Item>
                    <Item>
                        <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/mlouye-helix-sand-banner-mobile-l1_720x_3ecd24b4-b415-4297-a717-dbc969b84f50_720x.jpg?v=1642635335" />
                    </Item>
                </FlexRow>
                <FlexRowReverse>
                    <Item>
                        <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/67708907_901020666948593_6980208638084257089_n_990x_b7a9dd6a-6429-4c75-a26a-5c7a43504f5c_990x.jpg?v=1642635355" />
                    </Item>
                    <Item>
                        <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/Helix-multicolor_1100x_b39ddcef-cbba-43dc-9899-b21201b0d7a9_550x.jpg?v=1642635398" />
                    </Item>
                </FlexRowReverse>
                <FlexRow>
                    <Item>
                        <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/fence_990x_0b9bb165-c606-4ade-916d-11d2ad41ab46_550x.jpg?v=1642635457" />
                    </Item>
                    <Item>
                        <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/17265992_273568689752120_565474247435091968_n_990x_2d589feb-4427-4ba3-84ed-8091a3501cd1_550x.jpg?v=1642635489" />
                    </Item>
                </FlexRow>
                <FlexRowReverse>
                    <Item>
                        <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/23667958_1995292917378769_1214838960031793152_n_720x_50555b44-b16a-485f-a92f-b9beb0dd9971_550x.jpg?v=1642635622" />
                    </Item>
                    <Item>
                        <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/sera-tote-new-de-ban2_1100x_6a3da929-e585-4607-b4a3-4af6e3e1a68b_550x.jpg?v=1642635659" />
                    </Item>
                </FlexRowReverse>
                <FlexRow>
                    <Item>
                        <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/pink-cropped_1500x_262de62e-3c12-4e92-a5b6-8035d622e2b2_550x.jpg?v=1642635695" />
                    </Item>
                    <Item>
                        <Image src="https://cdn.shopify.com/s/files/1/0551/9242/0441/files/59621535_133816347799668_5448715094877713107_n_990x_32ac2a95-335f-44ef-bc38-70003a892ad6_550x.jpg?v=1642635749" />
                    </Item>
                </FlexRow>
            </Wrapper>
        </Container >
    );
};

export default LookbookComponent;
