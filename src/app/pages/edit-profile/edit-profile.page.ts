import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { userInterface } from 'src/app/models/user/user.interface';
import { CommonService } from 'src/app/services/common.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ApiService } from 'src/app/services/api.service';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';
import { RequestManagerService } from 'src/app/services/request-manager.service';
import { LeaveRequestPage } from '../leave-request/leave-request.page';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  catList:any
  userData: userInterface;
  editProfile :FormGroup
  userDetail:any
  imageUrl:string = null
  imageUrl1:string = null
  imageUrl2:string = null
  base: string;

  constructor(private router :Router,
    private commonService:CommonService,
   private formBuilder: FormBuilder ,
    private popoverCtrl: PopoverController,
    private api :ApiService,
    private request: RequestManagerService
    ) { }

  ngOnInit() {
    this.base = this.request.url.slice(0, -7);
    console.log('BASE URL: ', this.base);

    this.commonService.user.subscribe((data: any) => {
      this.userData = data.user;
      console.log(this.userData);
    });
    this._buildForm();
   this.getCategoryList();
  }

  onEdit(){
    this.router.navigateByUrl('/edit-profile'); 
  }

  private _buildForm() {
    this.editProfile = this.formBuilder.group(
      {
        name: new FormControl(this.userData.name, Validators.compose([Validators.required, Validators.minLength(3)])),
       WorkerCategory: new FormControl(this.userData.WorkerCategory, Validators.compose([Validators.required])),
        mobile: new FormControl(this.userData.mobile, Validators.compose([Validators.required])),
        alt_no: new FormControl(this.userData.alt_no, Validators.compose([Validators.required])),
        present_addess: new FormControl(this.userData.present_addess, Validators.compose([Validators.required])),
        permanent_addess: new FormControl(this.userData.address, Validators.compose([Validators.required])),
        profile_image: new FormControl(this.userData.profile_image?null:null, Validators.compose([])),
        id_image: new FormControl(this.userData.id_image?null:null, Validators.compose([])),
        family_photo: new FormControl(this.userData.family_photo?null:null, Validators.compose([])),
      },
    );
  }

//   id: number,
//   name: string,
//   role_id: number,
//   present_addess:string, ---
//   address:string,
//   id_image:string,
//   family_photo:string,
//   profile_image:string,
//   status: string,
//   mobile: number,
//   alt_no:number
// }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    this.imageUrl = `data:image/${image.format};base64,${image.base64String}`;
    if (this.imageUrl != null) {
      this.editProfile.patchValue({
        'profile_image': this.imageUrl
      });
    }
    console.log(this.imageUrl);
    // var imageUrl = image.webPath;
  };


  takePictureId = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    console.log(image);
    this.imageUrl1 = `data:image/${image.format};base64,${image.base64String}`;
    if (this.imageUrl1 != null) {
      this.editProfile.patchValue({
        'id_image': this.imageUrl1
      });
    }
    // var imageUrl = image.webPath;
    console.log(this.imageUrl1);

  };


  takePictureFamily = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    console.log(image);
    this.imageUrl2 = `data:image/${image.format};base64,${image.base64String}`;
    if (this.imageUrl2 != null) {
      this.editProfile.patchValue({
        'family_photo': this.imageUrl2
      });
    }
    // var imageUrl = image.webPath;
    console.log(this.imageUrl2);

  };


  async update() {
    this.editProfile.value.WorkerCategory = this.editProfile.value.WorkerCategory.slice(0, this.editProfile.value.WorkerCategory.length - 1).join(', ').concat(
      ', ' + this.editProfile.value.WorkerCategory[this.editProfile.value.WorkerCategory.length - 1]);
  //  console.log(this.editProfile.value.WorkerCategory);
    this.commonService.showLoader();
    this.api.updateProfile(this.editProfile.value).then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        //this.commonService.updateLocalUser(data.data);
        // this.navCtrl.navigateRoot('/tabs');
        this.getProfile()
        this.commonService.showToast('Profile updated!');
      } else {
        this.commonService.showAlert(AlertTypeEnum.Error, data.message);
      }
    }).catch(err => {
      // console.log('ERROR', err);
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }

  getCategoryList() {
        this.api.getAllCategory().then((res:any)=>{
          console.log(res);
          this.catList = res.data
          
        })
   }

   
  getProfile() {
        this.api.getProfile().then((res:any)=>{
          console.log(res,"profile");
          //this.catList = res.data 
        this.commonService.updateLocalUser(res.data);
        })
      }

      async onLeaveReq() {
            const popover = await this.popoverCtrl.create({
              component: LeaveRequestPage,
              cssClass: 'popover-css',
              size: 'cover'
            });
        
            popover.present();
          }

      
}


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { PopoverController } from '@ionic/angular';
// import { ApiService } from 'src/app/services/api.service';
// import { LeaveRequestPage } from '../leave-request/leave-request.page';

// @Component({
//   selector: 'app-edit-profile',
//   templateUrl: './edit-profile.page.html',
//   styleUrls: ['./edit-profile.page.scss'],
// })
// export class EditProfilePage implements OnInit {

//   constructor(private router :Router, private popoverCtrl: PopoverController, private _apiService:ApiService) { }

//   ngOnInit() {
//     this.getCategoryList()
//   }
//   catList:any
//   onEdit(){
//     this.router.navigateByUrl('/edit-profile');
//   }

//   async onLeaveReq() {
//     const popover = await this.popoverCtrl.create({
//       component: LeaveRequestPage,
//       cssClass: 'popover-css',
//       size: 'cover'
//     });

//     popover.present();
//   }

//   getCategoryList(){
//     this._apiService.getAllCategory().then((res:any)=>{
//       console.log(res);
//       this.catList = res.data
      
//     })
//   }

// }
