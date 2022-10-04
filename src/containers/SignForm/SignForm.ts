import { tpl } from './SignForm.tpl';
import Block from '../../utils/Block';
import { TPropsDefault } from '../../utils/Interfaces';

import './SignForm.less';

type TProps = {
    formName: string;
    submitName: string;
    submitSubName: string;
    routeSubName: string;
} & TPropsDefault;

export default class SignForm extends Block<TProps> {
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
