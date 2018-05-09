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
import Slider from 'react-slick'

let spinner
let single_data
class Single extends  React.Component {
    constructor() {
        super();
        this.state = {
            single: [],
            acf: [],
            styles:[],
            slug:'',
            id:'',
            type: '',
            title: '',
            content: '',
            image: '',
            loading: false

        }


    }


    componentWillReceiveProps(nextProps)  {
        this.setState({
            loading: true
        })

        this.props = nextProps;

        this.handleData()
    }


    componentDidUpdate (prevProps, prevState) {
        // console.log(this.state.single.slug)
        // console.log(prevState.slug)

        if (prevState === this.state.single) {

            return false;
        }else {



        }
       // this.handleData()



    }

    componentDidMount () {
        this.handleData()

    }
    handleData =() => {

        const url      = window.location.href;
        const getSlug = this.props.match.params.slug;


        let dataURL = internalWoodURL+'?slug='+getSlug;
        let allStyles = internalStyleURL;

        const woodsResult = axios.get(dataURL)
            .then(res => {
                console.log(res)
                // let img = res.data[0]._embedded['wp:featuredmedia'] ? res.data[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';
                // console.log(res.data)
                this.setState({
                    single: res.data,
                    acf: res.data,
                    id: res.data.id,
                    type: res.data.type,
                    slug:   getSlug,
                    title: '',
                    content:'',
                    image: '',
                    loading: false
                })


            })
            .catch(error => {
                console.log(error)
            })

        const stylesR =  axios.get(allStyles)
            .then(res => {


                this.setState({
                    styles:res.data
                })


            })
            .catch(error => {
                console.log(error)
            })

    }


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        // console.log( this.state.acf)
        const single = this.state.acf
        single_data = Object.keys( single ).map( igKey => {

            let single_image = single[igKey].acf.term_image
          //  console.log(single[igKey] )

            let s_img = Object.keys( single_image ).map( img => {

                return   (
                    <Link to={'/single-internal/'}>
                          <img src={single_image[img].sizes.medium_large} alt=""/>
                    </Link>

                )
            })
            return (

                    <div>
                        <h4>{single[igKey].name} </h4>

                                {s_img}

                    </div>



            )


        })
        const stylesFilter = this.state.styles
        /*let filter = Object.keys( stylesFilter ).map( styleFilter => {

            let style_icons = stylesFilter[styleFilter].acf.term_image
            // console.log(single_image)
            let s_icon = Object.keys( style_icons ).map( icon => {
                return   (
                    <Link to={'/single-internal/'+style_icons[icon].id}>
                        <img src={style_icons[icon].sizes.thumbnail} alt="" width="60"/>
                    </Link>
                )
            })
            return (
                <div>

                    <h4>{stylesFilter[styleFilter].name} </h4>
                    {s_icon}

                </div>

            )


        })*/
        let filter = Object.keys( stylesFilter ).map( styleFilter => {

            let style_icons = stylesFilter[styleFilter].acf.term_image
            // console.log(single_image)

            return (
                <div>
                    <Link to={'/single-internal/'+stylesFilter[styleFilter].slug+'/'+this.state.slug}>
                    <h4>{stylesFilter[styleFilter].name} </h4>
                    </Link>
                </div>

            )


        })

        if(this.state.loading === true) {
            spinner = <Spinner/>
        }else {
            spinner = ''
        }

        return (
            <section className="wrapper animsitionx" id="page">
                <div className="container">
                    {spinner}
                    {single_data}
                </div>



            </section>
        )
    }
}
export default Single;