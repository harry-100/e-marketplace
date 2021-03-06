import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #d85174;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>THE GARAGE.</Logo>
        <Desc>
          This project is made by the students of University of toronto using
          MERN stack.Feel free to contact the developers for any kind of
          queries.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <a href="https://www.facebook.com/">
              <Facebook />
            </a>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <a href="https://www.instagram.com/">
              <Instagram />
            </a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <a href="https://mobile.twitter.com/i/flow/login">
              <Twitter />
            </a>
          </SocialIcon>
          <SocialIcon color="E60023">
            <a href="https://www.pinterest.ca/login/">
              <Pinterest />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title id="About">Useful Links</Title>
        <List>
          <ListItem>
            <a href="https://github.com/UofTL">ELENORE</a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/harry-100">HARRY</a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/jasongrossman">JASON</a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/sumantpaldm">SUMANT</a>
          </ListItem>
          <ListItem>
            <a href="https://github.com/mmifs">MICHAEL</a>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> UNIVERSITY OF TORONTO
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          virtualgarage33333@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
