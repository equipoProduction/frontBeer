import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void { 

  }
 confirmacion(): void{
   this.modalService.saveData("age","ok");
   
 }
 checkage(): string{
   return this.modalService.getData("age");
 }
}


