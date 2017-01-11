import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ 
    selector: '[imageLazyLoadItem]' 
})
export class ImageLazyLoadItemDirective {

    constructor(el: ElementRef) {
       
    }

}