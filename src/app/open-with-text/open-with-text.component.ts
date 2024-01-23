import { Component, OnInit } from '@angular/core';
import { SimplePopupService } from '../simple-popup.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-open-with-text',
  templateUrl: './open-with-text.component.html',
  styleUrls: ['./open-with-text.component.css'],
  standalone: true,
  imports: [MatButtonModule],
  providers: [SimplePopupService],
})
export class OpenWithTextComponent implements OnInit {
  constructor(private popupService: SimplePopupService) {}

  ngOnInit() {}

  openPopup() {
    this.popupService.openPopup('This is a simple popup with text!', 'Text modal', 'primary');
  }
}
