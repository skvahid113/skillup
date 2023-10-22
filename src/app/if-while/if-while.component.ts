import { Component } from '@angular/core';

@Component({
  selector: 'app-if-while',
  templateUrl: './if-while.component.html',
  styleUrls: ['./if-while.component.css']
})
export class IfWhileComponent {


  // SQL example for IF statement
  exampleIfSQL: string = `
 -- Example of SQL IF statement
 DECLARE @Value INT = 75;
 IF @Value > 50
 BEGIN
     PRINT 'Value is greater than 50';
 END
 ELSE
 BEGIN
     PRINT 'Value is not greater than 50';
 END
`;

  // SQL example for WHILE loop
  exampleWhileSQL: string = `
 -- Example of SQL WHILE loop
 DECLARE @Counter INT = 1;
 WHILE (@Counter <= 10)
 BEGIN
     PRINT 'The counter value is = ' + CONVERT(VARCHAR, @Counter);
     SET @Counter = @Counter + 1;
 END
`;

  // SQL example for UPDATE statement
  exampleUpdateSQL: string = `
 -- Example of SQL UPDATE statement
 UPDATE SampleTable
 SET Value = Value * 2
 WHERE Value * 2 <= 100;
`;

  // SQL output for IF statement
  exampleIfOutput: string = `
 -- Output:
 Value is greater than 50
`;

  // SQL output for WHILE loop
  exampleWhileOutput: string = `
 -- Output:
 The counter value is = 1
 The counter value is = 2
 ...
 The counter value is = 10
`;

  // SQL output for UPDATE statement
  exampleUpdateOutput: string = `
 -- Output:
 (Number of rows updated) rows affected
`;
}
