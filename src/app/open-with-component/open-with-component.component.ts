import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SimplePopupService } from '../simple-popup.service';

@Component({
  selector: 'app-open-with-component',
  templateUrl: './open-with-component.component.html',
  styleUrls: ['./open-with-component.component.css'],
  standalone: true,
  imports: [MatButtonModule],
  providers: [SimplePopupService],
})
export class OpenWithComponentComponent implements OnInit {
  @Input() content: string;

  constructor(private readonly popupService: SimplePopupService) {}

  ngOnInit() {
    console.log(this.content);
  }

  openPopup() {
    this.popupService.openPopup(OpenWithComponentComponent, {
      content: 'test content',
    });
  }
}
