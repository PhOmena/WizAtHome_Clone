import React from 'react';

import { Container, Title, ContainerLinks } from './styles';

function Header() {
  return (
      <Container>
          <ContainerLinks>
            <Title>Conteúdo</Title>
            <Title>Chat</Title>
            <Title>Discussões</Title>
            <Title>Lista de Classe</Title>
            <Title>Calendário</Title>
            <Title>Virtual Classroom Elos</Title>
            <Title>Notas</Title>
            <Title>Questionários</Title>
          </ContainerLinks>
      </Container>
  );
}

export default Header;