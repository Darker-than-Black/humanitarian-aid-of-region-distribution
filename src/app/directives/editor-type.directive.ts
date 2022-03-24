import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[editorType]'
})
export class EditorTypeDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
