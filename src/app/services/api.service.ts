import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { CommonService } from './common.service';
import { Error } from './error-handler/error.handler';
import { AlertTypeEnum } from './error-handler/alert-type.enum';
import { RequestManagerService } from './request-manager.service';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private storage: Storage,
    private requestManager: RequestManagerService,
    private commonService: CommonService
  ) {
    // console.log(this.commonService.user.value.token)
  }
  
  // login = async (formData:any) => {
  //   return new Promise((resolve, reject) => {
  //     this.requestManager.post('login', formData).subscribe((data: any) => {
  //       // console.log(data);
  //       if (data.status == 200) {
  //         console.log('User Logged In!');
  //         var user = new User(data.data, data.token);
  //         this.storage.set('user', user); 
  //         this.commonService.user.next(user);
  //       } else {
  //         setTimeout(() => {
  //           this.commonService.showAlert(AlertTypeEnum.Error, data.msg);
  //         }, 3000);
  //       }
  //       resolve(user);
  //     }, (err) => {
  //       console.log(err);
  //       reject(new Error(err.errors, err.status));
  //     });
  //   });
  // };
  
  
  login = async (formData) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('login', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }
  
  
  signup = async (formData:any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('workerSignUp', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  otpVerify = async (formData:any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('verifyOtp', formData).subscribe((data: any) => {
        // console.log(data);
        if (data.status == 200) {
          console.log('User Logged In!' , data);
          var user = new User(data.user, data.token);
          this.storage.set('user', user);
          this.commonService.user.next(user);
        } else {
          setTimeout(() => {
            this.commonService.showAlert(AlertTypeEnum.Error, data.msg);
          }, 3000);
        }
        resolve(user);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };
  
  forgetPassword = async (formData:any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.get(`forgetPassword?mobile=${formData}`).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };
  
  getAllCategory = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getAllCategory').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  getNotification = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getNotification').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  getProfile = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getProfile').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  getWorkerBooking = async (status:any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getWorkerBooking?status='+status).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };
  
  updateBooking = async (formData:any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('updateWorkerBooking', formData ).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  
  
  leaveRequest = async (formData:any) => {
    return new Promise((resolve, reject) => {
      this.requestManager.post('leaveRequest', formData ).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };


  getCompletedTask = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('getAllCompleteTask').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };
  
  logout = async () => {
    return new Promise((resolve, reject) => {
      this.requestManager.get('logout').subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  };

  updateProfile = async (formData) => {
    return new Promise((resolve, reject) => {
      this,this.requestManager.post('updateProfile', formData).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        console.log(err);
        reject(new Error(err.errors, err.status));
      });
    });
  }

  

}
