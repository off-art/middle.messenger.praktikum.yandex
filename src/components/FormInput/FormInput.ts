import { IFormInput } from '../../utils/Interfaces';
import { tpl } from './FormInput.tpl';
import Block from '../../utils/Block';

import './FormInput.less';

export default class FormInput extends Block<IFormInput> {
    render() {
        return this.compile(tpl, {
            name: this.props.name,
            id: this.props.id,
            type: this.props.type,
            required: this.props.required,
        });
    }
}
