import React, {Component} from "react";
import {Layout, Icon} from 'antd';
import {Route} from 'react-router-dom'
import {BarChart, AreaChart, PieChart} from '../components'

const {Header, Content} = Layout;

class Charts extends Component {
    state = {
        barChart: {
            data: [50, 43, 120, 87, 99, 167, 188, 123, 355],
            axis: {
                xLine: true,
                yLine: true,
                xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', '华为', '中兴', 'oppo']
            },
            barTitle: {
                left: 'right',
                text: '柱状统计图'
            },
            tip: {
                show: true,
                text: '今日用户'
            },
            barGraph: {
                width: 800,
                color: '#3398DB',
                animation: true
            }
        }
    }

    render() {
        const { barChart } = this.state
        const {actions, location, match} = this.props
        actions.setRouter(location.pathname, match.url)
        return (
            <Layout>
                <Header style={{background: '#fff', padding: 0}}>
                    <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.toggle}
                    />
                </Header>
                <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                    <Route path={`/charts/barChart`} render={() => (
                        <BarChart
                            axis={barChart.axis}
                            barTitle={barChart.barTitle}
                            tip={barChart.tip}
                            color={barChart.barGraph.color}
                            animation={barChart.barGraph.animation}
                            width={barChart.barGraph.width}
                            data={barChart.data}/>
                    )}></Route>
                    <Route path={`/charts/areaChart`} render={() => <AreaChart />}></Route>
                    <Route path={`/charts/pieChart`} component={() => <PieChart />}></Route>
                </Content>
            </Layout>
        );
    }
}

export default Charts