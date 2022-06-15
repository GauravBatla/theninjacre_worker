import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  bal:any
  constructor(
    private commonService:CommonService
  ) { }

  ngOnInit() {
    this.commonService.user.subscribe((data: any) => {
      this.bal = data.user.wallet;
     // console.log(this.userData);
    });
  }

}
