import React, {Fragment} from 'react';
import GlobalStyle from './styles/global'
import Sidebar from './components/sidebar'
import Player from './components/player'
import { Wrapper, Container } from './styles/components'

const App = () => (
    <Fragment>
        <GlobalStyle />
        <Wrapper>
            <Container>
                <Sidebar />
            </Container>
            <Player />
        </Wrapper>
    </Fragment>
)

export default App;
