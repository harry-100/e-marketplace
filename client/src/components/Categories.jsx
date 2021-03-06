import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 160px;
  padding: 20px;
  justify-content: space-between;
  background-color: #f5b5c5;

  @media (max-width: 1024px) {
    padding: "0px", flexDirection: "column"
  }

  ${mobile({ padding: "0px", flexDirection: "column" })}
    @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Categories = () => {
  return (
    <Container id="Collections">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
