import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../../../Layout/Spinner';
import Lightbox from 'react-images';
import { SITE_ROOT, FORM_GET, FORM_POST, pageURL, singleURL, internalStyleURL, internalWoodURL  } from '../../../Inc/Inc'
import FullWidth from '../../Blocks/FullWidth'
import HeroCarousel from '../../Blocks/HeroCarousel'
import SecondCarousel from '../../Blocks/SecondCarousel'
import TwoCol from '../../Blocks/TwoCol'
import SingleInternal from './SingleInternal';
import axios from 'axios'


/*

  =================
  NOT IN USE - FOR REFRENCE ONLY
  =================


 */
let spinner
let single_data
let s_data =''
class ArchiveStyles extends  React.Component {
    constructor() {
        super();
        this.state = {
            single: [],
            acf: [],
            slugStyle:'',
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




        let dataURL = internalStyleURL;

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
    showSingle = () => {

        this.setState({
            single: true
        })

    }


    render() {
        const single = this.state.acf
        let ss
        single_data = Object.keys( single ).map( igKey => {

            ss = single[igKey].slug

            return (
                <div key={single[igKey].id}>
                    <button onClick={this.showSingle.bind(this)}>
                        {single[igKey].name}
                    </button>
                        {/*s_img*/}


                </div>

            )


        })
        if(this.state.loading === true) {
            spinner = <Spinner/>
        }else {
            spinner = ''
        }

        if(this.state.single === true) {

            single_data =  <SingleInternal wood={'natural-oak'} style={ss}/>
        }

        return (
            <section>

                {single_data}

            </section>
        )
    }
}
export default ArchiveStyles;