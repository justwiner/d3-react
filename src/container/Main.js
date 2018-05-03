import React, { Component } from "react"
import { Route } from "react-router-dom"
import { Home, Maps, Charts } from "../view"
import { Layout } from 'antd'
import Slider from './Slider'
import { connect } from 'react-redux';
import * as Actions from '../actions/index'
import { bindActionCreators } from 'redux'
import './Main.css'
 
class Main extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const { collapsed } = this.state
    console.log(...this.props)
    return (
      <Layout>
        <Slider {...this.props} collapsed={collapsed}/>
        <Route exact path="/" render={(props) => <Home {...Object.assign(props,this.props)} collapsed={this.state.collapsed} toggle={this.toggle}/>}/>
        <Route path="/maps" render={(props) => <Maps {...Object.assign(props,this.props)} collapsed={this.state.collapsed} toggle={this.toggle}/> }/>
        <Route path="/charts" render={(props) => <Charts {...Object.assign(props,this.props)} collapsed={this.state.collapsed} toggle={this.toggle}/> }/>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    router: state.router
  })
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);

