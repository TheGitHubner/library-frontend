import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.css'],
  standalone: true,
  imports: [MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalConfirmacaoComponent {
  readonly dialogRef = inject(MatDialogRef<ModalConfirmacaoComponent>);
  constructor(

  ) {}

  public confirma(): void {
    this.dialogRef.close(true);
  }

  public cancela(): void {
    this.dialogRef.close(false);
  }

}
