import React, {Fragment} from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './config/reactotron'

import GlobalStyle from './styles/global'

import Sidebar from './components/sidebar'
import Player from './components/player'
import Header from './components/header'
import { Wrapper, Container, Content } from './styles/components'
import ErrorBox from './components/errorBox'

import Routes from './routes'
import store from './store'

const App = () => (

    <Fragment>
        <Provider store={store}/>
        <BrowserRouter>
            <GlobalStyle />
            <Wrapper>
                <Container>
                    <Sidebar />
                    <Content>
                        <ErrorBox />
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
