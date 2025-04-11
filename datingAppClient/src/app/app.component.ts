import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = "Angular client";
  users:any;

  ngOnInit(): void {
    this.http.get('https://localhost:7183/api/users').subscribe({
      next: response => this.users = response,
      error:error => console.log(error),
      complete:()=>console.log('Request has been completed')
    })
  }
}
