import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-null',
  templateUrl: './null.component.html',
  styleUrls: ['./null.component.css']
})
export class NullComponent implements OnInit  {

  selectedContent: string = 'isnull';
  contentTemplate!: TemplateRef<any>;
  activeButton: string | null = 'isnull';
  blinkingInterval: any;
  ngOnInit() {
    // Set the default content to "data" when the component is initialized
    this.selectedContent = 'isnull';
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
