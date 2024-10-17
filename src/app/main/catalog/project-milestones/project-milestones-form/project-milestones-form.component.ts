import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Utils } from 'src/app/theme/shared/helpers/utils';
import { ProjectMilestonesForm } from 'src/app/theme/shared/model/catalog/project-milestones/project-milestones-form.interface';
import { ProjectMilestonesListResult } from 'src/app/theme/shared/model/catalog/project-milestones/project-milestones-result.interface';
import { TablaMaestraCombo } from 'src/app/theme/shared/model/global/tabla-maestra.interface';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { WeekDropDownComponent } from "../../../../theme/shared/components/controls/week-drop-down/week-drop-down.component";

@Component({
  selector: 'app-project-milestones-form',
  standalone: true,
  imports: [SharedModule, WeekDropDownComponent],
  templateUrl: './project-milestones-form.component.html',
  styleUrl: './project-milestones-form.component.scss'
})
export class ProjectMilestonesFormComponent implements OnInit {
  @Input() idProyecto: number = 0;
  @Input() item: ProjectMilestonesListResult | null = null;


  private modalResult$: Subject<null> = new Subject<null>();
  formInsertUpdate: FormGroup<ProjectMilestonesForm>;

  optPartida: TablaMaestraCombo[] = [];
  get control() {
    return this.formInsertUpdate.controls;
  }

  constructor(
    private modalActiveService: NgbActiveModal,
    private formBuilder: FormBuilder,
    private utilsService: Utils
  ) {
    this.formInsertUpdate = this.formBuilder.group({
      idPartidaPrincipal: [0],
      idSemana: [1],
      idPartida: [1],
      programado: [0],
      ejecutado: [0]
    });
  }

  async ngOnInit(): Promise<void> {


    // this.optPartida = await this.onListarMaestros(127);
      this.onEdit();
  }

  close(): void {
    this.modalResult$.next(null);
    this.modalResult$.complete();
    this.modalActiveService.close('');
  }

  async onSave(): Promise<void> {

  }

  onEdit(): void {
    if (this.item) {
      this.control.idPartidaPrincipal.setValue(this.item.idPartidaPrincipal);
      this.control.idSemana.setValue(this.item.idSemana);
      this.control.idPartida.setValue(this.item.idPartida);
      this.control.programado.setValue(this.item.programado);
      this.control.ejecutado.setValue(this.item.ejecutado);
    }
  }

  // async onListarMaestros(idTabla: number): Promise<TablaMaestra[]> {
  //   return await this.tablaMaestraService.listar({
  //     idTabla: idTabla
  //   }).then((response: TablaMaestra[]) => response, error => [])
  //     .catch(error => []);
  // }
}
