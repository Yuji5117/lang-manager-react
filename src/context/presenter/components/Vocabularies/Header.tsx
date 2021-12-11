import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <HeaderContainer>
        <HomeButton>
          <Link
            to="/vocabulary"
            style={{ textDecoration: "none", color: "white" }}
          >
            Lang Manager
          </Link>
        </HomeButton>
        <MenuList>
          <li>
            <Link
              to="/vocabulary"
              style={{ textDecoration: "none", color: "white" }}
            >
              Vocabulary
            </Link>
          </li>
          <li>
            <Link
              to="/tweet"
              style={{ textDecoration: "none", color: "white" }}
            >
              Tweet
            </Link>
          </li>
          <li>
            <Link
              to="/tweet-list"
              style={{ textDecoration: "none", color: "white" }}
            >
              Tweet List
            </Link>
          </li>
        </MenuList>
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  height: 60px;
  background-color: #33cc99;
  opacity: 0.8;
  display: flex;
`;

const HeaderContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeButton = styled.div`
  display: flex;
  font-size: 28px;
  list-style-type: none;
`;

const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
  font-size: 20px;
  li {
    padding-left: 20px;
  }
`;
