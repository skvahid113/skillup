import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-sqloverview',
  templateUrl: './sqloverview.component.html',
  styleUrls: ['./sqloverview.component.css']
})
export class SqloverviewComponent implements OnInit  {

  selectedContent: string = 'data';
  contentTemplate!: TemplateRef<any>;
  activeButton: string | null = 'data';
  blinkingInterval: any;
  ngOnInit() {
    // Set the default content to "data" when the component is initialized
    this.selectedContent = 'data';
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

  points: string[] = [
    'Tables: A table is a fundamental component of a relational database...',
    'Rows: Rows, also known as records or tuples, are individual entries in a table...',
    'Columns: Columns define the attributes or properties of the data stored in a table...',
    'Data Integrity: Databases enforce data integrity by defining constraints such as primary keys...',
    'Data Retrieval: Databases provide query capabilities that allow users to retrieve specific data...',
    'Data Manipulation: Databases support operations for adding, updating, and deleting data in tables...',
    'Data Types: Data in a database can be of different types, such as text, numbers, dates, binary data, and more...',
    'Indexes: Indexes are data structures used to optimize data retrieval. They provide a fast way to look up data...',
    'Data Security: Databases often have mechanisms for controlling access to data, including user authentication and authorization...',
    'Data Normalization: Data normalization is the process of organizing data in a way that reduces data redundancy...',
  ];

}
