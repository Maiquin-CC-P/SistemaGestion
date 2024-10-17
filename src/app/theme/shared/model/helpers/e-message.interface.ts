import { TipoRetorno } from "../../enums/tipo-retorno.enum";

export interface EMessage {
    tipo: TipoRetorno;
    mensaje: string;
}