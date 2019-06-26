import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 65%;
  margin: 1em;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  scrollbar-width: none;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transition: -webkit-transform 1s;
  -moz-transition: -moz-transform 1s;
  -o-transition: -o-transform 1s;
  transition: transform 1s;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 50% 50%;
  -webkit-transform: ${props => !props.open && 'rotateY(180deg)'};
  -moz-transform: ${props => !props.open && 'rotateY(180deg)'};
  -o-transform: ${props => !props.open && 'rotateY(180deg)'};
  transform: ${props => !props.open && 'rotateY(180deg)'};
  border: 1px solid #ccc;
`;

export const BoxCard = styled.div`
  width: calc(${(window.innerWidth * 0.50) / 5}px - 0.5em);
  height: 4rem;

  @media (min-width: 728px) 
  {
    width: calc(${(window.innerWidth * 0.50) / 5}px - 0.6em);;
    height: 5em;
  }

  @media (min-width: 1024px) 
  {
    width: calc(${(window.innerWidth * 0.50) / 5}px - 0.6em);;
    height: 7em;
  }

  @media (min-width: 1100px) 
  {
    width: calc(${(window.innerWidth * 0.50) / 5}px - 0.6em);;
    height: 12em;
  }

  @media (min-width: 1500px) 
  {
    width: calc(${(window.innerWidth * 0.50) / 5}px - 0.6em);;
    height: 16em;
  }

  position: relative;
  -webkit-perspective: 800px;
  -moz-perspective: 800px;
  -o-perspective: 800px;
  perspective: 800px;
  margin: 0.5em;
`

export const FrontCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
  font-weight: bold;
  position: absolute;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  background: #ffffff;

  span {
    font-size: 3rem;

    @media (min-width: 900px) {
      font-size: 4rem;
    }
  }
`

export const BackCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  height: 100%;
  -webkit-transform: rotateY( 180deg );
  -moz-transform: rotateY( 180deg );
  -o-transform: rotateY( 180deg );
  transform: rotateY( 180deg );

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
`
