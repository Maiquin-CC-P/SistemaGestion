import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { FormControl } from '@angular/forms';
import { WeekDropDown } from '../../../model/global/week-drop-down-result.interface';
import { NgSelectModule } from '@ng-select/ng-select';
import { WeekDropDownData } from './smock/week-drop-down-data';

@Component({
  selector: 'app-week-drop-down',
  standalone: true,
  imports: [SharedModule, NgSelectModule],
  templateUrl: './week-drop-down.component.html',
  styleUrl: './week-drop-down.component.scss'
})
export class WeekDropDownComponent implements OnInit {
  @Input() flagProyecto: boolean = true;
  @Input() idProyecto: number = 0;
  @Input() idProyectoServicio: number = 0;
  @Input() control: FormControl | null = null;
  @Input() flagHabilitado: boolean = false;
  @Input() flagReporte: boolean = false;
  @Output() itemEmit: EventEmitter<WeekDropDown> = new EventEmitter<WeekDropDown>();

  optNroSemana: WeekDropDown[] = [];
  constructor(
    // private semanaComboService: SemanaComboService,
    // private reporteAvanceService: ReporteAvanceService,
    // private proyectoService: ProyectoService
  ) { }

  ngOnInit(): void {
    // if (this.flagProyecto) {
    //   if (this.flagReporte) {
    //     this.reporteAvanceService.onProyectoChange.subscribe((data: number) => {
    //       // this.idProyecto = data;
    //       if (data) {
    //         this.idProyecto = data;
    //         this.onComboSemana();
    //       }
    //     });
    //   } else {
    //     this.onComboSemana();
    //   }
    // }
    // else
    // {
    //   this.onComboSemanaServicio();
    // }
    this.onComboSemana();

  }

  onComboSemana(): void {
    // this.semanaComboService.semanaCombo({
    //   idProyecto: this.idProyecto,
    //   idSemana: 0
    // }).subscribe((res: WeekDropDown[]) => {
    //   this.optNroSemana = res;
    // }, error => {

    // })
    this.optNroSemana = WeekDropDownData;
    console.log("🚀 ~ WeekDropDownComponent ~ onComboSemana ~ this.optNroSemana:", this.optNroSemana)
  }

  // onComboSemanaServicio(): void {
  //   this.proyectoService.comboSemanaServio({
  //     idProyecto: this.idProyecto,
  //     idProyectoServicio: this.idProyectoServicio,
  //     idSemana: 0
  //   }).subscribe((res: WeekDropDown[]) => {
  //     this.optNroSemana = res;
  //   }, error => {

  //   })
  // }

  onItemSelected(event: WeekDropDown): void {
    const item = this.optNroSemana.find(x => x.idSemana === 1);
    if (item) {
      event.fechaOriginalIni = item.fechaInicio;
      this.itemEmit.emit(event);
    }
  }
}
