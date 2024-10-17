interface ScheduleListResult {
    idCronograma: number;
    idProyecto: number;
    semana: number;
    idUbicacion: number;
    ubicacion: string;
    idEstado: number;
    totalElements: number;

    avanceProgSemana: number;
    avanceProg: number;
    avanceReProgSemana: number;
    avanceReProg: number;
    avanceRealSemana: number;
    avanceReal: number;
    flagReprogramado: boolean;
    rangoSemana: string;
    nombreSemana: string;

    idUltimaSemana: number;
}

export {
    ScheduleListResult
}