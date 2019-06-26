import styled from "styled-components";

export const Rank = styled.div`
    position: relative;
    width: 1.5rem;
    height: inherit;
    text-align: center;
    margin-right: 1rem;
    line-height: 2rem;
    padding: 0 .5rem;
    background-color: rgba(100, 100, 100, 0.5);

  ::after {
    content: '';
    position: absolute;
    right: -1rem;
    width: 0;
    height: 0;
    border-top: 2rem solid rgba(100, 100, 100, 0.5);
    border-right: 1rem solid transparent;
  }
`

export const BoxRank = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 2rem;
line-height: 2rem;
overflow: hidden;
width: 100%;
color: #fff;
`

export const Color = styled.div`
width: .5rem;
height: inherit;
-webkit-transform: skew(-27deg);
transform: skew(-27deg);
margin-left: -.6rem;
z-index: 9;
background-color: ${props => props.color};
`

export const Name = styled.div`
  position: relative;
  margin-left: .5rem;
  padding: 0 .5rem;
  font-family: sans-serif;
  text-transform: uppercase;
  width: 80%;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: .8rem;

::before {
  content: '';
  position: absolute;
  left: -1rem;
  width: 0;
  height: 0;
  border-bottom: 2rem solid rgba(0, 0, 0, 0.5);
  border-left: 1rem solid transparent;
}
`

export const Points = styled.div`
padding: 0 .5rem;
width: 20%;
font-family: sans-serif;
height: inherit;
background-color: rgba(0, 0, 0, 0.5);
text-align: right;
font-size: 16px;
border-left: 2px solid;
`