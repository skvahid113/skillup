import { Component } from '@angular/core';

@Component({
  selector: 'app-case-statement',
  templateUrl: './case-statement.component.html',
  styleUrls: ['./case-statement.component.css']
})
export class CaseStatementComponent {


  exampleSQL1: string = `
  SELECT column1, column2,
    CASE
      WHEN condition1 THEN result1
      WHEN condition2 THEN result2
      WHEN condition3 THEN result3
      ELSE result4
    END AS alias
  FROM your_table;
`;

exampleSQL2: string = `
  SELECT order_id, order_date, order_total,
    CASE
      WHEN order_total > 1000 THEN 'High'
      WHEN order_total BETWEEN 500 AND 1000 THEN 'Medium'
      ELSE 'Low'
    END AS order_category
  FROM orders;
`;

orderCategory: string | undefined;

constructor() {}

categorizeOrder() {
  // Your logic to categorize the order goes here
  // Set the result in this.orderCategory
}

ngOnInit() {}
}
