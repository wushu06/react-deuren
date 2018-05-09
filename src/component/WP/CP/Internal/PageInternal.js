import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import { SITE_ROOT, FORM_GET, FORM_POST, pageURL, singleURL, internalStyleURL, internalWoodURL  } from '../../../Inc/Inc'
import SingleInternal  from './SingleInternal'

let single_data
class Pages extends Component {
    constructor() {
        super();
        this.state = {
            doors: [],
            styles: [],
            woods: [],
            slug_style: 'gio',
            slug_wood: 'rosewood',
            show: false,
            single: true,
            loading: false


        }
    }
    xx = () =>  {
        single_data =  <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>

    }

    componentDidMount() {
        this.setState({
            loading: true
        })

      //  let pageURL = SITE_ROOT+"/wp-json/wp/v2/internal-doors?filter[styles]=gio";
       const allDoors = fetch(pageURL)
            .then(res => res.json())
            .then(res => {
                //  let img = res._embedded['wp:featuredmedia'] ? res._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';
                this.setState({
                    doors: res,
                    loading: false

                })

                //console.log(res)

            });
        const allStyles = fetch(internalStyleURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    styles: res,
                    loading: false
                })

              //  console.log(res)

            })
        const allWoods = fetch(internalWoodURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    woods: res,
                    loading: false
                })

               // console.log(res)

            })


    }


    setS = (s) => {

        this.setState({
            slug_style: s,
        })
        single_data =  <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>
    }
    setW = (w) => {

        this.setState({
            slug_wood: w,
        })
       // console.log(this.state.slug_wood)
        //console.log(this.state.slug_style)
        return single_data =  <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>
        //console.log(single_data)
    }


    render() {

        let doors
        let styles
        let woods
        let s
        let w

        let s_slug
        let w_slug
        let w_a = []
        let s_a = []
        let l

        if(this.state.loading){
            single_data = <Spinner/>
        }else{
            doors =  this.state.doors.map( (page, key)=> {

                return (
                    <div>

                        <Link to={'/internal-styles/'+page.slug}> <h2>{page.title.rendered}</h2></Link>
                    </div>
                )
            })

             s = this.state.styles
             w = this.state.woods
            styles =  Object.keys( s ).map( (style)=> {

                s_a =  s_a.concat(s[style].slug.acf)

                return (

                    <div className="filter filter-style">
                        <button  onClick={()=> this.setS(s[style].slug)}><img src={s[style].acf.rest_api ? s[style].acf.rest_api.url : s[style].acf.overview_page_image.url} alt="" width="60"/></button>
                        <span >{s[style].name}</span>
                    </div>

                )
            })


            woods =  Object.keys( w ).map( (wood, key)=> {
                w_a = w_a.concat(w[wood].slug)
                console.log(w[wood].acf.overview_page_image)
                return (
                <div  className="menu-item" onClick={()=> this.setW(w[wood].slug)}>
                    <img src={w[wood].acf.overview_page_image.sizes.thumbnail } alt="" width="40"/>

                </div>



                )
            })
        }
        w_a.map(i => {
            //console.log(i)
        })


        if(this.state.single === true) {

            single_data =  <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>
        }

        //console.log(this.state.slug_style)
        let className
        if(this.state.loading){
             className = "small-12 medium-12 large-12 column text-center"
        }else{
            className = "small-8 medium-8 large-8 column text-center"
        }

        return (
            <div className="internal-doors">
                <div className="row">

                    <h1 className="text-center">Internal Doors</h1><br/>
                    <div className="small-2 medium-2 large-2 column">
                        {styles}
                    </div>
                    <div className={className}>
                        <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>
                    </div>
                    <div className="small-2 medium-2 large-2 column">
                        <nav className="menu">
                            <input type="checkbox"  className="menu-open" name="menu-open" id="menu-open"/>
                            <label className="menu-open-button" for="menu-open">
                                Woods
                            </label>
                            {woods}


                        </nav>

                    </div>
                </div>


            </div>

        )
    }
}
export default Pages;