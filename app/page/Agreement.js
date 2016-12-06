import React from 'react'
import {View, Container} from 'amazeui-touch';
import _Header from './../components/_Header'

export default React.createClass({
    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <div>
                        <p className="text-center">《用户协议》</p>
                        <div className="about-article padding">
                            <p><b>版权声明</b></p>
                            <p>北京版映科技有限公司（以下简称“版映科技”或者“本公司”）对其开发及运营的或与合作公司共同开发及运营的包括但不限于产品或服务的全部内容拥有版权等知识产权，受法律保护。未经本公司许可，任何人不得擅自使用（包括但不限于复制、传播、展示、镜像、上载、下载）。</p>
                            <p>本公司的标识、LOGO等文字、图形及其组合，源代码以及所有页面的版式设计等版权属于本公司所有，未经授权，不得用于本网站之外的任何站点。</p>
                            <p>本公司所运营的众创部落网注册用户在众创部落网站所发布展示的“展示作品”及“授权作品”，版权归原著作权人所有。在本网站公开上传、发布、分享内容时，请严格遵守《中华人民共和国著作权法》。</p>
                            <p>本网站的内容主要来自注册用户所上传的内容。您以任何形式上传、发布、分享于本网站的任何信息与内容，均为您的个人行为，如果任何第三方对该内容提出包括但不限于版权在内的异议，本网站应确实的权利人请求，将该内容删除。</p>
                            <p>众创部落网注册用户授权本网站可以在本网站范围内，以及本网站进行相关的市场公关推广时引用、发布、转载您在众创部落网站所发布展示的作品。</p>
                            <p>在未获得著作权人授权许可的情况下，不得将著作权人的作品全部或部分发表及展示于众创部落网。</p>
                        </div>
                        <div className="about-article padding">
                            <p><b>服务条款</b></p>
                            <p>众创部落网站vmaking.com（以下简称“我们”或者“本网站”）的网络运营服务主体为北京版映科技有限公司（以下简称“版映科技”或者“本公司”），本网站的所有权归属于北京版映科技有限公司及其许可人。</p>
                            <p>请您仔细阅读以下全部内容。如果您不同意本网站服务条款中的任意内容，请勿注册或使用本网站所提供的服务。在您使用某特定产品或者服务的情况下，您需要同时遵守并接受相关适用于那些产品和服务的条款或者协议（以下统称为“其他条款”）。例如，当您通过本网站进行版权素材销售合作时，需要同时遵守《众创部落网站版权素材销售合作协议》；当您通过本网站购买本网站注册用户所提供的版权素材时，您需要同时遵守《版权素材标准授权协议》或者《版权素材扩展授权协议》。如果以下服务条款与“其他条款”有不一致之处，则以“其他条款”为准。如果您已经通过进入注册程序并勾选“我已阅读并接受众创部落网站网站服务条款”在本网站购买上商品和使用所提供的服务，即表示您与本网站已达成协议，自愿同意并接受本服务条款和所有相关的条款、政策和协议的约束。</p>
                            <p>一 : 条款的修改</p>
                            <p>本网站有权修改服务条款以及其他条款，本网站会尽可能提前在本网站重要页面上进行公告通知用户修改内容。如果您不同意服务条款所修改的内容，您可以主动联系本网站取消网络服务。如果您继续使用本网站所提供的服务，则视为您接收服务条款的变动。</p>
                            <p>二 : 服务内容</p>
                            <p>本网站所提供的具体服务与内容由本网站根据实际情况提供，例如通过在线、电子邮件或者手机进行内容上传、共享或销售，通过在线或者手机进行内容搜索、购买。您明确知晓，本网站仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、以及其他与接入互联网或移动物联网有关的装置）及所需的费用（如为接入互联网而支付的上网费以及电话费、为使用移动互联网而支付的手机话费）均应由您自行承担。</p>
                            <p>三 : 服务的变更、中断或者终止</p>
                            <p>鉴于网络服务的特殊性，您同意本网站有权随时变更、中断或终止部分或全部的网络服务。如变更、中断或终止网络服务，本网站会尽可能提前进行公告通知用户，无需对任何用户或任何第三方承担任何责任。</p>
                            <p>用户理解，本网站需要定期或不定期地对提供网络服务的平台（如互联网网站、移动网络等）或相关的设备进行检修或者维护，如因此类情况而造成收费网络服务在合理时间内的中断，本网站无需为此承担任何责任，但本网站应尽可能事先进行通告。</p>
                            <p>用户违反本条款中规定的使用规则，本网站有权随时中断或终止向用户提供本条款项下的网络服务而无需对用户或任何第三方承担任何责任。</p>
                            <p>四 : 用户和账户</p>
                            <p>在您使用本网站的某些功能和服务的时候，可能需要您在本网站创建账户，您同意为在您的账户和密码下发生的所有行为承担责任。对于因您未能保护信息安全以及保密而在您的账户下发生的任何行为，您承担全部责任。如果您未满18周岁，您只能在父母或者监护人的参与下使用本网站。我们保留自行决定拒绝提供服务、关闭账号、删除或者编辑内容或者取消订单的权利。如果您的注册账号在180日内未被激活并实际使用，本网站有权删除该帐号。</p>
                            <p>五 : 使用行为</p>
                            <p>您有权随时修改或者删除自己的账户信息。</p>
                            <p>您有义务和责任妥善保管您在本网站注册的自己账户信息。您不应将账号和密码转让或者出借他人使用。如果您发现您的账号遭他人非法使用，应立即通知本网站。因黑客行为或者用户的保管疏忽导致账号、密码遭他人非法使用，本网站不承担任何责任。</p>
                            <p>您在使用本网站所提供的服务过程中，必须遵守以下原则：</p>
                            <p>1. 遵守中国有关的法律和法规，不会违反任何适用的国家或者国际法律、法令、调理、规则或者规定；</p>
                            <p>2. 遵守所有与网络服务有关的网络协议、规定和程序；</p>
                            <p>3. 不得为任何非法目的而使用网络服务系统；</p>
                            <p>4. 不得利用本网站所提供的网络服务上传、展示或传播：</p>
                            <p>a. 侵犯第三方权利的任何内容资料，包括但不限于专利权、著作权、商标权、名誉权或者或者任何其他合法权益；</p>
                            <p>b. 商业广告；</p>
                            <p>c. 任何第三方广告，包括横幅广告联盟等服务；</p>
                            <p>d. 任何虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；</p>
                            <p>5. 不得利用本网站网络服务系统进行任何不利于本网站的行为；</p>
                            <p>6. 不得对其他用户进行侮辱、谩骂、恶意调侃等人身攻击的行为；</p>
                            <p>7. 如发现任何非法使用用户帐号或帐号出现安全漏洞的情况，应立即通知本网站；</p>
                            <p>8. 您不会假冒任何人或者法人。</p>
                            <p>如用户在使用网络服务时违反任何上述规定，本网站或其授权的人有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或删除用户张贴的内容等、暂停或终止用户使用网络服务的权利）以减轻用户不当行为造成的影响。</p>
                            <p>本网站对所提供的某些特定的网络服务的使用通过各种方式（包括但不限于网页公告、电子邮件、发送站内信提醒等）作出的任何声明、通知、警示等内容视为本条款的一部分，用户如使用该本网站网络服务，视为用户同意该等声明、通知、警示的内容。</p>
                            <p>六、免责声明</p>
                            <p>本网站在提供产品或服务可能会遇到不可抗力等风险因素，因此本网站无法担保网络服务不会中断，也无法担保网络服务一定能满足您的要求，对网络服务的及时性、安全性、准确性也都无法作出担保。您同意保障和维护本网站及其他用户的利益，由于您登录网站产生的内容违法、不真实、不正当、侵犯第三方合法权益，或者您违反本条款项下的任何条款而给本网站或任何其他第三方造成损失，您同意承担损害赔偿责任。</p>
                            <p>七、通知送达</p>
                            <p>本条款项下本网站对于用户所有的通知均可通过网页公告、电子邮件、发送信息或常规的信件传送等方式进行；该等通知于发送之日视为已送达收件人。</p>
                            <p>用户对于本网站的通知应当通过本网站对外正式公布的通信地址、传真号码、电子邮件地址等联系信息进行送达。</p>
                            <p> 八、法律管辖</p>
                            <p>本条款的订立、执行和解释及争议的解决均应适用中国法律并受中国法院管辖。</p>
                            <p>如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向本网站所在地的人民法院提起诉讼。</p>
                            <p>九、疑问解答</p>
                            <p>如果您对以上条款有任何疑问，请通过邮件联系我们 help@copyrightshow.cn。</p>
                        </div>
                        <div className="about-article padding">
                            <p><b>隐私协议</b></p>
                            <p>用户在众创部落网站进行登记注册、上传内容、参与讨论等活动时，经用户同意及确认，本网站将通过注册表格、订单等形式要求用户提供一些个人资料。本网站收集此类个人身份信息，主要是为注册用户用于提供和改进我们的产品、服务、内容和广告宣传</p>
                            <p>本网站所收集的个人信息或企业信息包括：</p>
                            <p>1. 个人/企业识别资料：如姓名、企业名称、组织机构代码、法人代表、个人性别、个人生日、个人主页、公司网站地址、即时通讯、所在地、电子邮件地址等。</p>
                            <p>2. 个人背景： 职业、婚姻、兴趣爱好等。</p>
                            <p>本网站对用户所提供的个人资料进行严格的管理及保护，本网站将使用相应的技术，防止您的个人资料丢失、被盗用或遭篡改。</p>
                            <p>某些个人信息因其特殊性可能被认为是敏感个人信息，例如您的种族、宗教、个人健康和医疗信息等。相比其他个人信息，敏感个人信息受到更加严格的保护。</p>
                            <p>请注意，您在使用我们的服务时所提供、上传或发布的内容和信息（例如有关您社交活动的照片等信息），可能会泄露您的敏感个人信息。您需要谨慎地考虑，是否在使用我们的服务时披露相关敏感个人信息。</p>
                            <p>本公司的网站、在线服务、互动应用软件、电子邮件和广告可能会使用“Cookie”和其他技术，如像素标签和网站信标。此类技术帮助我们更好地了解用户的行为，告诉本网站人们浏览了本网站的哪些部分，衡量广告和网络搜索的效果并加以改善。本网站将通过 Cookie 和其他技术收集的信息视为非个人信息。但是，如果当地法律将 Internet 协议 (IP) 地址或类似识别标记视为个人信息，则我们亦将此等识别标记视为个人信息。同样，就本隐私政策而言，在将非个人信息与个人信息结合使用的情况下，我们将结合使用的信息视为个人信息。</p>
                            <p>在未经访问者授权同意的情况下，本网站不会将访问者的个人信息、企业信息泄露给任何第三方。以下情况除外：</p>
                            <p>1. 根据执法单位之要求或为公共之目的向相关单位提供个人资料；</p>
                            <p>2. 由于访问者将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人资料泄露；</p>
                            <p>3. 由于黑客攻击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常经营之不可抗力而造成的个人资料泄露、丢失、被盗用或被窜改等；</p>
                            <p>4. 由于与本网站链接的其他网站所造成之个人资料泄露及由此而导致的任何法律争议和后果；</p>
                            <p>5. 为免除访问者在生命、身体或财产方面之急迫危险。</p>
                            <p>本网站可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与本网站同等的保护用户隐私的责任，则本网站有权将用户的注册资料等提供给该第三方。</p>
                            <p>在不透露单个用户隐私资料的前提下，本网站有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。</p>
                            <p>如果您对众创部落网站的隐私政策或数据处理有任何问题或者疑问，或者希望就可能违反当地隐私权法律的情况进行投诉，请通过help@copyrightshow.cn联系我们。</p>
                            <p>我们可能适时修订本《隐私政策》的条款，该等修订构成本《隐私政策》的一部分。如该等修订造成您在本《隐私政策》下权利的实质减少，我们将在修订生效前通过在主页上显著位置提示或向您发送电子邮件或以其他方式通知您。在该种情况下，若您继续使用我们的服务，即表示同意受经修订的本《隐私政策》的约束。</p>
                        </div>
                    </div>
                </Container>
            </View>
        )
    }
})
