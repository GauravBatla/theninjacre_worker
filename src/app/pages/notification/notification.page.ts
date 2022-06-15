import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private api :ApiService) { }
  data:any
  ngOnInit() {
    this.getNotification()
  }

  getNotification(){
    this.api.getNotification().then((res:any)=>{
      console.log(res,"notification");
      this.data = res.data
    })
  }
  

}
