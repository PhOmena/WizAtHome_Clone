import styled from 'styled-components';
import { FiArrowDown } from 'react-icons/fi'

export const Container = styled.div`
  width: 85%;
  height: 5rem;
  /* display: flex; */
  align-self: center;
  background-color: var(--white);
  margin-top: 2rem;
  border-radius: 8px;
`;

export const ContainerWizMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 8px;
  transition: all 200ms;
  
  > h1 {
    font-size: 17px;
    color: var(--gray);
  }
`;


export const IconArrowDown = styled(FiArrowDown)`
  width: 1.2rem;
  height: 1.2rem;
  color: #494c4e;
  transition: all 200ms;

  &:hover {
    background-color: #e3e9f1;
    border-radius: 20%;
  }
`;
