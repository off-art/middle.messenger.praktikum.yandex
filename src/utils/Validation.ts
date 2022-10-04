export default class Validation {
    password = (value: string): boolean =>
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,40}$/.test(value);

    phone = (value: string): boolean =>
        this.checkLength(10, 15, value) && /^[+]?[0-9]+$/.test(value) && this.checkEmptyValue(value);

    message = (value: string): boolean => this.checkEmptyValue(value);

    email = (value: string): boolean =>
        /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value) && this.checkEmptyValue(value);

    login = (value: string): boolean =>
        this.checkLength(3, 20, value) && /^[A-Za-z0-9_-]+$/.test(value) && !this.checkValueOnNumbers(value);

    names = (value: string): boolean => /^[A-ZА-Я]+[A-Za-zа-яА-Я-]+$/.test(value) && this.checkEmptyValue(value);

    confirmPassword = (input: HTMLInputElement, value: string): boolean => {
        const form = input.closest('form') as HTMLFormElement;
        const inputInForm = form.querySelector('#password') as HTMLInputElement;
        return inputInForm.value === value && this.checkEmptyValue(value);
    };

    check = (form: HTMLFormElement): boolean => {
        let isValid = true;
        const inputs = form.querySelectorAll('[data-required=true]');
        inputs.forEach((input: HTMLInputElement) => {
            if (input.id === 'confirm_password') {
                if (!this.confirmPassword(input, input.value)) {
                    this.showError(input);
                }
                return;
            }
            if (input.id === 'display_name' || input.id === 'old_password') {
                if (!this.checkEmptyValue(input.value)) {
                    this.showError(input);
                }
                return;
            }

            if (
                // @ts-ignore
                !this[input.id === 'first_name' || input.id === 'second_name' ? 'names' : input.id](input.value)
            ) {
                isValid = false;
                this.showError(input);
            }
        });
        return isValid;
    };

    checkLength = (min: number, max: number, value: string): boolean => value.length >= min && value.length <= max;

    checkEmptyValue = (value: string): boolean => value !== '';

    checkValueOnNumbers = (value: string): boolean => /^\d+$/.test(value);

    showError = (input: HTMLInputElement, message?: string): void => {
        const errorContainer = input.nextElementSibling as HTMLElement;
        errorContainer.textContent = message || `${input.id} заполнен неверно`;
    };

    hideError = (input: HTMLInputElement): void => {
        const errorContainer = input.nextElementSibling as HTMLElement;
        errorContainer.textContent = '';
    };
}
