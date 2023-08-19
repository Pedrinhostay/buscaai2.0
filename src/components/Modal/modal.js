import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(0,0,0,0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
export const Content = styled.div`
  background-color: #e4e4e4;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 450px;
  height: 450px;
  border-radius: 10px;
  
  a{
    font-size: 1.4rem;
    text-decoration: none;
    color: #385170;
    position: absolute;
    right: 8px;
    top: 8px;
  }

  div{
    display: flex;
    justify-content: center; 
    width: 100%;
    font-family: "Montserrat", sans-serif;
    margin-top: 5rem;
    height: 100%;
  }
  div form{
    display: flex;
    width: 88%;
    flex-direction: column;
  }
  form h2{
    font-size: 1.7rem;
  }
  form p{
    color: #385170;
    font-size: 0.8rem;
  }
  form input{
    margin-top: 1.5rem;
    padding: 12px;
    border: none;
    border-radius: 6px;
    box-shadow: 0px 0px 3px #385170;
    outline: none;
  }
  form button{
    padding: 10px;
    background-color: #385170;
    border: none;
    margin-top: 1rem;
    color: #e4e4e4;
    box-shadow: 0px 0px 3px #000;
  }
  form div span{
    font-size: 1rem;
    text-decoration: underline;
    color: #385170;
    position: relative;
    margin-left: 3px;
    right: 0px;
    top: 0px;
  }
  
`