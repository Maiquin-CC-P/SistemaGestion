import { AccionFilter, AccionTable } from "../../enums/acciones-table.enum";

interface TableDefaultPageSettings {
    searchString: string;
    colletionSize: number;
    page: number;
    pageSize: number;
}

interface TableBase {
    id: string;
    name: string;
    title: string;
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark';
    icon: string;
    disabled: boolean;
    disabled2: boolean;
}

interface TableAction extends TableBase{
    eventEmit: AccionTable;
}

interface FilterAction extends TableBase{
    eventEmit: AccionFilter;
}

interface TableOtherAction<T> {
    item: T,
    buttonEvent: AccionTable
}

interface FilterOtherAction {
    buttonEvent: AccionFilter
}

interface ColumnsProperties<T> {
    nameColumn: string;
    nameRow: (keyof T);
}

export {
    TableDefaultPageSettings,
    TableAction,
    TableOtherAction,
    FilterAction,
    FilterOtherAction,

    ColumnsProperties
}