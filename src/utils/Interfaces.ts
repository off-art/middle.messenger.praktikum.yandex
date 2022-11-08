export interface ITempObj {
    [key: string | symbol]: string | undefined | number | object | boolean;
}

export type TPropsDefault = {
    [propName: string]: any;
};
