import { Injectable } from "@angular/core";
import { RequestMethod } from "../../helpers/request-method";
import { Utils } from "../../helpers/utils";
import { GrupoMotivoListParams } from "../../model/global/grupo-motivo/grupo-motivo-params.interface";
import { Observable } from "rxjs";
import { GrupoMotivoListResult } from "../../model/global/grupo-motivo/grupo-motivo-result.interface";
import { GRUPOMOTIVO } from "../../constants/url-global.constant";

@Injectable({
    providedIn: 'root'
})

export class GrupoMotivoService {
    private requestMethod = new RequestMethod();
    constructor(
        private utilsService: Utils
    ) {

    }

    list(params: GrupoMotivoListParams): Observable<GrupoMotivoListResult[]> {
        const queryString = this.utilsService.buildQueryString(params);
        return this.requestMethod.get(
            this.utilsService.onGetUrlService(GRUPOMOTIVO.list),
            queryString,
            this.utilsService.onGetHeader()
        );
    }
}