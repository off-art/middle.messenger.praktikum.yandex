import { TPropsDefault } from '../../utils/Interfaces';
import { tpl } from './ChangeInfoBlock.tpl';
import Block from '../../utils/Block';

import './ChangeInfoBlock.less';

type TProps = {
    item: string;
    info: string;
    id: string;
    type: string;
    required: boolean;
} & TPropsDefault;

export default class ChangeInfoBlock extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            item: this.props.item,
            info: this.props.info,
            id: this.props.id,
            type: this.props.type,
            classNames: this.props.classNames,
            required: this.props.required,
        });
    }
}
