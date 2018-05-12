import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import Lightbox from 'react-images';
import { SITE_ROOT, FORM_GET, FORM_POST, pageURL, singleURL, internalStyleURL, internalWoodURL  } from '../../../Inc/Inc'
import FullWidth from '../../Blocks/FullWidth'
import HeroCarousel from '../../Blocks/HeroCarousel'
import SecondCarousel from '../../Blocks/SecondCarousel'
import TwoCol from '../../Blocks/TwoCol'
import axios from 'axios'


let spinner
let single_data
let title
let image
const single = pageURL

class Single extends  React.Component {
    constructor() {
        super();
        this.state = {
            single: [],
            acf: [],
            slug:'',
            props_s: 150,
            props_w: 151,
            id:'',
            type: '',
            title: '',
            content: '',
            image: '',
            img: '',
            loading: false,
            noResult: false

        }


    }





    componentDidUpdate (prevProps, prevState) {
        console.log('prev= '+prevState.title)
        console.log('cur '+title)
        if(prevState.title !== title){

            this.props.h.push({

                search: '?'+title.replace(/\s/g, '-')
            });

        }

    }


    componentDidMount () {
        this.setState({
            title: title
        })
        this.props.h.push({

            search: '?'+title.replace(/\s/g, '-')
        });

    }



    componentWillReceiveProps(nextProps)  {
        this.setState({
            title: title
        })
        if(this.state.title === title){

        }


    }
    // not in use
    importAll(r) {
        return r.keys().map(r);
    }

    render() {


        let getStyle = [this.props.style];
        let getWood  = [this.props.wood];
       /* let images = []
            images = this.importAll(require.('../../../../D_Internal/',  /\.(png|jpe?g|svg)$/));*/


        single_data = Object.keys( single ).map( igKey => {

            if(  JSON.stringify(getStyle) === JSON.stringify(single[igKey].internal_doors_style) && JSON.stringify(getWood) === JSON.stringify(single[igKey].internal_doors_wood) ){

                    image = single[igKey].acf.background.filename,
                    title = single[igKey].title.rendered
                let graphImage
                let result
                try {
                    // a path we KNOW is totally bogus and not a module
                    graphImage = require('../../../../assets/images/' + image)
                   // console.log(graphImage)
                    result = <div>
                        <img className="img-responsive result-img" src={graphImage} alt=""/>
                            <h4>{title} </h4>
                        </div>

                }
                catch (e) {
                    console.log('oh no big error')
                   // console.log(e)
                   result =    <h4>No match </h4>
                }
                if(!result){
                        console.log('em')
                }
                return (
                    <div>
                        {result}
                    </div>


                )



            }


        })

        return (
            <div>
                {single_data}
            </div>

        )


    }
}
export default Single;