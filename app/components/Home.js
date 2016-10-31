import React from 'react'
import {Container, Group, Slider, Grid, Col, List, View} from 'amazeui-touch'
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions'

const sliderIntance = (
    <Slider>
        <Slider.Item>
            <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
        </Slider.Item>
        <Slider.Item>
            <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
        </Slider.Item>
    </Slider>
);


const img = <img className="home-tribe-media" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
const tit = (
    <div className="home-tribe-item">
        <p className="text-color-3 text-size-sm">嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉</p>
        <p className="text-color-4 text-size-xs">1小时前</p>
    </div>
)
const btn = <div className="home-tribe-tag">海贼王部落</div>


class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
        this.state.home = [];
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);
        HomeActions.updateHome();
    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state)
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return <View>
                <Container scrollable className="home">
                <div className="home-slide">{sliderIntance}</div>
                <div className="home-tribe border-d7d7d7 bgF">
                    <Group noPadded className="margin-0">
                        <h5 className="home-group-header margin-sm">部落</h5>
                        <Grid avg={4}>
                            <Col className="padding-v-0">
                                <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
                            </Col>
                            <Col className="padding-v-0">
                                <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
                            </Col>
                            <Col className="padding-v-0">
                                <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
                            </Col>
                            <Col className="padding-v-0">
                                <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
                            </Col>
                        </Grid>
                        <Grid avg={4} className="text-center">
                            <Col className="padding-v-xs">
                                <p className="home-tribe-name">剑灵部落</p>
                            </Col>
                            <Col className="padding-v-xs">
                                <p className="home-tribe-name">海贼王部落</p>
                            </Col>
                            <Col className="padding-v-xs">
                                <p className="home-tribe-name">魔兽部落</p>
                            </Col>
                            <Col className="padding-v-xs">
                                <p className="home-tribe-name">奇迹王座部落</p>
                            </Col>
                        </Grid>
                    </Group>
                </div>

                <div className="home-square border-d7d7d7 bgF margin-top-sm">
                    <Group noPadded className="margin-v-0">
                        <h5 className="home-group-header margin-sm">广场</h5>
                        <Grid align="between" className="padding-v-sm">
                            <Col cols={3}>
                                <button className="btn-yellow">需求</button>
                            </Col>
                            <Col cols={3}>
                                <button className="btn-blue">服务</button>
                            </Col>
                        </Grid>
                    </Group>
                </div>

                <div className="border-d7d7d7 bgF margin-top-sm">
                    <Group noPadded className="margin-v-0">
                        <List>
                            <List.Item
                                media={img}
                                after={btn}
                                title={tit}
                            />
                            <div className="padding-h margin-v-xs">
                                <div className="text-size-lg text-color-3">标题名称名称名称</div>
                                <div className="text-size-xs text-color-2">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
                            </div>
                            <Grid avg={3}>
                                <Col className="padding-h padding-top-xs padding-bottom-0">
                                    <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
                                </Col>
                                <Col className="padding-h padding-top-xs padding-bottom-0">
                                    <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
                                </Col>
                                <Col className="padding-h padding-top-xs padding-bottom-0">
                                    <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
                                </Col>
                            </Grid>
                            <Grid align="between">
                                <Col cols={2} className="padding-h text-size-xs text-color-4">
                                    <span className="icon icon-back text-size-xs"></span>
                                    123
                                </Col>
                                <Col cols={2} className="padding-h text-size-xs text-color-4 text-right">
                                    <Grid>
                                        <Col>
                                            <span className="icon icon-back text-size-xs"></span>
                                            123
                                        </Col>
                                        <Col>
                                            <span className="icon icon-back text-size-xs"></span>
                                            123
                                        </Col>
                                    </Grid>
                                </Col>
                            </Grid>
                        </List>
                    </Group>

                </div>

                <div className="margin-h margin-v">
                    <Group noPadded className="margin-0">
                        <a className="btn-white">查看更多</a>
                    </Group>
                </div>

                <div className="margin-h margin-v bgNone">
                    <Group noPadded className="margin-0 bgNone">
                        <p>sss</p>
                        <p>京ICP备14057447号-3</p>
                    </Group>
                </div>

            </Container>
        </View>;
    }
}

export default Home;
