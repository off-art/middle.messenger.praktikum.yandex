import { tpl } from './Avatar.tpl';
import Block from '../../utils/Block';
import { IAvatar } from '../../utils/Interfaces';

import './Avatar.less';

export default class Avatar extends Block<IAvatar> {
    render() {
        return this.compile(tpl, {
            url: this.props.url,
        });
    }
}
