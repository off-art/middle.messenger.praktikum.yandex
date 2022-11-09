export class BaseApi {
    create(): Promise<unknown> {
        throw new Error('Not implemented');
    }

    request(): Promise<unknown> {
        throw new Error('Not implemented');
    }

    update(): Promise<unknown> {
        throw new Error('Not implemented');
    }

    delete(): Promise<unknown> {
        throw new Error('Not implemented');
    }
}
