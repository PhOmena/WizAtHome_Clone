import React from 'react';

import { Container, ContainerLogo, ContainerClass, 
    IconBook, ContainerIcons, IconMail, IconChat, IconBell, 
    ContainerProfile, IconSettings 

} from './styles';


import LogoImg from '../../../src/assets/Logo-wizard.png'
import ProfileImg from '../../../src/assets/Profile.jpg'

function Navbar() {
  return (
      <Container>
           <ContainerLogo>
            <img src={LogoImg} alt="Logo" />
         </ContainerLogo>

         <ContainerClass>
             <h1>Turma 45 - Manhã</h1>
             <IconBook/>
         </ContainerClass>

         <ContainerIcons>
             <IconMail />
             <IconChat />
             <IconBell />
         </ContainerIcons>

         <ContainerProfile>
             <img src={ProfileImg} alt="" />
             <h1>Phelipe Omena</h1>
             <IconSettings />
         </ContainerProfile>
      </Container>
  );
}

export default Navbar;