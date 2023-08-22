import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color:#ccc;
`
export const Content = styled.div`
  max-width: 1330px;
  display:flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  margin: 0 auto;
`
export const Info = styled.div`
  line-height: 1.5;
  display: flex;
  gap: 0.6rem;
  font-family: 'Poppins', sans-serif;

  h2{
    font-size: 1.22rem;
    font-weight: 600;
    color: #000;
  }
  p{
    font-size: 0.8rem
  }
`