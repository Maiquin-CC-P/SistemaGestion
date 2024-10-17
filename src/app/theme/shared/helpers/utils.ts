// import { environment } from "src/environments/environment";
import { CONTENT_TYPE } from "./headers";
import { Injectable } from "@angular/core";
import Swal from "sweetalert2"
import { FilterAction, TableAction, TableDefaultPageSettings } from "../model/helpers/utils";
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { NotifierService } from "angular-notifier";
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";
import { ConfigService } from "src/services/config.service";
import { AccionFilter, AccionTable } from "../enums/acciones-table.enum";
import { ModelParams } from "./types";

@Injectable({
    providedIn: 'root'
})
export class Utils {

    @BlockUI() blockUI!: NgBlockUI;

    constructor(
        private configService: ConfigService,
        public parserFormatter: NgbDateParserFormatter,
        private notifier: NotifierService
    ) { }

    blockUIStart(message: string): void {
        this.blockUI.start(message);
    }

    blockUIStop(): void {
        this.blockUI.stop();
    }

    getPageOptions(): number[] {
        return [10, 25, 50, 100]
    }

    getTableDefaultPageSettings(searchString: string = '', colletionSize: number = 0, page: number = 1, pageSize: number = 10): TableDefaultPageSettings {
        return {
            searchString,
            colletionSize,
            page,
            pageSize
        }
    }

    showNotification(type: 'default' | 'info' | 'success' | 'warning' | 'error', message: string | unknown): void {
        this.notifier.notify(type, String(message));
    }

    //#region Ayuda a la llamada de las apis
    onGetUrlService(urlServicio: string, flagVersion: boolean = false): string {
        if (flagVersion) {
            return `${this.configService.apiUrl}/v1${urlServicio}`;
        } else {
            return `${this.configService.apiUrl}${urlServicio}`;
        }
        // return `${environment.apiUrl}${urlServicio}`;
    }

    onGetHeader(): Headers {
        return new Headers({
            'Content-Type': CONTENT_TYPE.json,
        })
    }

    onGetHeaderObj(): object {
        return {
            'Content-Type': CONTENT_TYPE.json
        }
    }

