import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--blue);
  padding: 1.5rem;
  
`;

export const ContainerLinks = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--blue);
  padding: 1.5rem;
  margin-right: 50px;
`;

export const Title  = styled.h1`
    color: var(--white);
    font-size: 17px;
    transition: all 200ms;

    &:hover{
        color: var(--light-blue);
    }
`;