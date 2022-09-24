import tpl from './ErrorPage.hbs';
import WrapperCenterPage from '../../layout/Wrapper/Wrapper';
import './ErrorPage.less';

export default props => WrapperCenterPage({children: tpl(props)});