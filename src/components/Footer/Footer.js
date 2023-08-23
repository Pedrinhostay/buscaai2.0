import styled from "styled-components";

export const Container = styled.footer`
  background-color: #e4e4e4;
  width: 100%;
  padding: 2rem;
  `
  export const Content = styled.section`
  max-width: 1330px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  `
  export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  
  h2{
    font-size: 1.5rem;
    font-weight: 400;
  }
  ul{
    list-style: none;
    margin-left: 6px;
  }
  li{
    margin-top:7px;
    font-size: 0.9rem;
  }
  div{
    display: flex;
    gap: 1rem;
  }
  div span{
    font-size:2rem;
    color: #111;
  }
  `