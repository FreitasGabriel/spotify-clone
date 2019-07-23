import React, {Fragment} from 'react';
import {BrowserRouter} from 'react-router-dom'

import GlobalStyle from './styles/global'

import Sidebar from './components/sidebar'
import Player from './components/player'
import Header from './components/header'
import { Wrapper, Container, Content } from './styles/components'

import Routes from './routes'

const App = () => (
    
    <Fragment>
        <BrowserRouter>
            <GlobalStyle />
            <Wrapper>
                <Container>
                    <Sidebar />
                    <Content>
                        <Header />
                        <Routes />
                    </Content>
                </Container>
                <Player />
            </Wrapper>
        </BrowserRouter>
    </Fragment>
)

export default App;
