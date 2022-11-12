// eslint-disable-next-line import/no-unresolved
import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import Block from './Block';
import Router from './Router';
import { TPropsDefault } from './Interfaces';

class TestPage extends Block<TPropsDefault> {
    render() {
        return this.compile('<h1>Page</h1>', {});
    }
}

describe('Router test', () => {
    beforeEach(() => {
        const { window } = new JSDOM(
            `<html>
         <body>
          <div id="root"></div>
         </body>
       </html>`,
            { url: 'http://localhost' },
        );
        // @ts-ignore
        global.window = window;
        global.document = window.document;
    });

    it('check use function', () => {
        const expTestPage = new TestPage({});
        const router = new Router('root');
        router.use('/', expTestPage);
        expect(router.routes.length).to.eq(1);
    });

    it('check go function', () => {
        const expTestPage = new TestPage({});
        const router = new Router('root');
        router.use('/some-url', expTestPage);
        router.go('/some-url');
        // @ts-ignore
        expect(router.currentRoute?._pathname).to.eq('/some-url');
    });
});
