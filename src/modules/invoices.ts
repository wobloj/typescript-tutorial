import {HasFormater} from "../interfaces/hasformater.js"
export class Invoice implements HasFormater{
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} winien ${this.amount}zł za ${this.details}`
    }
}