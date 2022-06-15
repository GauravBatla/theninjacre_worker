import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.page.html',
  styleUrls: ['./leave-request.page.scss'],
})
export class LeaveRequestPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private commonService: CommonService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this._buildForm()
  }
  leaveForm: FormGroup
  private _buildForm() {
    this.leaveForm = this.formBuilder.group(
      {
        reason: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(3)])),
        from_date: new FormControl(null, Validators.compose([Validators.required])),
        till_date: new FormControl(null, Validators.compose([Validators.required])),
        description: new FormControl(null, Validators.compose([Validators.required])),
      },
    );
  }

  submit() {
    console.log(this.leaveForm.value);
    if (this.leaveForm.valid) {
      this.commonService.showLoaderExtend()
      this.api.leaveRequest(this.leaveForm.value).then((res: any) => {
        console.log(res);
        if(res.status == 200){
          this.commonService.showToast('leave request sent')
          this.leaveForm.reset()
        }
        this.commonService.hideLoader()
      })
    }

  }

  onDismiss() {
    this.modalCtrl.dismiss();
  }

}
