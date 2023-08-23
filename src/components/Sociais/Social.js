import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #385170;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  max-width: 1330px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 0 auto;
  padding: 1rem;

  a{
    font-size: 1.7rem;
    color: #e4e4e4;
    transition: 0.3s all linear;
  }
  a:hover{
    transform: translateY(-7px);
  }
`