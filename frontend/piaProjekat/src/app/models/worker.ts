export class Worker {
    _id:string;
    
    agencyUsername:string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    specialization: string;
    idJob: string;

    // for html
    isExpanded?: boolean;
    isEditing?:boolean;
}