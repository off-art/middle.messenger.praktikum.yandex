import { TPropsDefault } from '../../utils/Interfaces';
import { tpl } from './FormInput.tpl';
import Block from '../../utils/Block';

import './FormInput.less';

type TProps = {
    name: string;
    id: string;
    type: string;
    required: boolean;
} & TPropsDefault;

export default class FormInput extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            name: this.props.name,
            id: this.props.id,
            type: this.props.type,
            required: this.props.required,
        });
    }
}
