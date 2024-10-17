interface CheckboxGroup {
    title: string;
    child: CheckboxAdd[]
}

interface CheckboxAdd {
    id: string;
    idRegistro: number;
    name: string; 
    checked: boolean;
    label: string;
    color: string;
}

export {
    CheckboxGroup, 
    CheckboxAdd
}