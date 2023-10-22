import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {
  categories: {
    title: string;
    description: string;
    syntax: string;
    examples: string[];
    sqlSyntax: string;
    sqlQuery: string;
    sqlOutput: string;
  }[] = [
      {
        title: 'CURRENT_DATE',
        description: 'Returns the current date.',
        syntax: 'CURRENT_DATE',
        examples: [],
        sqlSyntax: 'SELECT CURRENT_DATE AS Result;',
        sqlQuery: 'Result',
        sqlOutput: '2023-10-22',
      },
      {
        title: 'CURRENT_TIME',
        description: 'Returns the current time.',
        syntax: 'CURRENT_TIME',
        examples: [],
        sqlSyntax: 'SELECT CURRENT_TIME AS Result;',
        sqlQuery: 'Result',
        sqlOutput: '14:30:45',
      },
      {
        title: 'CURRENT_TIMESTAMP',
        description: 'Returns the current timestamp (date and time).',
        syntax: 'CURRENT_TIMESTAMP',
        examples: [],
        sqlSyntax: 'SELECT CURRENT_TIMESTAMP AS Result;',
        sqlQuery: 'Result',
        sqlOutput: '2023-10-22 14:30:45',
      },
      {
        title: 'DATE',
        description: 'Extracts the date part from a datetime value.',
        syntax: 'DATE(datetime_expression)',
        examples: [
          "DATE('2023-10-22 14:30:45') = '2023-10-22'",
        ],
        sqlSyntax: "SELECT DATE('2023-10-22 14:30:45') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '2023-10-22',
      },
      {
        title: 'TIME',
        description: 'Extracts the time part from a datetime value.',
        syntax: 'TIME(datetime_expression)',
        examples: [
          "TIME('2023-10-22 14:30:45') = '14:30:45'",
        ],
        sqlSyntax: "SELECT TIME('2023-10-22 14:30:45') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '14:30:45',
      },
      {
        title: 'TIMESTAMPADD',
        description: 'Adds an interval to a datetime value.',
        syntax: 'TIMESTAMPADD(interval, count, datetime_expression)',
        examples: [
          "TIMESTAMPADD(MINUTE, 30, '2023-10-22 14:30:45') = '2023-10-22 15:00:45'",
        ],
        sqlSyntax: "SELECT TIMESTAMPADD(MINUTE, 30, '2023-10-22 14:30:45') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '2023-10-22 15:00:45',
      },
      {
        title: 'TIMESTAMPDIFF',
        description: 'Returns the difference between two datetime values in a specified interval.',
        syntax: 'TIMESTAMPDIFF(interval, datetime1, datetime2)',
        examples: [
          "TIMESTAMPDIFF(MINUTE, '2023-10-22 14:30:45', '2023-10-22 15:00:45') = 30",
        ],
        sqlSyntax: "SELECT TIMESTAMPDIFF(MINUTE, '2023-10-22 14:30:45', '2023-10-22 15:00:45') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '30',
      },
      {
        title: 'YEAR',
        description: 'Extracts the year from a date or datetime value.',
        syntax: 'YEAR(date_expression)',
        examples: [
          "YEAR('2023-10-22') = 2023",
        ],
        sqlSyntax: "SELECT YEAR('2023-10-22') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '2023',
      },
      {
        title: 'MONTH',
        description: 'Extracts the month from a date or datetime value.',
        syntax: 'MONTH(date_expression)',
        examples: [
          "MONTH('2023-10-22') = 10",
        ],
        sqlSyntax: "SELECT MONTH('2023-10-22') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '10',
      },
      {
        title: 'DAY',
        description: 'Extracts the day from a date or datetime value.',
        syntax: 'DAY(date_expression)',
        examples: [
          "DAY('2023-10-22') = 22",
        ],
        sqlSyntax: "SELECT DAY('2023-10-22') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '22',
      },
      {
        title: 'HOUR',
        description: 'Extracts the hour from a time or datetime value.',
        syntax: 'HOUR(time_expression)',
        examples: [
          "HOUR('14:30:45') = 14",
        ],
        sqlSyntax: "SELECT HOUR('14:30:45') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '14',
      },
      {
        title: 'MINUTE',
        description: 'Extracts the minute from a time or datetime value.',
        syntax: 'MINUTE(time_expression)',
        examples: [
          "MINUTE('14:30:45') = 30",
        ],
        sqlSyntax: "SELECT MINUTE('14:30:45') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '30',
      },
      {
        title: 'SECOND',
        description: 'Extracts the second from a time or datetime value.',
        syntax: 'SECOND(time_expression)',
        examples: [
          "SECOND('14:30:45') = 45",
        ],
        sqlSyntax: "SELECT SECOND('14:30:45') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '45',
      },
      {
        title: 'WEEK',
        description: 'Returns the week number for a date value.',
        syntax: 'WEEK(date_expression, mode)',
        examples: [
          "WEEK('2023-10-22') = 42",
        ],
        sqlSyntax: "SELECT WEEK('2023-10-22') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '42',
      },
      {
        title: 'DATEDIFF',
        description: 'Returns the number of days between two date values.',
        syntax: 'DATEDIFF(date1, date2)',
        examples: [
          "DATEDIFF('2023-10-22', '2023-10-15') = 7",
        ],
        sqlSyntax: "SELECT DATEDIFF('2023-10-22', '2023-10-15') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '7',
      },
      {
        title: 'ADDDATE',
        description: 'Adds a specified number of days to a date value.',
        syntax: 'ADDDATE(date, days)',
        examples: [
          "ADDDATE('2023-10-22', 7) = '2023-10-29'",
        ],
        sqlSyntax: "SELECT ADDDATE('2023-10-22', 7) AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '2023-10-29',
      },
      {
        title: 'SUBDATE',
        description: 'Subtracts a specified number of days from a date value.',
        syntax: 'SUBDATE(date, days)',
        examples: [
          "SUBDATE('2023-10-22', 7) = '2023-10-15'",
        ],
        sqlSyntax: "SELECT SUBDATE('2023-10-22', 7) AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '2023-10-15',
      },
      {
        title: 'ADDTIME',
        description: 'Adds a specified time to a datetime value.',
        syntax: 'ADDTIME(datetime_expression, time_interval)',
        examples: [
          "ADDTIME('2023-10-22 14:30:45', '02:15:30') = '2023-10-22 16:46:15'",
        ],
        sqlSyntax: "SELECT ADDTIME('2023-10-22 14:30:45', '02:15:30') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '2023-10-22 16:46:15',
      },
      {
        title: 'SUBTIME',
        description: 'Subtracts a specified time from a datetime value.',
        syntax: 'SUBTIME(datetime_expression, time_interval)',
        examples: [
          "SUBTIME('2023-10-22 14:30:45', '02:15:30') = '2023-10-22 12:15:15'",
        ],
        sqlSyntax: "SELECT SUBTIME('2023-10-22 14:30:45', '02:15:30') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '2023-10-22 12:15:15',
      },
      {
        title: 'LAST_DAY',
        description: 'Returns the last day of the month for a date value.',
        syntax: 'LAST_DAY(date)',
        examples: [
          "LAST_DAY('2023-10-22') = '2023-10-31'",
        ],
        sqlSyntax: "SELECT LAST_DAY('2023-10-22') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '2023-10-31',
      },
      {
        title: 'DATE_FORMAT',
        description: 'Formats a date or datetime value as a string.',
        syntax: 'DATE_FORMAT(date, format)',
        examples: [
          "DATE_FORMAT('2023-10-22', '%Y-%m-%d') = '2023-10-22'",
        ],
        sqlSyntax: "SELECT DATE_FORMAT('2023-10-22', '%Y-%m-%d') AS Result;",
        sqlQuery: 'Result',
        sqlOutput: '2023-10-22',
      },
      // Add more date and time functions here
    ];


  selectedCategory: {
    title: string;
    description: string;
    syntax: string;
    examples: string[];
    sqlSyntax: string;
    sqlQuery: string;
    sqlOutput: string;
  } | null = null; // Initialize it as null

  ngOnInit() {
    // Initialize date functions and create rows
    this.buttonRows = this.chunkArray(this.categories, 5);
  }
  
  buttonRows: any[] = [];
  // Function to split an array into chunks of a specific size
  chunkArray(array: any[], size: number): any[] {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  }

  showCategory(category: string): void {
    this.selectedCategory = this.categories.find(c => c.title.toLowerCase() === category.toLowerCase()) || null;
  }


}
