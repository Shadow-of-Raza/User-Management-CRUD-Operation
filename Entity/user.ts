export class UserData{
    userid:number;
    username:string;
    useraddress:string;
    useremail: string;
    userphno:string;
    userpassword:string;

  
    constructor(userid:number, username:string ,useraddress:string, useremail: string,userphno:string, userpassword:string){
          
      this.userid=userid;
      this.username = username;
      this.useremail = useremail;
      this.userphno = userphno;
      this.useraddress = useraddress;
      this.userpassword = userpassword;
    }
  }