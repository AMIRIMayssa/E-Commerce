import { Directive,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private el:ElementRef,private re :Renderer2) { 
  this.re.setStyle(this.el.nativeElement,'Font-size','15px')
  }

}
