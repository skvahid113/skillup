import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-data-types',
  templateUrl: './data-types.component.html',
  styleUrls: ['./data-types.component.css']
})
export class DataTypesComponent implements OnInit  {

  selectedContent: string = 'numeric-data-types';
  contentTemplate!: TemplateRef<any>;
  activeButton: string | null = 'numeric-data-types';
  blinkingInterval: any;
  ngOnInit() {
    // Set the default content to "data" when the component is initialized
    this.selectedContent = 'numeric-data-types';
  }

  
  // Function to handle button clicks and initiate blinking
  handleClick(button: string) {
    this.selectedContent = button; // Update the selected content
    this.activeButton = button; // Set the active button

    // Clear any existing blinking interval
    if (this.blinkingInterval) {
      clearInterval(this.blinkingInterval);
    }

    // Create a blinking effect by toggling the active-button class every 500ms
    this.blinkingInterval = setInterval(() => {
      if (this.activeButton === button) {
        this.activeButton = null; // Turn off the blinking effect
      } else {
        this.activeButton = button; // Turn on the blinking effect
      }
    }, 500);
  }
}
