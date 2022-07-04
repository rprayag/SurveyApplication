import { Directive, AfterContentInit, ElementRef, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[autofocus]'
})
export class AutoFocusDirective implements AfterContentInit{

  @Input() public appAutoFocus: boolean;

  public constructor(private el: ElementRef) {

  }

  public ngAfterContentInit() {

      setTimeout(() => {

          this.el.nativeElement.focus();

      },0);

  }



}
