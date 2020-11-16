import styled from 'styled-components';
import { FiArrowDown, FiBookmark, FiBookOpen, FiArrowRight, FiFolder } from 'react-icons/fi'

export const Container = styled.div`
  width: 85%;
  height: auto;
  display: flex;
  align-self: center;
  flex-direction: column;
  background-color: var(--white);
  margin-top: 2rem;
  border-radius: 8px;
  padding: 2rem;

  > hr {
    height: 1px;
    width: 100%;
  }
`;

export const ContainerContentBrowser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const ContainerMarkDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 35%;
  padding: 1rem;
  margin: 0 0 0 -20px;
  border-radius: 8px;
  transition: all 200ms;

  > h2 {
      color: var(--light-blue);
      font-size: 17px;
      cursor: pointer;
      transition: all 200ms;

      &:hover{
        color: var(--blue);
      }
  }
`;

export const IconBookMark = styled(FiBookmark)`
  width: 1.6rem;
  height: 1.6rem;
  color: #494c4e;
  fill: #494c4e;
  transition: all 200ms;

  &:hover {
    background-color: #e3e9f1;
    border-radius: 20%;
  }
`;

export const IconBookOpen = styled(FiBookOpen)`
  width: 1.6rem;
  height: 1.6rem;
  color: #494c4e;
  transition: all 200ms;

  &:hover {
    background-color: #e3e9f1;
    border-radius: 20%;
  }
`;

export const ContainerFolders = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px solid #000;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border-radius: 5px;
  transition: all 200ms;

  &:hover {
      background-color: #e8f8ff;
  }
`;

export const ContainerNames = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  height: 3rem;
  padding: 1rem;
  border-radius: 5px;
  transition: all 200ms;

  > h2 {
      color: var(--light-blue);
      font-size: 17px;
  }
`;

export const IconFolder = styled(FiFolder)`
  width: 1.6rem;
  height: 1.6rem;
  color: #494c4e;
  transition: all 200ms;

  &:hover {
    background-color: #e3e9f1;
    border-radius: 20%;
  }
`;

export const IconArrowRight = styled(FiArrowRight)`
  width: 1rem;
  height: 1rem;
  color: #494c4e;
  transition: all 200ms;

  &:hover {
    background-color: #e3e9f1;
    border-radius: 20%;
  }
`;



