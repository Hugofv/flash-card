import styled from 'styled-components';

export const StartButton = styled.button`
  margin: 0.5rem;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  color: white;
  font-weight: 900;
  border: none;
  transition: 0.5s;
  background: none;

  border-bottom: 3px solid mix(black, #ffa100, 14%);
  box-shadow: 0 4px 10px rgba(6,7, 64, 0.5);
  text-shadow: 0 1px 3px rgba(0,0,0,.3);

  background-image: linear-gradient(to right, rgba(254,182,69,1) 7%, rgba(254,182,69,1) 17%, rgba(241,231,103,1) 100%);
  
  :hover {
    background-image: linear-gradient(to right, rgba(254,182,69,0.80) 7%, rgba(254,182,69,0.80) 17%, rgba(241,231,103,0.80) 100%);
  }

  :active{
    border-bottom: none;
    box-shadow: none;
  }
  
  :focus{
    outline: none;
  }
`;
