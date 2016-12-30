import React from 'react';
import _Header from './../components/_Header'
import {
    Container, Group, List, View, Badge, Grid, Col,TabBar
} from 'amazeui-touch';
import TribeAlbumInfoActions from '../actions/TribeAlbumInfoActions'
import TribeAlbumInfoStore from '../stores/TribeAlbumInfoStore'
import publicFn from '../publicFn'
import _DownLoadApp from '../components/_DownLoadApp'


class TribeAlbumInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = TribeAlbumInfoStore.getState();
        this.onChange = this.onChange.bind(this);
        this.state.currentPage = 1;
        this.state.iScrollOptions={
            mouseWheel: true,
            scrollbars: true,
            scrollX: true,
            scrollY: true,
            click:true
        }
    }

    componentDidMount(){
        TribeAlbumInfoStore.listen(this.onChange);
        TribeAlbumInfoActions.getTribeAlbumInfo({
            uid:publicFn.getUser(),
            tribeId:this.props.params.tribeId,
            albumId:this.props.params.albumId,
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
    }

    componentWillUnmount() {
        TribeAlbumInfoStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    _lookAlbumImgInfo(item){
        this.context.router.push({
            pathname:'/tribe/album/img/'+item.id,
            query: {
                photo:item.photo
            }
        })
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable fill className="tribe">
                <Grid avg={3} className="text-center tribe-album">
                    {
                        this.state.tribeAlbumInfoList.map((item, i) => {
                            return (
                                <Col key={i}>
                                    <div className="albumImg">
                                        <a href="javascript:;" onClick={this._lookAlbumImgInfo.bind(this,item)}>
                                            <img src={item.cover} alt=""/>
                                        </a>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Grid>
                <_DownLoadApp></_DownLoadApp>
            </Container>
        </View>

    }
}

TribeAlbumInfo.contextTypes = {
    router: React.PropTypes.object
}

export default TribeAlbumInfo;
