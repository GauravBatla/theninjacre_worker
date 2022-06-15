import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-oppertunities',
  templateUrl: './oppertunities.page.html',
  styleUrls: ['./oppertunities.page.scss'],
})
export class OppertunitiesPage implements OnInit {
  selectedSegment: any;
  status: any = ['Confirmed', 'Completed', 'Booked']
  Confirmed: any
  Completed: any
  Booked: any
  name: any
  constructor(
    private common: CommonService,
    private api: ApiService
  ) {
    console.log(this.common.user.value);
  }

  ngOnInit() {
    this.selectedSegment = 'Booked'
    this.getWorkerBooking()
    this.common.user.subscribe((data: any) => {
      this.name = data.user.name;
      //   console.log(this.userData);
    });
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.target.value;
  }

  getWorkerBooking() {
    for (let i = 0; i < this.status.length; i++) {
      const element = this.status[i];
      console.log(element);
      this.api.getWorkerBooking(element).then((res: any) => {
        // console.log(res,i);
        this[element] = res.data
        console.log(this[element], "booking data");
      })
    }
  }


  updateStatus(status: any, bookingId: any) {
    this.common.showLoaderExtend()
    this.api.updateBooking({ status: status, booking_id: bookingId }).then((res: any) => {
      console.log(res);
      if (res.status == 200) {
        this.getWorkerBooking()
        this.common.showToast("Order" + status)
        this.common.hideLoader()
      }
    })
  }

}
