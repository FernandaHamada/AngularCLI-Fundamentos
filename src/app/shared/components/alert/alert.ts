
export class Alert{

    constructor(public readonly alertype: AlertType, public readonly message: string){

    }

}

export enum AlertType{
    SUCCESS,
    WARNING,
    DANGER,
    INFO
}