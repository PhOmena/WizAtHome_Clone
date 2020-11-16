import React from 'react';

import { Container, ContainerContentBrowser, IconArrowDown, 
    ContainerMarkDown, IconBookMark, IconBookOpen,
    ContainerFolders, ContainerNames, IconArrowRight, IconFolder
} from './styles';

function ContentBrowser() {
  return (
      <Container>
          <ContainerContentBrowser>
                <h1>Navegador de Conteúdo</h1>
                <IconArrowDown />
          </ContainerContentBrowser>

          <ContainerMarkDown>
                <IconBookMark />
                <h2>Marcadores</h2>
                <IconBookOpen />
                <h2>Recém-visitado</h2>
          </ContainerMarkDown>

          <ContainerFolders>
            <ContainerNames>
                <IconFolder />
                <h2>Áudios</h2>
            </ContainerNames>

                <IconArrowRight />
          </ContainerFolders>
          <hr />

          <ContainerFolders>
            <ContainerNames>
                <IconFolder />
                <h2>Complete Áudios</h2>
            </ContainerNames>

                <IconArrowRight />
          </ContainerFolders>
          <hr />

          
          <ContainerFolders>
            <ContainerNames>
                <IconFolder />
                <h2>Student's Book</h2>
            </ContainerNames>

                <IconArrowRight />
          </ContainerFolders>
          <hr />

            
          <ContainerFolders>
            <ContainerNames>
                <IconFolder />
                <h2>Student's Book</h2>
            </ContainerNames>

                <IconArrowRight />
          </ContainerFolders>
          <hr />

          <ContainerFolders>
            <ContainerNames>
                <IconFolder />
                <h2>Virtual Classroom Beta</h2>
            </ContainerNames>

                <IconArrowRight />
          </ContainerFolders>
          <hr />

      </Container>
  );
}

export default ContentBrowser;