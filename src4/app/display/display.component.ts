import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public str = "Marvellous Infosystems"
  public Upflag = false;
  public Lowflag = false;

  public UpperButton()
  {
    this.Upflag = true;
  }

  public LowerButton()
  {
    this.Lowflag = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
