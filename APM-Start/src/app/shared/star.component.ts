import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<String> = 
        new EventEmitter<String>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 85/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The star was clicked on ${this.rating} rating`)
    }
}