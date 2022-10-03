import { TPropsDefault } from '../../utils/Interfaces';
import { tpl } from './ErrorPageBlock.tpl';
import Block from '../../utils/Block';

import './ErrorPageBlock.less';

type TProps = {
    errorNumber: string | number;
    errorMessage: string;
} & TPropsDefault;

export default class ErrorPageBlock extends Block<TProps> {
    render() {
        return this.compile(tpl, {
            errorNumber: this.props.errorNumber,
            errorMessage: this.props.errorMessage,
        });
    }
}
