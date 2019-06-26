import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 65%;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  max-height: 40em;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transition: -webkit-transform 1s;
  -moz-transition: -moz-transform 1s;
  -o-transition: -o-transform 1s;
  transition: transform 1s;
  -webkit-transform-style: preserve-3d;
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
  width: 9em;
  height: 13em;
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
    font-size: 8em
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
`

export const Points = styled.div`
  margin-left: .4em;
  font-size: 25px;
  text-align: center;
  width: 8%;
  color: #000;
  background: #fff;
  font-weight: bold;
  box-shadow: 0px 14px 45px -2px rgba(0,0,0,0.75);
`