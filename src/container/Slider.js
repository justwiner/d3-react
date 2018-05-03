import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from "react-router-dom";
import Service from '../lib/services'
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Slider extends Component {
  state = {
    menu: []
  };
  componentDidMount () {
    Service.getMenu()
    .then( res => this.setState({ menu: res.data }))
    .catch( error => console.log(error) )
  }
  handleClick = (e) => {
    this.props.actions.setRouter(e.key)
  }
  render () {
    const { menu } = this.state
    const { collapsed, router } = this.props
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">My D3.js</div>
        <Menu 
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={['/']}
          onClick = { this.handleClick }
          defaultOpenKeys={[router.classify]}
          selectedKeys={[router.currentRouter]}>
          {
            menu.map(item => {
              if ( item.children && item.children !== 0 ){
                return (
                  <SubMenu key={item.link} title={
                      <span>
                        <Icon type={item.icon} />
                        <span>{item.menuName}</span>
                      </span>
                  }>
                    {
                      item.children.map(child => {
                        return ( 
                          <Menu.Item key={child.link}>
                            <NavLink to={child.link}>{child.menuName}</NavLink>
                          </Menu.Item> 
                        )
                      })
                    }
                  </SubMenu>
                )
              } else {
                return ( 
                  <Menu.Item key={item.link}>
                    <NavLink to={item.link}>
                      <Icon type={item.icon} />
                      <span>{item.menuName}</span>
                    </NavLink>
                  </Menu.Item> 
                )
              }
            })
          }
        </Menu>
      </Sider>
    )
  }
}
export default Slider