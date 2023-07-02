import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-icons',
  templateUrl: './help-icons.component.html',
  styleUrls: ['./help-icons.component.scss']
})
export class HelpIconsComponent implements OnInit {

  @Input() mensaje: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
