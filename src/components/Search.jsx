import React, { Component } from "react";
//import axios from 'axios';
import Global from "../Global";

import Slider from './Slider';
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Search extends Component {

    url = Global.url;

    render() {
        var searched = this.props.search;

        return (
            <div id="home">
                <Slider
                    title={"Búsqueda: " + searched}
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/* Listado de artículos que vendrán del API node */}
                        <Articles
                            search={searched}
                        />                        
                    </div>

                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>
        );
    }

}

export default Search;