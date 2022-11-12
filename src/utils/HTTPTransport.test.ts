import { expect } from 'chai';
import HTTPTransport from './HTTPTransport';

describe('HTTP Methods', () => {
    beforeEach(() => {
        // eslint-disable-next-line global-require
        global.XMLHttpRequest = require('xhr2');
    });

    it('check get method', () => {
        const http = new HTTPTransport('https://jsonplaceholder.typicode.com');
        return http.get('/posts/1').then((value) => {
            // @ts-ignore
            expect(value.status).to.equal(200);
        });
    });

    it('check Post method', () => {
        const http = new HTTPTransport('https://jsonplaceholder.typicode.com');
        return http
            .post('/posts', {
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'fooTest',
                    body: 'bar',
                    userId: 1,
                }),
            })
            .then((value) => {
                // @ts-ignore
                expect(JSON.parse(value.responseText).title).to.equal('fooTest');
            });
    });

    it('check Put method', () => {
        const http = new HTTPTransport('https://jsonplaceholder.typicode.com');
        return http
            .put('/posts/1', {
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    id: 1,
                    title: 'fooT2',
                    body: 'bar',
                    userId: 1,
                }),
            })
            .then((value) => {
                // @ts-ignore
                expect(JSON.parse(value.responseText).title).to.equal('fooT2');
            });
    });

    it('check Delete method', () => {
        const http = new HTTPTransport('https://jsonplaceholder.typicode.com');
        return http
            .delete('/posts/1', {
                headers: {
                    'content-type': 'application/json',
                },
            })
            .then((value) => {
                // @ts-ignore
                expect(value.status).to.equal(200);
            });
    });
});
