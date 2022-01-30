import styled from 'styled-components';
import Header from '../../components/header/Header';

export const Home = () => {
    return <HomeStyled>  
        <Header/>
        home
    </HomeStyled>
}

const HomeStyled = styled.div`
    background-color:red;
`