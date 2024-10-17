interface BaseResponse<T> {
    mensaje: string;
    satisfactorio: boolean;
    tiempoEnMilisegundos: number;
    data: T | null;
}

export {
    BaseResponse
}