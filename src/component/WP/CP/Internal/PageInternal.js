import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import { SITE_ROOT, FORM_GET, FORM_POST, pageURL, singleURL, internalStyleURL, internalWoodURL  } from '../../../Inc/Inc'
import SingleInternal  from './SingleInternalV2'
import MenuIcon from '../../../../assets/menu.svg'
import  HeartIcon from '../../../../assets/heart.svg'
import styled from 'styled-components'
import CircleFilter from './FilterCircles'

let single_data
let color = '#ff0'



class Pages extends Component {
    constructor() {
        super();
        this.state = {
            doors: [],
            styles: [],
            woods: [],
            slug_style: 150,
            slug_wood: 151,
            show: false,
            color: '#ff0',
            single: true,
            loading: false


        }
    }
    xx = () =>  {
        single_data =  <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>

    }

    componentDidMount() {
       /* this.setState({
            loading: true
        })*/

        /*const allStyles = fetch(internalStyleURL)
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

            })*/


    }


    setS = (s) => {

        this.setState({
            slug_style: s,


        })

        single_data =  <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>
    }
    setW = (w) => {
        color = '#b2a074'
        this.setState({
            slug_wood: w,
            color: '#b2a074'
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


        const Circle = styled('div')({
           display: 'none',

            background:'green !important',

        })


        if(this.state.loading){
            single_data = <Spinner/>
        }else{
            doors =  pageURL.map( (page, key)=> {

                return (
                    <div>

                        <Link to={'/internal-styles/'+page.slug}> <h2>{page.title.rendered}</h2></Link>
                    </div>
                )
            })


            //s = this.state.styles
           // s = internalStyleURL
            // w = this.state.woods
            w = internalWoodURL

            /*styles =  Object.keys( s ).map( (style)=> {
               // console.log(s[style].slug)
                s_a =  s_a.concat(s[style].acf.rest_api)

                return (


                        <Circle  key={s[style].id}  className="menu-item filter style-item" id={s[style].id}  onClick={()=> this.setS(s[style].id )}>
                            <img src={s[style].acf.rest_api ? s[style].acf.rest_api.url : s[style].acf.overview_page_image.url}alt="" width="40"/>
                            <span className="span">{s[style].name}</span>
                        </Circle>


                )
            })
*/

           /* woods =  Object.keys( w ).map( (wood, key)=> {
                w_a = w_a.concat(w[wood].id)
                //console.log(w[wood].id)
                return (
                <Circle key={w[wood].id}  className="menu-item wood-item filter-wood" onClick={()=> this.setW(w[wood].id)}>
                    <img src={w[wood].acf.overview_page_image.sizes.thumbnail } alt="" width="40"/>
                    <span className="span">{w[wood].name}</span>
                </Circle>



                )
            })*/
        }



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
                <div className="menu-icon">
                    <img src={MenuIcon} alt="" width="40"/>
                </div>
                <div className="heart-icon">
                    <img src={HeartIcon} alt="" width="40"/>
                </div>
                <div className="row">


                    <h1 className="text-center">Internal Doors</h1><br/>
                    {/*<div className="small-2 medium-2 large-2 column">
                        <nav className="menu">
                            <input type="checkbox"  className="menu-open" name="menu-open-2" id="menu-open-2"/>
                            <label className="menu-open-button menu-style-button" for="menu-open-2">
                                Styles
                            </label>
                            {styles}


                        </nav>

                    </div>*/}
                    <CircleFilter ww={this.state.slug_wood} ss={this.state.slug_style}/>
                   {/* <div className={className}>
                        <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>
                    </div>*/}
                   {/* <div className="small-2 medium-2 large-2 column">
                        <div className="menu">
                            <input type="checkbox"  className="menu-open" name="menu-open" id="menu-open"/>
                            <label className="menu-open-button menu-wood-button" for="menu-open">
                                Woods
                            </label>
                            {woods}


                        </div>

                    </div>*/}
                </div>


            </div>

        )
    }
}
export default Pages;