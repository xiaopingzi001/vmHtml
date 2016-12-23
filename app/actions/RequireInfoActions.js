import alt from '../alt'
import $ from 'jquery'
import publicFn from '../publicFn'

class RequireInfoActions{
    constructor() {
        this.generateActions(
            'getRequireInfoSuccess',
            'getRequireInfoFail',
            'attentionUserSuccess',
            'attentionUserFail',
            'attentionCancelSuccess',
            'attentionCancelFail',
            'getRequireApplySuccess',
            'getRequireApplyFail'
        );
    }

    //需求详细接口
    getRequireInfo(requireId){
        $.ajax({
            type: 'Get',
            url: '/app/require/'+requireId,
            data:{
                "uid":publicFn.getUser()
            }
        })
        .done((data) => {
            this.getRequireInfoSuccess(data);
        })
        .fail((jqXhr) => {
            this.getRequireInfoFail(jqXhr);
        });
    }

    //报名列表 / 投稿列表
    getRequireApply(data){
        $.ajax({
            type: 'Get',
            url: ' /app/require/'+data.requireId+'/apply/list',
            data:{
                "uid":publicFn.getUser(),
                "currentPage": data.currentPage,
                "itemsPerPage": data.itemsPerPage
            }
        })
        .done((data) => {
            this.getRequireApplySuccess(data);
        })
        .fail((jqXhr) => {
            this.getRequireApplyFail(jqXhr);
        });
    }

    //关注某人
    attentionUser(uid){
        $.ajax({
            type: 'Get',
            url: '/app/user/attention/'+uid+'/',
            data:{
                "attentionId":publicFn.getUser()
            }
        })
        .done((data) => {
            this.attentionUserSuccess(data);
        })
        .fail((jqXhr) => {
            this.attentionUserFail(jqXhr);
        });
    }

    //关注某人
    attentionCancel(uid){
        $.ajax({
                type: 'Get',
                url: '/app/user/attention/cancel/'+uid+'/',
                data:{
                    "attentionId":publicFn.getUser()
                }
            })
            .done((data) => {
                this.attentionCancelSuccess(data);
            })
            .fail((jqXhr) => {
                this.attentionCancelFail(jqXhr);
            });
    }
}

export default alt.createActions(RequireInfoActions);