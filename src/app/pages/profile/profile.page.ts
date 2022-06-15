import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';
import { RequestManagerService } from 'src/app/services/request-manager.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private commonService: CommonService,
    private request: RequestManagerService, private navCtrl: NavController) { }
  name: any
  base: string

  ngOnInit() {
    this.base = this.request.url.slice(0, -7);
    this.commonService.user.subscribe((data: any) => {
      this.name = data.user.name;
      // console.log(this.userData);
    });
  }

  openCapacitorSite = async (type: string) => {
    if (type == 'privacy')
      await Browser.open({ url: `${this.base}privacy-policy/app/worker`, presentationStyle: 'fullscreen' });
    else if (type == 'terms')
      await Browser.open({ url: `${this.base}term-condition/app/worker`, presentationStyle: 'fullscreen' });
    else if (type == 'about')
      await Browser.open({ url: `${this.base}about/app/worker`, presentationStyle: 'fullscreen' });
    else
      this.commonService.showAlert(AlertTypeEnum.Error, 'Something went wrong!');
  };

  onEdit() {
    this.router.navigateByUrl('/edit-profile');
  }

  onLogout() {
    this.commonService.logout();
    this.navCtrl.navigateRoot('/login');
  }

}
