import Wrapper from '../../layout/Wrapper/Wrapper';
import ErrorPageBlock from '../../components/ErrorPageBlock/ErrorPageBlock';

const Error500Page = new Wrapper({
    children: new ErrorPageBlock({
        errorNumber: 500,
        errorMessage: 'Мы уже фиксим',
    }),
});

export default Error500Page;
