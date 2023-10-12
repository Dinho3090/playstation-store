import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover:string=""
  @Input()
  gameLabel:string=""
  @Input()
  gameType:string="Digital Ps4"
  @Input()
  gamePrice:string="RS$ 299,99"


  constructor() { }

  ngOnInit(): void {
  }
}
