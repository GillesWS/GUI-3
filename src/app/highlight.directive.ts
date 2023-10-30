import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ref } from '@angular/fire/storage'
@Directive({
  selector: '[appHighlight3]'
})
export class HighlightDirective {

  constructor(private ref: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.ref.nativeElement, 'background-color','yellow');
  }

  @HostListener('mouseenter') MyMouseEnter(eventdata: Event):void{
    this.renderer.setStyle(this.ref.nativeElement, 'background-color','lightgrey');
  }

  @HostListener('mouseleave') MyMouseLeave(eventdata: Event):void{
    this.renderer.setStyle(this.ref.nativeElement, 'background-color','white');
  }
}
