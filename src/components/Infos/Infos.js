import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #e3e3e3;
  padding: 2rem;
`
export const Content = styled.div`
  max-width: 1330px;
  display:flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
`
export const Info = styled.div`
  line-height: 1.5;
  display: flex;
  gap: 0.6rem;
  color: #393e46;
  font-family: 'Poppins', sans-serif;

  span{
    font-size:1.7rem;
  }
  h2{
    font-size: 1.22rem;
    font-weight: 500;
  }
  p{
    font-weight: 300;
    font-size: 0.8rem
  }
`