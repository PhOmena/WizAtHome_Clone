import styled from 'styled-components';

export const Container = styled.div`
  width: 85%;
  height: 13rem;
  display: flex;
  align-self: center;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient( 180deg, var(--white) 0%, var(--light-gray) 100%);

  > h1 {
    font-size: 40px;
    color: var(--white);
    transition: all 200ms;
    margin: 160px 750px 30px 0;

    &:hover{
      color: var(--light-blue);
              
    }
  }
`;

