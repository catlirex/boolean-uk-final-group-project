import React from "react";
import ResultPageHeader from "../Component/SearchResult/ResultPageHeader";
import styled from "styled-components";
import DepartSearchResult from "../Component/SearchResult/DepartSearchResult";

const StyledMain = styled.main`
  display: grid;
  gap: 20px;
  margin: 20px;
`;

export default function SearchResultPage() {
  return (
    <StyledMain>
      <ResultPageHeader />
      <DepartSearchResult />
    </StyledMain>
  );
}
