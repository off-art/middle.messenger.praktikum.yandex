import { IChangeInfoBlock, TPropsDefault } from '../../utils/Interfaces';
import { tpl } from './ChangeInfoBlock.tpl';
import Block from '../../utils/Block';

import './ChangeInfoBlock.less';

export default class ChangeInfoBlock extends Block<IChangeInfoBlock & TPropsDefault> {
    render() {
        return this.compile(tpl, {
            item: this.props.item,
            info: this.props.info,
            id: this.props.id,
            type: this.props.type,
            className: this.props.className,
            required: this.props.required,
        });
    }
}
