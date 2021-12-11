import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      {/* <HeaderContainer> */}
        {/* <HomeButton> */}
          {/* <Link to="/vocabulary">Lang Manager</Link> */}
        {/* </HomeButton> */}
        <MenuList>
          <li>
            <Link to="/vocabulary">Vocabulary</Link>
          </li>
          <li>
            <Link to="/tweet">Tweet</Link>
          </li>
          <li>
            <Link to="/tweet-list">TweetList</Link>
          </li>
        </MenuList>
      {/* </HeaderContainer> */}
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

// const HeaderContainer = styled.div`
//   display: flex;
// `;

// const HomeButton = styled.div`
//   display: flex;
//   list-style-type: none;
// `;

const MenuList = styled.ul`
  color: white;
  display: flex;
  list-style-type: none;
`;
