export const required = value => value ? undefined : 'Required';
export const minValueChar = min => value => value.length && value.length < min ? `Must be at least ${min} characters` : undefined;
export const minValue5 = minValueChar(5);
export const email = value =>value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;