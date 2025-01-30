import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { image } from '../../image';

@Component({
  selector: 'app-portfolio',
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

arrImgs :image[]= [
{img:"imgs/portfolio/port1.png"},
{img:"imgs/portfolio/port2.png"},
{img:"imgs/portfolio/port3.png"},
{img:"imgs/portfolio/port1.png"},
{img:"imgs/portfolio/port2.png"},
{img:"imgs/portfolio/port3.png"}
];


modalImg !:string ;
modalView :boolean =true;

showModal(e:MouseEvent,img:HTMLImageElement) {
 if(e.target!=img){
  this.modalView=true;
 }
}

}