import { Component } from '@angular/core';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent {

  procedures = [
    {
      description: 'A procedure that does something.',
      syntax: 'EXEC procedure_name parameter1, parameter2, ...',
      examples: [
        'EXEC sp_InsertEmployee \'John\', \'Doe\', \'HR\';'
      ],
      sqlExample: 'CREATE PROCEDURE sp_InsertEmployee\n' +
        '    @FirstName NVARCHAR(50),\n' +
        '    @LastName NVARCHAR(50),\n' +
        '    @Department NVARCHAR(50)\n' +
        'AS\n' +
        'BEGIN\n' +
        '    INSERT INTO Employees (FirstName, LastName, Department)\n' +
        '    VALUES (@FirstName, @LastName, @Department);\n' +
        'END;'
    },
    {
      description: 'Another procedure that performs a task.',
      syntax: 'EXEC another_procedure parameter1, parameter2, ...',
      examples: [
        'EXEC sp_UpdateEmployee 123, \'Jane\';'
      ],
      sqlExample: 'CREATE PROCEDURE sp_UpdateEmployee\n' +
        '    @EmployeeID INT,\n' +
        '    @NewFirstName NVARCHAR(50)\n' +
        'AS\n' +
        'BEGIN\n' +
        '    UPDATE Employees\n' +
        '    SET FirstName = @NewFirstName\n' +
        '    WHERE EmployeeID = @EmployeeID;\n' +
        'END;'
    }
  ];
}
