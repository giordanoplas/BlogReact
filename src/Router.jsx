import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';

/* Importar Componentes */
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Search from './components/Search';
import Article from './components/Article';
import Error from './components/Error';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component {
    render() {
        return (
            /*Esta forma es la que funciona en la versión 6*/
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/blog/articulo/:id" element={<GetArticuloId />} />
                    <Route exact path="/blog/crear" element={<CreateArticle />} />
                    <Route exact path="/blog/editar/:id" element={<GetEditArticleId />} />
                    <Route exact path="/blog/busqueda/:search" element={<GetSearch />} />
                    <Route exact path="/redirect/:search" element={<GetRedirectSearch />} />
                    <Route exact path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>            
        );
    }
}

function GetArticuloId() {
    const { id } = useParams();

    return (
        <Article 
            articuloId={id}
        />
    )
}

function GetSearch() {
    const { search } = useParams();

    return (
        <Search
            search={search}
        />
    )
}

function GetRedirectSearch() {
    const { search } = useParams();

    return <Navigate to={'/blog/busqueda/' + search} />
}

function GetEditArticleId() {
    const { id } = useParams();

    return (
        <EditArticle 
            articuloId={id}
        />
    )
}

export default Router;