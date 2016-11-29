import React from 'react'
import { browserHistory, Link } from 'react-router'
import NavLink from './../page/NavLink'
import {NavBar, OffCanvasTrigger, OffCanvas, List, TabBar, Notification, Field, Group, Grid, Col, Button, Icon} from 'amazeui-touch'

//公用头部组件
class _Header extends React.Component {
    constructor(props) {
        super(props);
        //判断当前是否在搜索页，如果是搜索页则默认显示搜索导航条
        if (this.props.isSearch) {
            this.state = {
                visible: true,
                searchVal: this.props.searchVal
            };
        } else {
            this.state = {
                visible: false,
                searchVal: ''
            };
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {

    }

    //打开搜索
    openNotification(item) {
        if (item.className == 'search') {
            this.setState({
                visible: true
            });
        } else {
            this.setState({
                visible: false
            });
        }
    }

    //关闭搜索
    closeNotification() {
        this.setState({
            visible: false
        });
    }

    changeSearch(event) {
        this.setState({
            searchVal: event.target.value
        })
    }

    cleanSearch() {
        this.setState({
            searchVal: ''
        })
    }

    onChange(state) {
        this.setState(state)
    }

    render() {
        return <div className="header">
            <Notification
                className="padding-v-xs"
                amStyle={this.state.amStyle}
                visible={this.state.visible}
                animated
                closeBtn={false}
                onDismiss={this.closeNotification.bind(this)}
            >
                <Grid className="bgNone header-search">
                    <Col cols={5} className="padding-0">
                        <form action="/search">
                            <List className="margin-0">
                                <List.Item key="1"  media={<Icon className="header-icon-search" name=""></Icon>} nested="input" >
                                    <Field ref="search" name="search" onChange={this.changeSearch.bind(this)} value={this.state.searchVal} className="margin-0 padding-v-xs text-size-14" placeholder="众创众创众创众创" btnAfter={<Icon className="header-icon-close" name="" onClick={this.cleanSearch.bind(this)}></Icon>}/>
                                </List.Item>
                            </List>
                        </form>
                    </Col>
                    <Col cols={1} className="padding-0 bgNone text-right" onClick={this.closeNotification.bind(this)}>
                        <p className="text-size-14 padding-v-xs">取消</p>
                    </Col>
                </Grid>

            </Notification>

            <NavBar
                className="Header"
                title={<div className="home-logo text-size-12"></div>}
                leftNav={[{title: '',
                component: OffCanvasTrigger,
                className:"leftNav",
                offCanvas:<OffCanvas>
                        <Group className="header-login bgNone margin-0 padding-v hidden">
                            <Link to="/register" className="btn-yellow margin-bottom">注册</Link>
                            <Link to="/login" className="btn-white-noBorder">登陆</Link>
                        </Group>
                        <Group className="header-login bgNone margin-0">
                            <div className="header-user-avatar margin-v">
                                <a href="/user/01"><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" height="50" width="50" alt=""/></a>
                            </div>
                            <div className="header-user-name text-color-7 text-size-16"><a href="/user/01">用户名用户名</a></div>
                        </Group>
                        <List className="header-nav">
                            <List.Item
                                linkComponent={NavLink}
                                media={<Icon name=""/>}
                                linkProps={{
                                to: `/`,
                                onClick: this.onDismiss,
                                onlyActiveOnIndex:true
                                }}
                                title="首页"
                                className="header-nav-icon header-nav-index"
                            />
                            <List.Item
                                linkComponent={NavLink}
                                media={<Icon name=""/>}
                                linkProps={{
                                to: '/tribe',
                                onClick: this.onDismiss,
                                }}
                                title="部落"
                                className="header-nav-icon header-nav-tribe"
                            />
                            <List.Item
                                linkComponent={NavLink}
                                media={<Icon name=""/>}
                                linkProps={{
                                to: '/require',
                                onClick: this.onDismiss,
                                }}
                                title="需求"
                                className="header-nav-icon header-nav-require"
                            />
                            <List.Item
                                linkComponent={NavLink}
                                media={<Icon name=""/>}
                                linkProps={{
                                to: '/server',
                                onClick: this.onDismiss,
                                }}
                                title="服务"
                                className="header-nav-icon header-nav-server"
                            />
                        </List>
                    </OffCanvas>,
                isClone:true}]}
                rightNav={[{
                title:'',
                className:'search'
            }]}
                onAction={this.openNotification.bind(this)}
                amStyle="dark"/>
        </div>;
    }
}

export default _Header;
