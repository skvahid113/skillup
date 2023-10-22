import { Component } from '@angular/core';

@Component({
  selector: 'app-dql',
  templateUrl: './dql.component.html',
  styleUrls: ['./dql.component.css']
})
export class DqlComponent {


  selectedContent: string = 'dql';

  // Function to toggle the selected accordion
  toggleAccordion(accordionId: string) {
    const accordionElement = document.getElementById(accordionId);
    if (accordionElement) {
      const isExpanded = accordionElement.getAttribute('aria-expanded') === 'true';
      accordionElement.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    }
  }
}
