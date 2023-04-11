import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = './assets/img/camaleao.jpg'
  contentTitle:string ='Camaleão'
  contentDescription:string ='Desenho realizado com mesa digital e MediBang Paint Pro, inspirado na arte de grafite de rua. '
  constructor() { }

  ngOnInit(): void {
  }

}
