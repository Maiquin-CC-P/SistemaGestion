import { FormControl } from "@angular/forms"

interface ScheduleForm {
    semana: FormControl;
    avanceProgramadoSem: FormControl;
    avanceProgramado: FormControl;
    flagReprogramado: FormControl;
    avanceReProgramadoSem: FormControl;
    avanceReProgramado: FormControl;
    avanceRealSem: FormControl;
    avanceReal: FormControl;
}

export {
    ScheduleForm
}