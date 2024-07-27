import styled from 'styled-components';

export const BottomNavContainer = styled.div`
  background-color: #ffffff;
  color: #000000;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ddd;
  //@meida (min width:766px);
`;

export const NavItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #888;
  }
    //@meida (min width:766px);
`;