import { Component } from '@angular/core';
import { ApiService } from './ApiService.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})

export class ApiComponent {

  products: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getData().subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
