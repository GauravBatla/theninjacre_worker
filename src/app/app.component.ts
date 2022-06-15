import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
  ) {}

  async ngOnInit() {
    
    await this.storage.create();
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (this.router.url === '/login' || this.router.url === '/user') {
        navigator['app'].exitApp();
      }
    });
  }
}
