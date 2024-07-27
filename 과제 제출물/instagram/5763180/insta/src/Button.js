import styled from "styled-components";

function Button({ title, onclick }) {
  return (
    <ButtonContainer onClick={onclick}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  width: fit-content;
  height: 30px;
  background-color: ${props => props.theme.background};
  cursor: pointer;
`;

const ButtonText = styled.span`
  color: ${(props) => props.theme.text};
`;

export default Button;