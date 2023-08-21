import styled from "styled-components";

export const Container = styled.header`
  background-color: #385170;
  width: 100%;
`
export const Content = styled.div`
  max-width: 1330px;
  display: flex;
  height: 120px;
  align-items: center;
  font-family: 'Poppins',sans-serif;
  margin: 0 auto;
  padding: 1rem;
  justify-content: space-between;
`

export const Logo = styled.a`
  color: #e4e4e4;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`
export const ItemIcons = styled.a`
  color: #e4e4e4;
  font-size: 1.8rem;
  cursor: pointer;
`