import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css']
})
export class ListenerComponent implements OnInit {
  
  public str="";
  public EventListener()
  {
    this.str="Educating for better tommorrow"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
