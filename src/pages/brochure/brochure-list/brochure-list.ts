import { Component } from '@angular/core';
import { Mascota, mascotasService} from '../shared-brochure/index';

@Component({
    selector: 'app-brochure-list',
    templateUrl: './brochure-list.html'
})

export class BrochureList{

    titleList = 'Catalogo';
    data: Mascota[];

    constructor(public service: mascotasService){
        this.data = service.mascotas;
    }

    itemSelected(mascota: Mascota){
        alert(mascota.nombre);
    }
}