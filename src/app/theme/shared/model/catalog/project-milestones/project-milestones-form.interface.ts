import { FormControl } from "@angular/forms";

interface ProjectMilestonesForm {
    idPartidaPrincipal: FormControl;
    idSemana: FormControl;
    idPartida: FormControl;
    programado: FormControl;
    ejecutado: FormControl;
}

export {
    ProjectMilestonesForm
}