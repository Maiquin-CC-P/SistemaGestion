import { Injectable } from "@angular/core";
import { RequestMethod } from "../../helpers/request-method";
import { Utils } from "../../helpers/utils";
import { TablaMaestraDropDownP, TablaMaestraListP, TablaMaestraListParametroCustomParams, TablaMaestraListParametroParams, TablaMaestraSave } from "../../model/global/tabla-maestra-params";
import { Observable } from "rxjs";
import { TablaMaestraCombo, TablaMaestraList, TablaMaestraListParametroResult, TablaMaestraParametroCustomResult } from "../../model/global/tabla-maestra.interface";
import { TABLAMAESTRA } from "../../constants/url.constant";
import { EMessage } from "../../model/helpers/e-message.interface";

@Injectable({
    providedIn: 'root'
})
export class TablaMaestraService {
    private requestMethod = new RequestMethod();
    constructor(
        private utilsService: Utils
    ) {

    }

    list(params: TablaMaestraListP): Observable<TablaMaestraList[]> {
        const queryString = this.utilsService.buildQueryString(params);
        return this.requestMethod.get(
            this.utilsService.onGetUrlService(TABLAMAESTRA.list),
            queryString,
            this.utilsService.onGetHeader()
        );
    }

    dropDown(params: TablaMaestraDropDownP): Observable<TablaMaestraCombo[]> {
        const queryString = this.utilsService.buildQueryString(params);
        return this.requestMethod.get(
            this.utilsService.onGetUrlService(TABLAMAESTRA.dropDown),
            queryString,
            this.utilsService.onGetHeader()
        );
    }
    
    save(params: TablaMaestraSave): Observable<EMessage> {
        return this.requestMethod.post(
            this.utilsService.onGetUrlService(TABLAMAESTRA.save),
            JSON.stringify(params),
            this.utilsService.onGetHeader()
        );
    }

    // seguridad
    listParametro(params: TablaMaestraListParametroParams): Observable<TablaMaestraListParametroResult[]> {
        const queryString = this.utilsService.buildQueryString(params);
        return this.requestMethod.get(
            this.utilsService.onGetUrlService(TABLAMAESTRA.listParametro),
            queryString,
            this.utilsService.onGetHeader()
        );
    }

    listParametroCustom(params: TablaMaestraListParametroCustomParams): Observable<TablaMaestraParametroCustomResult[]> {
        const queryString = this.utilsService.buildQueryString(params);
        return this.requestMethod.get(
            this.utilsService.onGetUrlService(TABLAMAESTRA.listParametroCustom),
            queryString,
            this.utilsService.onGetHeader()
        );
    }
}