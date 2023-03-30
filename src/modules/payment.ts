import {HasFormater} from "../interfaces/hasformater.js"
export class Payment implements HasFormater{
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.recipient} jest należny ${this.amount}zł za ${this.details}`
    }
}