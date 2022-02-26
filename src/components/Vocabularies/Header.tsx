import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <HeaderContainer></HeaderContainer>
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
