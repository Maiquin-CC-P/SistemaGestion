import { InputTypeParams } from "../../helpers/types";

interface DynamicControlProperties {
    id: string;
    name: string;
    type: 'checkbox' | 'text';
    // model: boolean | string
}

interface FilterParams<T> {
    nameItem: keyof T;
    type: InputTypeParams;
}

export {
    DynamicControlProperties,
    FilterParams
}