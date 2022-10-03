import { tpl } from './Wrapper.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './Wrapper.less';

type TProps = {} & TPropsDefault;

export default class Wrapper extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            children: this.children,
        });
    }
}
