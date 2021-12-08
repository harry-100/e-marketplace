import React from "react";
import styled from "styled-components";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Clothing</Title>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
