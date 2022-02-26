import React, { Component } from "react";
//import axios from 'axios';
import Global from "../Global";

import Slider from './Slider';
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Blog extends Component {

    url = Global.url;

    render() {
        return (
            <div id="home">
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/* Listado de artículos que vendrán del API node */}
                        <Articles />
                    </div>

                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>
        );
    }

}

export default Blog;