import { Component,OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router,) {}
  ngOnInit() {

  }
  async start() {
    this.router.navigate(['/start']);
  }
}
