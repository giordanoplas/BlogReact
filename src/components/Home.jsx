import React, { Component } from "react";

import Slider from './Slider';
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Home extends Component {

    render() {
        var buttonString = "Ir al blog";

        return (
            <div id="home">
                <Slider
                    title="Bienvenido al curso de React"
                    btn={buttonString}
                    size="slider-big"
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Últimos artículos</h1>
                        <Articles
                            home="true"
                        />
                    </div>

                    <Sidebar />
                </div>
            </div>
        );
    }

}

export default Home;