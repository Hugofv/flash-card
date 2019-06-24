import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Card = styled.div`
  display: inline-block;
  margin: 10px;
  position: relative;
  background: #fff;
  border-radius: 3px;
  border: 1px #ccc solid;
  width: 80px;
  height: 120px;
  cursor: pointer;
  color: ${props => (props.heart && "#900") || (props.diomont && "#333")};

  :before,
  :after {
    display: block;
    padding: 5px;
    position: absolute;
  }

  :before {
    content: ${props =>
      (props.open && (props.heart && "'♥'")) || (props.diomont && "'♦'")};
    top: 0px;
    left: 0px;
  }

  :after {
    content: ${props =>
      (props.open && (props.heart && "'♥'")) || (props.diomont && "'♦'")};
    bottom: 0px;
    right: 0px;
    transform: rotate(-180deg);
  }

  p {
    margin: 0px;
    padding: 0px;
    color: ${props =>
      (props.open && (props.heart && "#ad3333")) || (props.diomont && "#333")};
    font: bold 40px "Plaster", sans-serif;
    text-align: center;
    line-height: 120px;
  }

  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80px;
    }
  }
`;
