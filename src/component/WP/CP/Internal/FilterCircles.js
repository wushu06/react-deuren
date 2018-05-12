import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import { SITE_ROOT, FORM_GET, FORM_POST, pageURL, singleURL, internalStyleURL, internalWoodURL  } from '../../../Inc/Inc'
import SingleInternal  from './SingleInternalV2'
import  HeartIcon from '../../../../assets/heart.svg'
import $ from 'jquery'


let doors
let styles
let woods
let s
let w
let sel = ''
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
            id: {}



        }
    }
    setS = (s ) => {
        this.setState({
            slug_style: s,

        })

        single_data =  <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>
    }

    setW = (w) => {


        this.setState({
            slug_wood: w,
        })


        return single_data =  <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style}/>


    }
    saveResult =()=> {
       alert('your selection has been saved')
        let save = []
        save.push(this.state.slug_wood)
        save.push(this.state.slug_style)

        localStorage.setItem('state', JSON.stringify(save));
    }

    componentWillReceiveProps(nextProp)  {
        this.setState({


        })
    }
    componentDidUpdate (prevProps, prevState) {


    }

    componentWillMount () {
        let d =   JSON.parse(localStorage.getItem('state'))
        if(d){
            console.log(d[0])
            this.setState({
                slug_wood: d[0],
                slug_style: d[1],
            })

        }
    }
    render () {
        let styles =  pageURL.map( (page, key)=> {

               // console.log(page )
            if(page.internal_doors_wood[0] ===  this.state.slug_wood) {
                let sel=''
                if(this.state.slug_style === page.internal_doors_style[0]){
                    sel = ' #b2a074'
                }

                return (

                        <div  key={page.id}  className="menu-item filter style-item" id={page.id}  onClick={()=> this.setS(page.internal_doors_style[0])}>
                            <img style={{background: sel}} src={page.acf.styles_image.url} alt=""/>
                            <span className="span">{page.acf.style_title}</span>
                        </div>

                )
            }
        })


        let woods =  pageURL.map( (wood, key)=> {

           // console.log( wood )
            if(wood.internal_doors_style[0] ===  this.state.slug_style) {

                let sel=''
                if(this.state.slug_wood === wood.internal_doors_wood[0]){
                    sel = '2px solid #b2a074'
                }
                return (

                    <div  key={wood.id}  className="menu-item wood-item filter-wood" id={wood.id}  onClick={()=> this.setW(wood.internal_doors_wood[0])}>
                        <img  style={{border: sel}} src={wood.acf.wood_image.url} alt="" width="40"/>
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

                        <SingleInternal wood={this.state.slug_wood} style={ this.state.slug_style} h={this.props.history.history}/>
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
                <div className="heart-icon" onClick={this.saveResult}>
                    <img src={HeartIcon} alt="" width="40"/>
                </div>
            </div>
        )
    }

}

export default FilterCircle