import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StartButton = styled.button`
  margin: 0.5rem;
  margin-top: 2em;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  color: white;
  font-weight: 900;
  border: none;
  transition: 0.5s;
  background: none;
  cursor: pointer;

  border-bottom: 3px solid mix(black, #ffa100, 14%);
  box-shadow: 0 4px 10px rgba(6,7, 64, 0.5);
  text-shadow: 0 1px 3px rgba(0,0,0,.3);

  background-image: linear-gradient(to right, rgba(1, 178, 99,1) 7%, rgba(1, 178, 99,1) 17%, rgba(0, 249, 137,1) 100%);
  
  :hover {
    background-image: linear-gradient(to right, rgba(0,217,119,0.80) 7%, rgba(0,217,119,0.80) 17%, rgba(0, 249, 137,0.80) 100%);
  }

  :active{
    border-bottom: none;
    box-shadow: none;
  }
  
  :focus{
    outline: none;
  }
`;

export const Input = styled.input`
  color: #016337;
  font-size: 1em;
  border: 2px solid #016337;
  border-radius: 10px;
  size: 1em;
  margin: 1em;
  padding: 1em;
  outline: none;
`
export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: #fff;
  margin-left: 1em;
  font-weight: bold;
  font-size: 20px;
`