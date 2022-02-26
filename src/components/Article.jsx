import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
import Global from "../Global";
import Sidebar from "./Sidebar";
import Moment from "react-moment";
import 'moment/locale/es';
import ImageDefault from '../assets/images/default.png';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentDidMount() {
        this.getArticle();
    }

    getArticle = () => {
        var articuloId = this.props.articuloId;

        axios.get(this.url + 'article/' + articuloId)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                });
            })
            .catch(err => {
                this.setState({
                    article: false,
                    status: 'success'
                });
            });
    }

    deleteArticle = (id) => {
        swal({
            title: "Estás seguro?",
            text: "Borrarás permanentemente este artículo!",
            icon: "warning",
            buttons: ['No!!', 'Sí'],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {
                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            });
                        });
                    swal(
                        'Artículo borrado',
                        'El artículo ha sido borrado correctamente',
                        'success'
                    );
                } else {
                    swal(
                        'Tranquilo!!',
                        'No se ha borrado nada',
                        'info'
                    );
                }
            });

    }

    render() {
        if (this.state.status === 'deleted') {
            return <Navigate to={"/blog"} />
        }

        var article = this.state.article;

        return (
            <React.Fragment>
                <div className="center">
                    <section id="content">
                        {article &&
                            <article className="article-item article-detail">
                                <div className="image-wrap">
                                    {
                                        article.image !== null ? (
                                            <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                        ) : (
                                            <img src={ImageDefault} alt={article.title} />
                                        )
                                    }
                                </div>

                                <h1 className="subheader">{article.title}</h1>
                                <span className="date">
                                    <Moment locale="es" fromNow>{article.date}</Moment>
                                </span>
                                <p>
                                    {article.content}
                                </p>

                                <button className="btn btn-danger" onClick={
                                    () => {
                                        this.deleteArticle(article._id);
                                    }
                                }>
                                    Eliminar
                                </button>
                                <Link to={'/blog/editar/' + article._id} className="btn btn-warning">Editar</Link>

                                <div className="clearfix"></div>
                            </article>
                        }

                        {!article && this.state.status === 'success' &&
                            <div id="article">
                                <h2 className="subheader">El archivo no existe</h2>
                                <p>Inténtalo de nuevo más tarde</p>
                            </div>
                        }

                        {this.state.status == null &&
                            <div id="article">
                                <h2 className="subheader">Cargando......</h2>
                                <p>Espere unos segundos</p>
                            </div>
                        }
                    </section>
                </div>

                <Sidebar />
            </React.Fragment>
        )

    }

}

export default Article;