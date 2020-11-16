import styled, { css } from 'styled-components';
import {FiMail, FiBell, FiBook, FiMessageSquare, FiSettings} from 'react-icons/fi'

export const Container = styled.header`
  width: 100%;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  padding: 1.5rem;
`;


export const ContainerLogo = styled.image`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: var(--white);
    

    > img {
        width: 11rem;
        transition: all 200ms;

        &:hover{
            cursor: pointer;
            width: 10rem;
        }
    }
`;

export const ContainerClass = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    height: 100%;
    width: 100%;
    margin-right: 50px;
    background-color: var(--white);

    > h1 {
        font-size: 25px;
        color: var(--gray);
        transition: all 200ms;

        &:hover{
            color: var(--light-blue);
              
        }
    }
`;

export const ContainerIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    height: 100%;
    width: 100%;
    margin-left: 50px;
    background-color: var(--white);

`;

export const ContainerProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background-color: var(--white);

    img {
        width: 3rem;
        border-radius: 10px;
        transition: all 200ms;

        &:hover{
            cursor: pointer;
            width: 2.5rem;
        }
    }

    h1 {
        font-size: 15px;
        color: var(--gray);
        transition: all 200ms;

        &:hover{
            color: var(--light-blue);
        }
    }
`;

const iconCSS = css`
    color: var(--gray);
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all 200ms;

    &:hover{
        color: var(--light-blue);
        padding-bottom: 2px;
    }
`;

export const IconBook = styled(FiBook)`
    ${iconCSS}
`;

export const IconMail = styled(FiMail)`
    ${iconCSS}
`;

export const IconChat = styled(FiMessageSquare)`
    ${iconCSS}
`;

export const IconBell = styled(FiBell)`
    ${iconCSS}
`;

export const IconSettings = styled(FiSettings)`
    ${iconCSS}
`;

