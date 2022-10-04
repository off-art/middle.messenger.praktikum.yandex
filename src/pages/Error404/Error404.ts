import Wrapper from '../../layout/Wrapper/Wrapper';
import ErrorPageBlock from '../../components/ErrorPageBlock/ErrorPageBlock';

const Error404Page = new Wrapper({
    children: new ErrorPageBlock({
        errorNumber: 404,
        errorMessage: 'Не туда попали',
    }),
});

export default Error404Page;
