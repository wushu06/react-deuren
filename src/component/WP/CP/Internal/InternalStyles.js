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
            woods:[],
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
        //this.handleData()



    }

    componentDidMount () {
        this.setState({
            loading: true
        })

        this.handleData()

    }
    handleData =() => {

        const url      = window.location.href;
        const getSlug = this.props.match.params.slug;


        let dataURL = internalStyleURL+'?slug='+getSlug;
        let allWoods = internalWoodURL;

        const stylesResult = axios.get(dataURL)
            .then(res => {

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

        const woodResut =  axios.get(allWoods)
            .then(res => {


                this.setState({
                    woods:res.data
                })
                console.log(res)

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
        // console.log(this.state.acf.blocks)
        const single = this.state.acf
        single_data = Object.keys( single ).map( igKey => {

            let single_image = single[igKey].acf.term_image
            // console.log(single_image)
            let s_img = Object.keys( single_image ).map( img => {
                return   (
                    <img src={single_image[img].sizes.medium_large} alt=""/>
                )
            })
            return (
                <div>

                    <h4>{single[igKey].name} </h4>
                    {s_img}

                </div>

            )


        })
        const woodsFilter = this.state.woods
        let filter = Object.keys( woodsFilter ).map( woodFilter => {

            let wood_icons = woodsFilter[woodFilter].acf.term_image
            // console.log(single_image)
            let s_icon = Object.keys( wood_icons ).map( icon => {
                return   (
                    <Link to={'/single-internal/'+wood_icons[icon].name}>
                        <img src={wood_icons[icon].sizes.medium_large} alt=""/>
                    </Link>
                )
            })
            return (
                <div>

                    <h4>{woodsFilter[woodFilter].name} </h4>
                    {s_icon}

                </div>

            )


        })

        if(this.state.loading === true) {
            spinner = <Spinner/>
        }else {
            spinner = ''
        }

        return (
            <section slug={this.state.slug} className="wrapper animsitionx" id="page">
                {spinner}
                 {single_data}



            </section>
        )
    }
}
export default Single;