import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor() { }

    ngOnInit() { }

    repetition = Array(100);

    //check if it is a multiples of 3
    IsMultipleOf3(n: number): boolean {
        //look the rest of the division by 3 
        if ((+n) % 3 == 0) {
            console.log(+n + "  - multiple of 3")
            return true;
        }
        return false;
    }

    //check if it is a multiples of 5
    IsMultipleOf5(n: number): boolean {
        //look the rest of the division by 5 
        if ((+n) % 5 == 0) {
            return true
        }
        return false;
    }

    //Create the message according to the value
    Message(n: number): string {
        if (this.IsMultipleOf3(+n)) {
            if (this.IsMultipleOf5(+n)) {
                //multiples of 15
                return "Avalon Innovation";
            }
            //multiplies of 3
            return "Avalon";
        }
        else if (this.IsMultipleOf5(+n)) {
            //multiplies of 5
            return "Innovation";
        }
        else {
            //not multiplies of 5 or 3
            return n.toString();
        }
    }
}
