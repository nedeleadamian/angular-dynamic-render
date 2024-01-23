import { Injectable, TemplateRef, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { openPopup, VariantType } from './popup/popup.component';

@Injectable()
export class SimplePopupService {
  constructor(private readonly dialog: MatDialog) {}

  openPopup(content: string, title: string, variant: VariantType): void;
  openPopup(
    content: TemplateRef<unknown>,
    title: string,
    variant: VariantType,
  ): void;
  openPopup(content: Type<unknown>, componentInputs?: {}): void;
  openPopup(
    content: string | TemplateRef<unknown> | Type<any>,
    componentInputs?: {},
    title?: string,
    variant?: VariantType,
  ) {
    if (typeof content === 'string' && title && variant) {
      openPopup(this.dialog, {
        content,
        title,
        variant,
      });
      return;
    }

    if (content instanceof TemplateRef && title && variant) {
      openPopup(this.dialog, { content, title, variant });
      return;
    }

    if (content instanceof Type) {
      openPopup(this.dialog, { content, componentInputs });
      return;
    }

    throw new Error('Invalid arguments');
  }
}
