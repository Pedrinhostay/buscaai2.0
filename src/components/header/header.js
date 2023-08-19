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
export const Form = styled.form`
  width: 400px;
  height: 50px;
  display: flex;
  align-items: center; 
`
export const input = styled.input`
  width: 87%;
  height: 100%;
  padding: 3px;
  border: none;
  outline: none;
  border-radius: 6px 0px 0px 6px;
`
export const button = styled.button`
  width: 13%;
  border-radius: 0px 6px 6px 0px;
  height: 100%;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  background-color: #111;
  transition: 0.2s all linear;
  &:hover {
    background-color: #333;
  }
  
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