export class User{
    username:string;
    password:string;
    email:string;
    role:string;

    //client only
    firstname:string;
    lastname:string;
    phoneNumber:string;

    // agency only
    agencyName:string;
    agencyAdress:string;
    tid:string;
    description:string;
    maxNumberOfWorkers:number;

    // for client and agency
    profilePicture:{
        data: string;
        contentType: string;
    };
    verifiedByAdmin:boolean;
    declined:boolean;
}
    