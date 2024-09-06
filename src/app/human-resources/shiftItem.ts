import { Time } from "@angular/common";

export class Shift {
    constructor(
        public shiftId: string, 
        public name: string,
        public StartTime: string,
        public EndTime:string,
        public ModifiedDate: Date,
        public complete: boolean = false) {        
    }  
}
