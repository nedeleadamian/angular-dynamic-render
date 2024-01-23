import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SimplePopupService } from '../simple-popup.service';

@Component({
  selector: 'app-open-with-html',
  templateUrl: './open-with-html.component.html',
  styleUrls: ['./open-with-html.component.css'],
  standalone: true,
  imports: [MatButtonModule],
  providers: [SimplePopupService],
})
export class OpenWithHtmlComponent implements OnInit {
  @ViewChild('tmplRef') tmplRef: TemplateRef<HTMLTemplateElement>;

  constructor(
    private readonly popupService: SimplePopupService,
  ) {}

  ngOnInit() {}

  openPopup() {
    this.popupService.openPopup(this.tmplRef, 'Template ref modal', 'accent');
  }
}
