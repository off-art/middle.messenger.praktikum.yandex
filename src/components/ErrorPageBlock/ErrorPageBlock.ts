import { IErrorPageBlock } from '../../utils/Interfaces';
import { tpl } from './ErrorPageBlock.tpl';
import Block from '../../utils/Block';

import './ErrorPageBlock.less';

export default class ErrorPageBlock extends Block<IErrorPageBlock> {
    render() {
        return this.compile(tpl, {
            errorNumber: this.props.errorNumber,
            errorMessage: this.props.errorMessage,
        });
    }
}
