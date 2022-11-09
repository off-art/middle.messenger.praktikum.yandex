import { tpl } from './SignForm.tpl';
import Block from '../../utils/Block';
import { ISignForm } from '../../utils/Interfaces';

import './SignForm.less';

export default class SignForm extends Block<ISignForm> {
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
