import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import { SITE_ROOT, FORM_GET, FORM_POST, pageURL, singleURL, internalStyleURL, internalWoodURL  } from '../../../Inc/Inc'
import SingleInternal  from './SingleInternalV2'


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
let single_data
class FilterCircle extends Component {

    constructor() {
        super();
        this.state = {
            doors: [],
            styles: [],
            woods: [],
            slug_style: 150,
            slug_wood: 151,



        }
    }
    setS = (s ) => {
        console.log(s)
        this.setState({
            slug_style: s,


        })

        single_data =  <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>
    }

    setW = (w) => {
        console.log(this.state.slug_style+'='+this.state.slug_wood)
        this.setState({
            slug_wood: w,

        })

        return single_data =  <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>


    }

    componentWillReceiveProps(nextProp)  {
        this.setState({


        })
    }
    componentDidUpdate (prevProps, prevState) {


    }

    render () {

        let styles =  pageURL.map( (page, key)=> {

               // console.log(page )
            if(page.internal_doors_wood[0] ===  this.state.slug_wood) {


                return (

                        <div  key={page.id}  className="menu-item filter style-item" id={page.id}  onClick={()=> this.setS(page.internal_doors_style[0])}>
                            <img src={page.acf.styles_image.url} alt=""/>
                            <span className="span">{page.acf.style_title}</span>
                        </div>

                )
            }
        })

        let woods =  pageURL.map( (wood, key)=> {

           // console.log( wood )
            if(wood.internal_doors_style[0] ===  this.state.slug_style) {
                 

                return (

                    <div  key={wood.id}  className="menu-item wood-item filter-wood" id={wood.id}  onClick={()=> this.setW(wood.internal_doors_wood[0])}>
                        <img src={wood.acf.wood_image.url} alt="" width="40"/>
                        <span className="span">{wood.acf.woods_title}</span>
                    </div>

                )
            }
        })



        let className
        if(this.state.loading){
            className = "small-12 medium-12 large-12 column text-center"
        }else{
            className = "small-8 medium-8 large-8 column text-center"
        }


        return (
            <div>
                <div className="small-2 medium-2 large-2 column">
                    <nav className="menu">
                        <input type="checkbox"  className="menu-open" name="menu-open-2" id="menu-open-2"/>
                        <label className="menu-open-button menu-style-button" for="menu-open-2">
                            Styles
                        </label>
                        {styles}


                    </nav>

                </div>
                <div className={className}>
                        <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>
                </div>
                <div className="small-2 medium-2 large-2 column">
                    <div className="menu">
                        <input type="checkbox"  className="menu-open" name="menu-open" id="menu-open"/>
                        <label className="menu-open-button menu-wood-button" for="menu-open">
                            Woods
                        </label>
                        {woods}


                    </div>

                </div>
            </div>
        )
    }

}

export default FilterCircle