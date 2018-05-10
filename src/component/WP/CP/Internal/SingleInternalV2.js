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
import Test from './test'


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


        if (prevState.img === this.state.img  ) {
           // console.log('dont')
        }else {

           // console.log('res')

        }

        //this.handleData()




    }


    componentDidMount () {
        this.fff()



    }
    handleData =() => {



       // console.log('real='+image+' ||st|| '+this.state.img)

    }

    fff = () => {

        let getStyle = [this.props.style];
        let getWood  = [this.props.wood];
        single_data = Object.keys( single ).map( igKey => {
            //  console.log(single[igKey].internal_doors_style )
            if(  JSON.stringify(getStyle) === JSON.stringify(single[igKey].internal_doors_style) && JSON.stringify(getWood) === JSON.stringify(single[igKey].internal_doors_wood) ){
                //console.log(single[igKey].acf.background.filename)





                return  image = single[igKey].acf.background.filename,
                    title = single[igKey].title.rendered

            }


        })
        import('../../../../D_Internal/'+image)
            .then(someModule =>{
                this.setState({
                    img: someModule
                })

            })
            .catch(error => {
                this.setState({
                    img: ''
                })
            })

    }

    componentWillReceiveProps(nextProp)  {
        /*  this.setState({
         loading: true
         })*/
        nextProp = this.props
        this.fff()






    }
    render() {





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
                <img src={this.state.img} alt=""/>
                {single_data}
                {msg}





            </section>
        )
    }
}
export default Single;