import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-joins',
  templateUrl: './joins.component.html',
  styleUrls: ['./joins.component.css']
})
export class JoinsComponent implements OnInit {

  selectedContent: string = 'inner-join';
  contentTemplate!: TemplateRef<any>;
  activeButton: string | null = 'inner-join';
  blinkingInterval: any;
  ngOnInit() {
    // Set the default content to "data" when the component is initialized
    this.selectedContent = 'inner-join';
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
