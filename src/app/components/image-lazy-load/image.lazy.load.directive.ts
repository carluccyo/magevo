import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ 
    selector: '[imageLazyLoad]' 
})
export class ImageLazyItemDirective {

    constructor(el: ElementRef) {
       
    }

}