import { Time } from "@angular/common";
import { Shift } from "./shiftItem";

export class ShiftList {   

    constructor(private shifts: Shift[] = []) {        
        }

    get items(): readonly Shift[] {
        return this.shifts;
    }

    addItem(
        shiftId: string,
        name:string,
        startTime: Time,
        endTime: Time,
        ModifiedDate: Date) {
        this.shifts.push(new Shift("1","working",new Date().getTime().toString(),new Date().getTime().toString(),new Date,true ));
    }
}
