import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-sqlpath',
  templateUrl: './sqlpath.component.html',
  styleUrls: ['./sqlpath.component.css']
})
export class SqlpathComponent {

  selectedSection: string ='sqloverview';

  showContent(section: string): void {
    this.selectedSection = section;
    this.activeButton = section;
  }
  activeButton: string | null = 'sqloverview';



  
  constructor(private route: ActivatedRoute,private router: Router) {

  
    // Set the default route to 'overview'
    // this.route.fragment.subscribe(fragment => {
    //   if (!fragment) {
    //     this.navigateToDefault();
    //   }
    // });
  }

  // navigateToDefault() {
  //   this.route.fragment.subscribe(() => {
  //     this.router.navigate(['sqloverview'], { relativeTo: this.route });
  //   });
  // }

}
