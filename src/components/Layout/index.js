import React from 'react';

import { Container } from './styles';

import Navbar from '../Navbar';
import Header from '../Header';
import Cover from '../Cover';
import WizMember from '../WizMember';
import ContentBrowser from '../ContentBrowser';
import CatchUp from '../CatchUp';

function Home() {
  return (
    <Container>
        <Navbar />
        <Header />
        <Cover />
        <WizMember />
        <ContentBrowser />
        <CatchUp />
    </Container>
  );
}

export default Home;