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
class Single extends  React.Component {
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
            loading: false,
            noResult: false

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

        const url      = window.location.href;
        const getStyle = this.props.style;

        //const getStyle = this.props.match.params.style;
        //const getWood  = this.props.match.params.wood;
        const getWood  = this.props.wood;


        let dataURL = pageURL+'?filter[woods]='+getWood+'&filter[styles]='+getStyle;

        axios.get(dataURL)
            .then(res => {

               // let img = res.data[0]._embedded['wp:featuredmedia'] ? res.data[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';
              //  console.log(res.data)
                this.setState({
                    single: res.data,
                    acf: res.data,
                    id: res.data.id,
                    type: res.data.type,
                    slug:   getStyle,
                    title: '',
                    content:'',
                    image: '',
                    loading: false
                })
                if( res.data.length == 0 ) {
                    this.setState({
                      noResult: true
                    })
                }else {
                    this.setState({
                        noResult: false
                    })
                }



            })
            .catch(error => {
                console.log(error)
            })

    }


    render() {
            //console.log(this.state.acf)
            const single = this.state.acf
            single_data = Object.keys( single ).map( igKey => {
           // console.log(single[igKey])
            if(single[igKey].title.rendered === ''){
               return <h1>No match</h1>
            }
            return (

                <div className="result-img">


                    <img className="img-responsive" src={single[igKey].acf.background.sizes.medium_large} alt=""/>
                    <h4>{single[igKey].title.rendered} </h4>


                </div>

            )


        })

        if(this.state.loading) {
            spinner = <Spinner/>
        }else {
            spinner = ''
        }
let msg
        if(this.state.noResult) {

           msg = <h1>No match! please choose different wood or color</h1>
        }else {
                msg =''
        }

        return (
            <section className="wrapper animsitionx" id="page">
                {spinner}
                {single_data}
                {msg}





            </section>
        )
    }
}
export default Single;