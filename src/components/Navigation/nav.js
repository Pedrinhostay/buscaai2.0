import styled from "styled-components";

export const Container = styled.nav`
  background-color:#fff;
  color: #111;
  width: 100%;

  div{
    display: flex;
    justify-content: space-between;
    max-width: 1330px;
    height: 45px;
    margin: 0 auto;
    align-items: center;
  }
  ul{
    display: flex;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    width: 100%;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  a{
    text-decoration: none;
    color: #000;
    font-size: 18px;
    position: relative;
  }
  a::after{
    content: "";
    position: absolute;
    background-color: #385170;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -1px;
    transition: 0.3s all;
}
  a:hover::after{
    width: 100%;
}
`