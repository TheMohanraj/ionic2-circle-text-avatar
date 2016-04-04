import {Directive, ElementRef, Input} from 'angular2/core';
import {ColorGenerator} from '../../utils/color-generator';
 
@Directive({
    selector: 'text-img',
    providers:[ColorGenerator]
})
export class TextImage {
 
    constructor(private element: ElementRef, private colorGenerator: ColorGenerator){  }
    
    @Input()
    set text(txt: string) {
        this.element.nativeElement.style.backgroundColor = this.colorGenerator.getColor(txt);
        this.element.nativeElement.setAttribute("value", txt.charAt(0));
    } 
 
}