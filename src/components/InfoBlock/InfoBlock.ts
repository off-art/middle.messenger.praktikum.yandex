import { TPropsDefault } from '../../utils/Interfaces';
import { tpl } from './InfoBlock.tpl';
import Block from '../../utils/Block';

import './InfoBlock.less';

type TProps = {
    item: string;
    info?: string;
} & TPropsDefault;

export default class InfoBlock extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            item: this.props.item,
            info: this.props.info,
            classNames: this.props.classNames,
        });
    }
}
