import { tpl } from './Wrapper.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './Wrapper.less';

export default class Wrapper extends Block<TPropsDefault> {
    render() {
        return this.compile(tpl, {
            children: this.children,
            backArrow: this.props.backArrow,
        });
    }
}
