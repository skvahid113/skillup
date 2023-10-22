import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-defined-functions',
  templateUrl: './user-defined-functions.component.html',
  styleUrls: ['./user-defined-functions.component.css']
})
export class UserDefinedFunctionsComponent  {

  userDefinedFunctions = [
    {
      description: 'A user-defined function that adds two numbers.',
      syntax: 'dbo.AddTwoNumbers(@num1 INT, @num2 INT)',
      examples: [
        'SELECT dbo.AddTwoNumbers(5, 7); -- Returns 12'
      ],
      sqlExample: 'CREATE FUNCTION dbo.AddTwoNumbers (@num1 INT, @num2 INT)\n' +
        'RETURNS INT\n' +
        'AS\n' +
        'BEGIN\n' +
        '    RETURN @num1 + @num2;\n' +
        'END',
      sqlOutput: 'SELECT dbo.AddTwoNumbers(5, 7); -- Returns 12'
    },
    {
      description: 'A user-defined function that retrieves employees by department.',
      syntax: 'dbo.GetEmployeesByDepartment(@deptName NVARCHAR(50))',
      examples: [
        'SELECT * FROM dbo.GetEmployeesByDepartment(\'HR\');'
      ],
      sqlExample: 'CREATE FUNCTION dbo.GetEmployeesByDepartment (@deptName NVARCHAR(50))\n' +
        'RETURNS TABLE\n' +
        'AS\n' +
        'RETURN (\n' +
        '    SELECT EmployeeID, FirstName, LastName\n' +
        '    FROM Employees\n' +
        '    WHERE Department = @deptName\n' +
        ')',
      sqlOutput: 'SELECT * FROM dbo.GetEmployeesByDepartment(\'HR\');'
    }
  ];

  selectedUDF: any;

  
}
