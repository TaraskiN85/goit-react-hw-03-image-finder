import styled from 'styled-components';

export const Form = styled.form`
  height: 50px;
  background-color: #2c588a;
  width: 100%;
  top: 0;
  box-shadow: 4px 4px 4px silver;
  display: flex;
  align-content: center;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0 5px 5px 0;
  border: #010101 1px solid;
  border-left: none;
  font-size: 0.9rem;
  padding-left: 8px;
`;

export const Container = styled.div`
  width: 300px;
  margin: auto;
  border-radius: 10px;
  display: flex;
`;

export const Button = styled.button`
  width: 28px;
  aspect-ratio: 1/1;
  border-radius: 5px 0 0 5px;
  border: #010101 1px solid;
  border-right: none;
  cursor: pointer;
  transition: all 0.4s;
  text-align: center;
  align-items: center;

  &:hover {
    background-color: silver;
  }
`;

export const Icon = styled.img`
  display: block;
  margin: auto;
  height: 16px;
`;
