import { tpl } from './SignForm.tpl';
import Block from '../../utils/Block';
import { ISignForm, TPropsDefault } from '../../utils/Interfaces';

import './SignForm.less';

export default class SignForm extends Block<ISignForm & TPropsDefault> {
    render() {
        return this.compile(tpl, {
            forms: this.props.forms,
            formName: this.props.formName,
            submitName: this.props.submitName,
            submitSubName: this.props.submitSubName,
            routeSubName: this.props.routeSubName,
            id: this.props.id,
        });
    }
}
