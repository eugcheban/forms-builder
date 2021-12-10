import { 
  AfterContentInit, 
  Component, 
  ViewChild, 
  AfterViewInit, 
  ViewContainerRef, 
  TemplateRef,
  ElementRef,
  NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { ComponentPortal, PortalModule, Portal, TemplatePortal, DomPortal } from '@angular/cdk/portal';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  elements = [ 'input', 'button'];

  selectedPortal!: Portal<any>;
  componentPortal!: ComponentPortal<ComponentPortalExample>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    setInterval(()=> {
      console.log("Selected Portal %s", this.selectedPortal);
    }, 100000);
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    this.domPortal = new DomPortal(this.domPortalContent);
  }
}

@Component({
  selector: 'component-portal-examplee',
  template: 'Hello, this is a component portal',
})

export class ComponentPortalExample { }