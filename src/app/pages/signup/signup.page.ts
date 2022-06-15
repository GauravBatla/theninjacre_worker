import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ApiService } from 'src/app/services/api.service';
import { NavController } from '@ionic/angular';
import { AlertTypeEnum } from 'src/app/services/error-handler/alert-type.enum';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  registerForm: FormGroup;
  imageUrl: string;
  imageUrl1: string;
  imageUrl2: string;
  ID_proof = [
    {
      id: 1,
      name: 'Aadhaar Card'
    }, {
      id: 2,
      name: 'Pan Card'
    }, {
      id: 3,
      name: 'Driving Licence'
    }, {
      id: 4,
      name: 'Ration Card'
    }, {
      id: 5,
      name: 'Passport'
    }, {
      id: 6,
      name: 'Other'
    }
  ];
  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
    private navCtrl: NavController,
    private commonService: CommonService
    // private commonService: CommonService,
  ) { }
  ngOnInit() {
    this._buildForm();
  }
  private _buildForm() {
    this.registerForm = this.formBuilder.group(
      {
        name: new FormControl('', Validators.compose([Validators.required,])),
        // service_type: new FormControl('', Validators.compose([Validators.required,])),
        present_addess: new FormControl('', Validators.compose([Validators.required,])),
        permanent_addess: new FormControl('', Validators.compose([Validators.required,])),
        mobile: new FormControl('', Validators.compose([Validators.required,])),
        alt_no: new FormControl('', Validators.compose([Validators.required])),
        id_image: new FormControl('', Validators.compose([])),
        id_name: new FormControl('', Validators.compose([Validators.required])),
        family_photo: new FormControl('', Validators.compose([])),
        profile_image: new FormControl('', Validators.compose([])),
        family_member_name: new FormControl('', Validators.compose([Validators.required])),
        refer_code: new FormControl(''),
      },
    );
  }
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64
    });
    console.log(image);
    this.imageUrl = `data:image/${image.format};base64,${image.base64String}`;
    if (this.imageUrl != null) {
      this.registerForm.patchValue({
        'profile_image': this.imageUrl
      });
    }
    // var imageUrl = image.webPath;
    console.log(this.imageUrl);
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
      this.registerForm.patchValue({
        'id_image': this.imageUrl1
      });
    }
    // var imageUrl = image.webPath;
    console.log(this.imageUrl);
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
      this.registerForm.patchValue({
        'family_photo': this.imageUrl2
      });
    }
    // var imageUrl2 = image.webPath;
    console.log(this.imageUrl2);
  };
  async register() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.commonService.showLoader();
    }
    this._apiService.signup(this.registerForm.value).then((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.commonService.showToast(data.msg);
        this.navCtrl.navigateRoot('/login');
      }
    }).catch((err: any) => {
      console.log(err);
      this.commonService.showAlert(AlertTypeEnum.Error, err.message);
    });
  }
}
