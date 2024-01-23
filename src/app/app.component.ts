import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenWithComponentComponent } from './open-with-component/open-with-component.component';
import { OpenWithHtmlComponent } from './open-with-html/open-with-html.component';
import { OpenWithTextComponent } from './open-with-text/open-with-text.component';
import { SimplePopupService } from './simple-popup.service';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatDialogModule,
    OpenWithComponentComponent,
    OpenWithHtmlComponent,
    OpenWithTextComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'interview-modal';
}
