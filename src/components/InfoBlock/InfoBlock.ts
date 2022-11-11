import { IInfoBlock } from '../../utils/Interfaces';
import { tpl } from './InfoBlock.tpl';
import Block from '../../utils/Block';

import './InfoBlock.less';

export default class InfoBlock extends Block<IInfoBlock> {
    render() {
        return this.compile(tpl, {
            item: this.props.item,
            info: this.props.info,
            className: this.props.className,
        });
    }
}