    buildQueryString<T>(params: T, flagCapitalLetter: boolean = false): string {
        const queryStringParams: string[] = [];
        if (params) {
            for (const [key, value] of Object.entries(params)) {
                if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                    queryStringParams.push(`${encodeURIComponent(!flagCapitalLetter ? key : this.capitalizeFirstLetter(key))}=${encodeURIComponent(value.toString())}`);
                }
            }
        }
        return `?${queryStringParams.join('&')}`;
    }

    capitalizeFirstLetter(text: string) {
        if (text.length === 0) return text; // Maneja cadenas vacías
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    
    //#endregion

    //#region
    async mostrarConfirmacion(text: string, flagButonConf: boolean = true, icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'question'): Promise<boolean> {

        return Swal.fire({
            title: 'Confirmación',
            text: text,
            icon,
            showCancelButton: flagButonConf,
            confirmButtonText: `${flagButonConf ? 'Sí' : 'Ok'}`,
            cancelButtonText: 'No',
            customClass: {
                confirmButton: 'btn btn-danger',
                cancelButton: 'btn btn-primary'
            }
        }).then((result) => {
            return result.isConfirmed;
        });
    }

    //#endregion

    onObtenerValoresUnicos<T>(data: T[], nameColumn: (keyof T), nameColumn2: (keyof T) | null = null, nameColumn3: (keyof T) | null = null): T[] {
        return JSON.parse(JSON.stringify(data.filter((valor, indice, array) => {
            return array.findIndex(p =>
                p[nameColumn] === valor[nameColumn] &&
                (nameColumn2 ? p[nameColumn2] === valor[nameColumn2] : true) &&
                (nameColumn3 ? p[nameColumn3] === valor[nameColumn3] : true)
            ) === indice;
        })));
    }

    onfechaYYYYMMDD_Sep(fecha: string, separador: string): string {
        if (fecha.split(' ').length > 1) {
            const fechaArr = fecha.split(' ')[0].split(separador);
            return `${fechaArr[0].length === 4 ? fechaArr[0] : fechaArr[2]}${fechaArr[1].padStart(2, "0")}${fechaArr[2].length <= 2 ? fechaArr[2].padStart(2, "0") : fechaArr[0].padStart(2, "0")}`;
        }
        else {
            const fechaArr = fecha.split(separador);
            return `${fechaArr[0].length === 4 ? fechaArr[0] : fechaArr[2]}${fechaArr[1].padStart(2, "0")}${fechaArr[2].length <= 2 ? fechaArr[2].padStart(2, "0") : fechaArr[0].padStart(2, "0")}`
        }
    }

    onFechaControl(fecha: string, separador: string): string {
        if (fecha.split(' ').length > 1) {
            const fechaArr = fecha.split(' ')[0].split(separador);
            if (!fechaArr) return '';

            const flagDayIni = fechaArr[0].length === 4 ? true : false;
            return this.parserFormatter.format({
                year: Number(fechaArr[flagDayIni ? 0 : 2]),
                month: Number(fechaArr[1]),
                day: Number(fechaArr[flagDayIni ? 2 : 0])
            })
        } else {

            const fechaArr = fecha.split(separador);
            if (!fechaArr) return '';

            const flagDayIni = fechaArr[0].length === 4 ? true : false;
            return this.parserFormatter.format({
                year: Number(fechaArr[flagDayIni ? 0 : 2]),
                month: Number(fechaArr[1]),
                day: Number(fechaArr[flagDayIni ? 2 : 0])
            })
        }
    }

    onConvertDateTimeToOnject(cantMonthAdd: number = 0) {
        const now = new Date();
        const oneMonthAgo = new Date(now);
        oneMonthAgo.setMonth(now.getMonth() + cantMonthAdd);
        return this.parserFormatter.format({
            year: oneMonthAgo.getFullYear(),
            month: oneMonthAgo.getMonth() + 1,
            day: oneMonthAgo.getDate()
        })
    }

    onCopyTable<T>(data: T[]): T[] {
        return JSON.parse(JSON.stringify(data));
    }

    onGenerateItemTableAction(title: string, color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark', icon: string, accionTable: AccionTable, disabled: boolean = false,
        id: string = '', name: string = ''): TableAction {
        const item: TableAction = {
            id,
            name,
            title,
            color,
            icon,
            eventEmit: accionTable,
            disabled,
            disabled2: false
        };

        return item;
    }

    onGenerateItemFilterAction(title: string, color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark', icon: string, accionTable: AccionFilter, disabled: boolean = false,
        id: string = '', name: string = ''): FilterAction {
        const item: FilterAction = {
            id,
            name,
            title,
            color,
            icon,
            eventEmit: accionTable,
            disabled,
            disabled2: false
        };

        return item;
    }

    onCDtt(dateStr: string): Date {
        try {
            // Dividir el string en partes usando espacios y los caracteres de barra
            const [datePart, timePart] = dateStr.split(' ');
            const [day, month, year] = datePart.split('/').map(Number);
            const [hours, minutes, seconds] = timePart.split(':').map(Number);

            const date = new Date(year, month - 1, day, hours, minutes, seconds);
            if (isNaN(date.getTime())) {
                return new Date('1900-01-01');
            }
            return date;
        } catch (e) {
            return new Date('1900-01-01');
        }
    }

    convertToString<T>(value: ModelParams<T>): string {
        if (typeof value === 'string') {
            return value.toLowerCase();
        } else if (typeof value === 'number' || typeof value === 'boolean') {
            return value.toString().toLowerCase();
        }
        return '';
    }

    async convertFileToBase64(file: File): Promise<string> {
        const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => {
                this.showNotification('error', error);
                reject('');
            };
        });

        return base64;
    }

    onWindowsOpen(url: string) {
        window.open(url, '_blank');
    }

    onConvertHexToRgb(hex: string): string {
        // Eliminar el símbolo de almohadilla si está presente
        hex = hex.replace(/^#/, '');

        // Verificar si el valor hexadecimal es válido (6 dígitos)
        if (hex.length !== 6) {
            throw new Error('Formato hexadecimal inválido');
        }

        // Convertir cada par hexadecimal a decimal
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return `${r}|${g}|${b}`;
    }

    filterByCriteria<T>(item: T, filters: T): boolean {
        return Object.keys(filters!).every(key => {
            const filterValue = filters[key as keyof T];
            if (filterValue === undefined || filterValue === null || filterValue === '' || filterValue === 0) {
                return true; // Si no hay filtro, pasamos el ítem
            }
            const itemValue = item[key as keyof T];

            // Convertir el valor del ítem a cadena si es necesario
            const itemValueString = this.convertToString(itemValue);

            // Comparar el valor del ítem con el valor del filtro
            return itemValueString.includes(filterValue.toString().toLowerCase());
        });
    }

    onGenObjFilter<T>(): T {
        const itemValue: Partial<T> = {}; // Usamos Partial para inicializar el objeto
        const item: Partial<T> = {}; // Usamos Partial para inicializar el objeto

        for (const key in item) {
            if (typeof item[key] === 'number') {
                itemValue[key as keyof T] = 0 as T[keyof T]; // Asignamos 0 si es número
            } else if (typeof item[key] === 'string') {
                itemValue[key as keyof T] = '' as T[keyof T]; // Asignamos '' si es string
            }
        }

        return itemValue as T;
    }
}

