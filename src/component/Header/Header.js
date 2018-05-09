import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router-dom'
import Nav from './Nav/Nav'
import styled from 'styled-components'
import WpMenu from '../../component/Header/Nav/Menu/Menu_2'
import Logo from '../../assets/logo.svg'
import AllWoods from '../WP/CP/Internal/ArchiveWoods'
import AllStyles from '../WP/CP/Internal/ArchiveStyles'

const visible = styled.div`
    display:  ${(props) => (props.open) ? `block` : 'none'};
`
const StayVisible = styled.div`
	margin-left: ${(props) => (props.open) ? `${props.width}` : '-300px'};
	transition: margin .2s;
`

injectTapEventPlugin();
class Header extends Component
{
    state = {
        open: false,
        text: 'CLOSE',
        width: 0,
        display: 'none'
    }
    toggle = () => {
        this.setState((prevState, props) => {
            return {
                open: !prevState.open,

            }
        })
        const getState = {
            ... this.state
        }

        if(getState.open === true) {

            this.setState({text: 'CLOSE'})
        }else {

            this.setState({text: 'open'})
        }
    }

    toggleText = () => {

    }
    componentDidMount() {
        console.log()
    }

    render () {

        return (


            <div>




                <header id="mainHeader" className="p-fixed ">


                    <nav className="navbar navbar-default ">
                        <div className="container-fluid">
                            <div className="navbar-header">

                                <Link className="navbar-brand" to={"/"}>
                                    <img src={Logo} alt="" width="260" />
                                </Link>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse wp-navbar">

                                <h1>Filter by wood:</h1><br/>
                                <AllWoods/>
                                <hr/>
                                <h1>Filter by style: </h1><br/>
                                <AllStyles/>

                            </div>
                        </div>
                    </nav>




                </header>


            </div>

        )
    }

};
export default Header;