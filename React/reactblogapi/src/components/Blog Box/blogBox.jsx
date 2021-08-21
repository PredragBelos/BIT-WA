import React, { Component } from 'react';
import { Blog } from '../Blog/blog';
import './blogBox.css';
import { createBlogs } from '../../services/createBlogs';

/* Class that present class components of BlogBox*/
export class BlogBox extends Component {
    constructor(props){
        super(props)

        this.state = {
            blogData: [],
        }
    }

    componentDidMount() {
        createBlogs().then(blogs => {
            this.setState({blogData: blogs});
        });
    }

    render() {
        return(
            <section className="blogBox">
                {
                    this.state.blogData.map(item => {
                        return(
                            <Blog key={item.id} title={item.title} text={item.text}/>   
                        )
                    })
                }
                
            </section>
        )
    }
}