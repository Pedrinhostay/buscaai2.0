import styled from "styled-components";

export const Aside = styled.aside`
  position: fixed;
  z-index: 1000;
  top: 0px;
  right: 0px;
  width: 24%;
  height: 100%;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
  background-color: #e4e4e4;
  
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  header a{
    text-decoration: none;
    color: #000;
    font-size: 1.4rem;
  }
  div{
    flex-grow: 1;
  overflow: auto;
  }
`