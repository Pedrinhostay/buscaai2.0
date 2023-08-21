import styled from "styled-components";

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