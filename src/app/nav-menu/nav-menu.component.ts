import { Component, OnInit ,ViewChild, ElementRef, AfterViewInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements AfterViewInit {

  color1:String = "background-color:red"

  ngAfterViewInit(): void {
   // console.log('Component 1:', this.component1); // Check if component1 is properly initialized
 // console.log('Component 1 nativeElement:', this.component1?.nativeElement); 
  }

  constructor(private renderer: Renderer2) { }

  scrollToComponent(componentId: string): void {
    const element = document.getElementById(componentId);
    console.log("element id"+element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}