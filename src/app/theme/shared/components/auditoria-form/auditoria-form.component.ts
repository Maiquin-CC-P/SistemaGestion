import { Component, Input, TemplateRef } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auditoria-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './auditoria-form.component.html',
  styleUrl: './auditoria-form.component.scss'
})
export class AuditoriaFormComponent {
  @Input() fechaCreacion!: string;
  @Input() usuarioCreacion!: string;
  @Input() fechaModificacion!: string;
  @Input() usuarioModificacion!: string;

  isCollapsed: boolean = true;
  constructor(
    private modalService: NgbModal,
  ) { }

  onOpenModal(modal: TemplateRef<string>): void {
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', size: 'sm' });
  }
}
