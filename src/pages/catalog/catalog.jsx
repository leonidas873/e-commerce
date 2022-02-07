import styled from "styled-components";
import MainLayout from "../../styles/MainLayout";
import { useParams } from "react-router-dom";
import CatalogFilters from "../../components/catalog/CatalogFilters";
import {useSelector} from 'react-redux';

export const Catalog = () => {
  let { subcategory } = useParams();
  const activeCategory = useSelector(state=>state.catalog.activeCategory);
  console.log(activeCategory);

  return (
    <CatalogStyled>
      <MainLayout>
      <h1>{activeCategory}</h1>
<CatalogFilters/>
      </MainLayout>
    </CatalogStyled>
  );
};

const CatalogStyled = styled.div`
  background-color: #42b67e;
`;
