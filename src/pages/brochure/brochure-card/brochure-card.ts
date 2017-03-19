import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../shared-brochure/index';

@Component({
    selector: 'app-brochure-card',
    templateUrl: './brochure-card.html',
    styleUrls: ['./brochure-card.scss']
})
export class BrochureCard{

    @Input() mascota: Mascota;
    @Output() selected = new EventEmitter<Mascota>();

    mascotaClick(){
        this.selected.emit(this.mascota);
    }
}