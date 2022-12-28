import { APIService } from './services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  title = 'API-cdn-2023';
  dados: any = [];

  constructor(private apiService: APIService){}

    ngOnInit(): void {
      this.dados = this.apiService.getProduct().subscribe(
        (data) => {
          this.dados = data;
        },
        (error) => {
          console.log(error);
      }
      )
    }
}
