import React, { Component } from "react";
import { Layout, Icon } from 'antd';
const { Header, Content } = Layout;
 
class Maps extends Component {
  render() {
    const { actions, location, match } = this.props
    actions.setRouter(location.pathname,match.url)
    return (
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.toggle}
          />
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          Maps
        </Content>
      </Layout>
    );
  }
}
 
export default Maps