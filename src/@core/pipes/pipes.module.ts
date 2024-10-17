import { NgModule } from "@angular/core";
import { inactivoPipe } from "./inactivo.pipe";
import { colorSolicitudPipe } from "./colorSolicitud.pipe";
import { elementPipe } from "./element.pipe";
import { truncatePipe } from "./truncate.pipe";

@NgModule({
    declarations: [inactivoPipe, colorSolicitudPipe, elementPipe, truncatePipe],
    exports: [inactivoPipe, colorSolicitudPipe, elementPipe, truncatePipe]
})
export class CorePipesModule { }