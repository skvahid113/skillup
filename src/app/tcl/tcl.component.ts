import { Component } from '@angular/core';

@Component({
  selector: 'app-tcl',
  templateUrl: './tcl.component.html',
  styleUrls: ['./tcl.component.css']
})
export class TclComponent {

  tclFunctions = [
    {
      title: 'COMMIT',
      description: 'Permanently saves changes made during a transaction.',
      syntax: 'COMMIT;',
      sqlExamples: [
        'BEGIN TRANSACTION;',
        '-- Make changes to the database',
        '-- ...',
        'COMMIT;'
      ],
      sqlOutput: 'Changes are permanently saved.',
    },
    {
      title: 'ROLLBACK',
      description: 'Undoes changes made during a transaction and restores the database to its previous state.',
      syntax: 'ROLLBACK;',
      sqlExamples: [
        'BEGIN TRANSACTION;',
        '-- Make changes to the database',
        '-- ...',
        'ROLLBACK;'
      ],
      sqlOutput: 'Changes made during the transaction are undone.',
    },
    {
      title: 'SAVEPOINT',
      description: 'Creates a savepoint within a transaction to which you can later roll back.',
      syntax: 'SAVEPOINT savepoint_name;',
      sqlExamples: [
        'BEGIN TRANSACTION;',
        'INSERT INTO employees (name, salary) VALUES (\'John Doe\', 50000);',
        'SAVEPOINT my_savepoint;',
        'UPDATE employees SET salary = 55000 WHERE name = \'John Doe\';',
        '-- Rollback to the savepoint if needed',
        'ROLLBACK TO my_savepoint;'
      ],
      sqlOutput: 'You can roll back to the savepoint created at `my_savepoint`.',
    },
    // Add more TCL commands here
  ];

  selectedFunction: any;

  selectFunction(functionTitle: string): void {
    this.selectedFunction = this.tclFunctions.find((func) => func.title === functionTitle);
  }
}
