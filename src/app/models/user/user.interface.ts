export interface userInterface {
    id: number,
    name: string,
    role_id: number,
    present_addess:string,
    address:string,
    id_image:string,
    family_photo:string,
    profile_image:string,
    status: string,
    mobile: number,
    alt_no:number,
    WorkerCategory:any ,
    permanent_addess:string
}
// account_name: null
// account_number: null
// address: "Haridwar"
// alt_no: "1234567890"
// bank_name: null
// created_at: "2022-04-11T12:50:39.000000Z"
// deleted_at: null
// email: null
// email_verified_at: null
// family_member_name: "Gaurav"
// family_photo: "uploads/working_partner/37/6254241f4637c.jpg"
// id: 37
// id_image: "uploads/working_partner/37/6254241f463f5.jpg"
// id_name: "Gaurav"
// ifsc_code: null
// lat: null
// location: null
// lon: null
// mobile: "9675004434"
// name: "Gaurav"
// otp: "9947"
// pincode: null
// present_addess: "Jwalapur"
// profile_image: "uploads/working_partner/37/6254241f46248.jpg"
// refer_code: "YBqQg37"
// role_id: "6"
// status: "Pending"
// updated_at: "2022-04-12T05:13:48.000000Z"
export interface IUserClass{
    user: userInterface;
    token: string;
}