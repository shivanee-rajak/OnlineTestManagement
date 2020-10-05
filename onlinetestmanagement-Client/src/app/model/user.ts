export class User{
    id:number;
      userId:number;
      userName:string;
      password:string;
    

  
      constructor(userId:number, userName:string, password:string){
          this.userId=userId;
          this. userName= userName;
          this.password=password;
        
      }
       

      getName():string{
          return this.userName;
        }
      
        getPassword():string{
          return this.password;
        }


      
  }