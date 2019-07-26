import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists'

import { Container, NewPlaylist, Nav } from './styles'
import AddPlaylistIcon from '../../assets/images/add_playlist.svg'

class Sidebar extends Component {

    componentDidMount(){
        this.props.getPlaylistsRequest();

        this.props.getPlaylistsSuccess();
    }
    render(){
        return(
            <Container> 
                <div>
                    <Nav main>
                        <li>
                            <a href="">Navegar</a>
                        </li>
                        <li>
                            <a href="">Rádio</a>
                        </li>
                    </Nav>
                    <Nav>
                        <li>
                            <span>SUA BIBLIOTECA</span>
                        </li>
                        <li>
                            <a href="">Seu Daily Mix</a>
                        </li>
                        <li>
                            <a href="">Tocados Recentemente</a>
                        </li>
                        <li>
                            <a href="">Músicas</a>
                        </li>
                        <li>
                            <a href="">Albums</a>
                        </li>
                        <li>
                            <a href="">Artistas</a>
                        </li>
                        <li>
                            <a href="">Estações</a>
                        </li>
                        <li>
                            <a href="">Arquivos locais</a>
                        </li>
                        <li>
                            <a href="">Vídeos</a>
                        </li>
                        <li>
                            <a href="">Podcasts</a>
                        </li>
                    </Nav>

                    <Nav>
                        <li>
                            <span>Playlists</span>
                        </li>
                        {this.props.playlists.data.map(playlist => (
                            <li key={playlist.id}>
                                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
                            </li>
                        ))}
                    </Nav>
                    <NewPlaylist>
                        <img src={AddPlaylistIcon} alt="Adicionar playlist"/>
                        Nova playlist
                    </NewPlaylist>
                </div>     
            </Container>

        );
    }
}

const mapStateToProps = state => ({
    playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);