export interface ITempObj {
    [key: string | symbol]: string | undefined | number | object | boolean;
}

export interface IOptionsTransfer {
    data: Document | XMLHttpRequestBodyInit | null | undefined | {};
    method: string;
    timeout: number;
    headers: { [key: string]: string };
}

export type TPropsDefault = {
    [propName: string]: any;
};
