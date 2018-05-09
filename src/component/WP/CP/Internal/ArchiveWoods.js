import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import Lightbox from 'react-images';
import { SITE_ROOT, FORM_GET, FORM_POST, pageURL, singleURL, internalStyleURL, internalWoodURL  } from '../../../Inc/Inc'
import FullWidth from '../../Blocks/FullWidth'
import HeroCarousel from '../../Blocks/HeroCarousel'
import SecondCarousel from '../../Blocks/SecondCarousel'
import TwoCol from '../../Blocks/TwoCol'
import Header from '../../../../component/Header/Header'
import axios from 'axios'

let spinner
let single_data
class ArchiveWoods extends  React.Component {
    constructor() {
        super();
        this.state = {
            single: [],
            acf: [],
            slug:'',
            id:'',
            type: '',
            title: '',
            content: '',
            image: '',
            loading: true

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
        this.handleData()

    }
    handleData =() => {




        let dataURL = internalWoodURL;

        axios.get(dataURL)
            .then(res => {

                // let img = res.data[0]._embedded['wp:featuredmedia'] ? res.data[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';
                // console.log(res.data)
                this.setState({
                    single: res.data,
                    acf: res.data,
                    id: res.data.id,
                    type: res.data.type,

                    title: '',
                    content:'',
                    image: '',
                    loading: false
                })


            })
            .catch(error => {
                console.log(error)
            })

    }


    render() {
        // console.log(this.state.acf.blocks)
        const single = this.state.acf
        single_data = Object.keys( single ).map( igKey => {

            let single_image = single[igKey].acf.term_image
            //console.log(single_image)
            let s_img = Object.keys( single_image ).map( img => {
                return   (

                        <Link to={'/single-internal/'+single_image[img].id} key={single_image[img].id}>
                            <img src={single_image[img].url} alt="" width="100"/>
                        </Link>


                )
            })
            return (
                <div key={single[igKey].id}>
                    <Link to={'/internal-woods/'+single[igKey].slug}>
                        {single[igKey].name}
                        {/*s_img*/}
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
            <section>
                {single_data}

            </section>
        )
    }
}
export default ArchiveWoods;