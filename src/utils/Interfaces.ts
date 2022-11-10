export interface ITempObj {
    [key: string | symbol]: string | undefined | number | object | boolean;
}

export type TPropsDefault = {
    [propName: string]: any;
};

export interface IUser {
    avatar: string;
    display_name: string;
    email: string;
    first_name: string;
    login: string;
    phone: string;
    second_name: string;
}

export interface ILastMessage {
    content: string;
    id: number;
    time: string;
    user: IUser;
}

export interface IChat {
    avatar: string | null;
    created_by: number;
    id: number;
    title: string;
    unread_count: number;
    last_message: ILastMessage;
}

export interface IFormInput {
    name: string;
    id: string;
    type: string;
    required: boolean;
}

export interface IErrorPageBlock {
    errorNumber: string | number;
    errorMessage: string;
}

export interface IChangeInfoBlock {
    item: string;
    info: string;
    id: string;
    type: string;
    className: string;
    required: boolean;
}

export interface IAvatar {
    url: string;
}

export interface IInfoBlock {
    item: string;
    info?: string;
    className: string;
}

export interface IMessage {
    chat_id: number;
    content: string;
    file: null;
    id: number;
    is_read: boolean;
    time: string;
    type: string;
    user_id: number;
}

export interface ISignForm {
    formName: string;
    submitName: string;
    submitSubName: string;
    routeSubName: string;
    forms: any;
    id: string;
}

export interface ILoginFormModel {
    login: string;
    password: string;
}

export interface RegFormModel {
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    password: string;
}
