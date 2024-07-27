import styled from 'styled-components';

export const Head = styled.div`
  background-color: #ffffff;
  color: #000000;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 0 20px; 
  @mida (min width:766px);
`;

export const Logo = styled.h1`
  font-size: 24px;
  @mida (min width:766px);
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  //@meida (min width:766px);
`;

export const Icon = styled.div`
  font-size: 20px;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    color: #888;
  }
    //@meida (min width:766px);
`;