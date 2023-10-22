import { Component } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {



  rankingFunctions: {
    title: string;
    description: string;
    syntax: string;
    examples: string[];
    sqlSyntax: string;
    sqlQuery: string;
    sqlOutput: string;
  }[] = [
      {
        title: 'ROW_NUMBER()',
        description: 'Assigns a unique number to each row in the result set.',
        syntax: 'ROW_NUMBER() OVER (ORDER BY column)',
        examples: [
          'ROW_NUMBER() OVER (ORDER BY score) as row_num',
          'ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) as row_num'
        ],
        sqlSyntax: 'SELECT employee_id, department_id, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) as row_num FROM employees;',
        sqlQuery: 'row_num',
        sqlOutput: '1, 2, 3, ...'
      },
      {
        title: 'RANK()',
        description: 'Assigns a rank to each row based on the values in a specific column.',
        syntax: 'RANK() OVER (ORDER BY column)',
        examples: [
          'RANK() OVER (ORDER BY score) as rank',
          'RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as rank'
        ],
        sqlSyntax: 'SELECT employee_id, department_id, salary, RANK() OVER (ORDER BY salary DESC) as rank FROM employees;',
        sqlQuery: 'rank',
        sqlOutput: '1, 2, 3, ...'
      },
      {
        title: 'DENSE_RANK()',
        description: 'Assigns a rank to each row based on the values in a specific column, without gaps in the ranking.',
        syntax: 'DENSE_RANK() OVER (ORDER BY column)',
        examples: [
          'DENSE_RANK() OVER (ORDER BY score) as dense_rank',
          'DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as dense_rank'
        ],
        sqlSyntax: 'SELECT employee_id, department_id, salary, DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank FROM employees;',
        sqlQuery: 'dense_rank',
        sqlOutput: '1, 2, 3, ...'
      },
      {
        title: 'NTILE()',
        description: 'Divides the result set into a specified number of roughly equal parts and assigns a group number to each row.',
        syntax: 'NTILE(n) OVER (ORDER BY column)',
        examples: [
          'NTILE(4) OVER (ORDER BY score) as quartile',
          'NTILE(3) OVER (PARTITION BY department_id ORDER BY salary) as tertile'
        ],
        sqlSyntax: 'SELECT employee_id, department_id, salary, NTILE(4) OVER (ORDER BY salary) as quartile FROM employees;',
        sqlQuery: 'quartile',
        sqlOutput: '1, 2, 3, 4'
      },
      // Add more ranking functions here
    ];

    selectedFunction: {
      title: string;
      description: string;
      syntax: string;
      examples: string[];
      sqlSyntax: string;
      sqlQuery: string;
      sqlOutput: string;
    } | undefined;


  ngOnInit() {
    // Initialize your component here
  }

  showFunction(functionTitle: string): void {
    this.selectedFunction = this.rankingFunctions.find(f => f.title === functionTitle);
  }

}
