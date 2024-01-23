import {
  Component,
  Inject,
  OnInit,
  TemplateRef,
  Type,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

export type VariantType = 'primary' | 'accent' | 'warn';

export interface IPopupData {
  content: string | TemplateRef<unknown> | Type<unknown>;
  componentInputs?: {};
  title?: string;
  variant?: VariantType;
}

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButton],
})
export class PopupComponent implements OnInit {

  templateRef?: TemplateRef<unknown>;
  componentRef?: Type<unknown>;
  componentInputs?: {};
  content?: string;


  title?: string;
  variant?: string;

  constructor(@Inject(MAT_DIALOG_DATA) data: IPopupData) {
    if (data.content instanceof Type) {
      this.componentRef = data.content;
      this.componentInputs = data.componentInputs;
      return;
    }
    if (typeof data.content === 'string') {
      this.content = data.content;
    }
    if (data.content instanceof TemplateRef) {
      this.templateRef = data.content;
    }

    this.title = data.title;
    this.variant = data.variant;
  }

  ngOnInit() {}
}

export function openPopup(dialog: MatDialog, data: IPopupData) {
  dialog.open(PopupComponent, {
    data,
  });
}
