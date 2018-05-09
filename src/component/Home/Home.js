import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Spinner from '../Layout/Spinner';
import { SITE_ROOT, FORM_GET, FORM_POST, pageURL, singleURL, internalStyleURL, internalWoodURL  } from '../Inc/Inc'
import AllWoods from '../WP/CP/Internal/ArchiveWoods'
import AllStyles from '../WP/CP/Internal/ArchiveStyles'
import axios from 'axios'

let spinner
let single_data
class Home extends  React.Component {
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



        let dataURL = pageURL+'?filter[woods]=natural-oak&filter[styles]=gio';

        axios.get(dataURL)
            .then(res => {

                // let img = res.data[0]._embedded['wp:featuredmedia'] ? res.data[0]._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : 'http://via.placeholder.com/350x150';
                console.log(res.data)
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
        console.log(this.state.acf)
        const single = this.state.acf
        single_data = Object.keys( single ).map( igKey => {


            return (
                <div>

                    <h4>{single[igKey].title.rendered} </h4>
                    <img src={single[igKey].acf.background.sizes.medium_large} alt=""/>


                </div>

            )


        })

        if(this.state.loading === true) {
            spinner = <Spinner/>
        }else {
            spinner = ''
        }

        return (
            <section className="wrapper animsitionx pull-right" id="page">
                {single_data}


            </section>
        )
    }
}
export default Home;