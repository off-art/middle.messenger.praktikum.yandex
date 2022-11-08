import { tpl } from './Avatar.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './Avatar.less';

type TProps = {
    url: string;
} & TPropsDefault;

export default class Avatar extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            url: this.props.url,
        });
    }
}
