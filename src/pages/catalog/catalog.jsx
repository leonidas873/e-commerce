import styled from "styled-components";
import MainLayout from "../../styles/MainLayout";
import { useParams } from "react-router-dom";
import CatalogFilters from "../../components/catalog/CatalogFilters";
import CatalogHeading from "../../components/catalog/CatalogHeading";
import CatalogProducts from "../../components/catalog/CatalogProducts";


export const Catalog = () => {

  return (
    <CatalogStyled>
      <MainLayout>
      <CatalogHeading/>
<CatalogFilters/>
<CatalogProducts/>
      </MainLayout>
    </CatalogStyled>
  );
};

const CatalogStyled = styled.div`
 
`;
