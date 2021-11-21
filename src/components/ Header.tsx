import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Link to="/vocablary">Vocablary</Link>
      <Link to="/tweet">Tweet</Link>
      <Link to="/tweet-list">TweetList</Link>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  height: 60px;
  background-color: grey;
`;
