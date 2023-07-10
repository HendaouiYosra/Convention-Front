import { ConventionService } from './convention.service';
import { Component, OnInit } from '@angular/core';
import { Convention } from './interface/convention';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public conventions?:Convention[];
  title = 'Convention';
   
  constructor(private ConventionService:ConventionService){

  }
  ngOnInit(): void {
    this.getConventions();
  }
  getConventions():void{(this.ConventionService.getConventions().subscribe(
    (respose:Convention[])=>this.conventions=respose,
    (error:HttpErrorResponse)=>alert(error.message)))}


    
    handleDeleteConvention(convention: Convention) {
      this.ConventionService.deleteConvention(convention.id).subscribe({
        next: () => {
          this.getConventions(); 
        },
        error: (err: HttpErrorResponse) => {
          console.log(err); 
        }
      });
    }
}
