import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {
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
      title: 'CONCAT()',
      description: 'Combines two or more strings into a single string.',
      syntax: 'CONCAT(string1, string2, ...)',
      examples: [
        "CONCAT('Hello', ' ', 'World') = 'Hello World'",
        "CONCAT('SQL', ' is a powerful', ' language') = 'SQL is a powerful language'"
      ],
      sqlSyntax: "SELECT CONCAT('Hello', ' ', 'World') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "Hello World"
    },
    {
      title: 'SUBSTRING()',
      description: 'Extracts a substring from a given string.',
      syntax: 'SUBSTRING(string, start_position, length)',
      examples: [
        "SUBSTRING('Hello World', 7, 5) = 'World'",
        "SUBSTRING('SQL is great', 1, 3) = 'SQL'"
      ],
      sqlSyntax: "SELECT SUBSTRING('Hello World', 7, 5) AS Result;",
      sqlQuery: "Result",
      sqlOutput: "World"
    },
    {
      title: 'LENGTH() or LEN()',
      description: 'Returns the length (number of characters) of a string.',
      syntax: 'LEN(string) or LENGTH(string)',
      examples: [
        "LEN('Hello') = 5",
        "LENGTH('SQL is great') = 12"
      ],
      sqlSyntax: "SELECT LEN('Hello') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "5"
    },
    {
      title: 'UPPER() or UCASE()',
      description: 'Converts a string to uppercase.',
      syntax: 'UPPER(string) or UCASE(string)',
      examples: [
        "UPPER('Hello') = 'HELLO'",
        "UCASE('SQL is great') = 'SQL IS GREAT'"
      ],
      sqlSyntax: "SELECT UPPER('Hello') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "HELLO"
    },
    {
      title: 'LOWER() or LCASE()',
      description: 'Converts a string to lowercase.',
      syntax: 'LOWER(string) or LCASE(string)',
      examples: [
        "LOWER('Hello') = 'hello'",
        "LCASE('SQL is great') = 'sql is great'"
      ],
      sqlSyntax: "SELECT LOWER('Hello') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "hello"
    },
    {
      title: 'TRIM()',
      description: 'Removes leading and trailing whitespace from a string.',
      syntax: 'TRIM(string)',
      examples: [
        "TRIM(' Hello ') = 'Hello'",
        "TRIM(' SQL is great ') = 'SQL is great'"
      ],
      sqlSyntax: "SELECT TRIM(' Hello ') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "Hello"
    },
    {
      title: 'REPLACE()',
      description: 'Replaces occurrences of a specified substring with another substring in a string.',
      syntax: 'REPLACE(string, old_substring, new_substring)',
      examples: [
        "REPLACE('Hello World', 'World', 'Universe') = 'Hello Universe'",
        "REPLACE('SQL is great', 'great', 'awesome') = 'SQL is awesome'"
      ],
      sqlSyntax: "SELECT REPLACE('Hello World', 'World', 'Universe') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "Hello Universe"
    },
    {
      title: 'CHARINDEX() or INSTR()',
      description: 'Returns the position of a substring within a string.',
      syntax: 'CHARINDEX(substring, string) or INSTR(string, substring)',
      examples: [
        "CHARINDEX('World', 'Hello World') = 6",
        "INSTR('SQL', 'SQL is great') = 1"
      ],
      sqlSyntax: "SELECT CHARINDEX('World', 'Hello World') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "6"
    },
    {
      title: 'CONCAT_WS()',
      description: 'Concatenates values with a specified separator.',
      syntax: 'CONCAT_WS(separator, value1, value2, ...)',
      examples: [
        "CONCAT_WS(', ', 'John', 'Doe') = 'John, Doe'",
        "CONCAT_WS(' - ', '2022', '10', '22') = '2022 - 10 - 22'"
      ],
      sqlSyntax: "SELECT CONCAT_WS(', ', 'John', 'Doe') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "John, Doe"
    },
    {
      title: 'LEFT()',
      description: 'Returns a specified number of characters from the beginning of a string.',
      syntax: 'LEFT(string, number_of_characters)',
      examples: [
        "LEFT('Hello', 3) = 'Hel'",
        "LEFT('SQL is great', 4) = 'SQL '"
      ],
      sqlSyntax: "SELECT LEFT('Hello', 3) AS Result;",
      sqlQuery: "Result",
      sqlOutput: "Hel"
    },
    {
      title: 'RIGHT()',
      description: 'Returns a specified number of characters from the end of a string.',
      syntax: 'RIGHT(string, number_of_characters)',
      examples: [
        "RIGHT('Hello', 3) = 'llo'",
        "RIGHT('SQL is great', 5) = ' great'"
      ],
      sqlSyntax: "SELECT RIGHT('Hello', 3) AS Result;",
      sqlQuery: "Result",
      sqlOutput: "llo"
    },
    {
      title: 'REVERSE()',
      description: 'Reverses the characters in a string.',
      syntax: 'REVERSE(string)',
      examples: [
        "REVERSE('Hello') = 'olleH'",
        "REVERSE('SQL is great') = 'taerg si LQS'"
      ],
      sqlSyntax: "SELECT REVERSE('Hello') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "olleH"
    },
    {
      title: 'CHAR_LENGTH() or CHARACTER_LENGTH()',
      description: 'Returns the number of characters in a string.',
      syntax: 'CHAR_LENGTH(string) or CHARACTER_LENGTH(string)',
      examples: [
        "CHAR_LENGTH('Hello') = 5",
        "CHARACTER_LENGTH('SQL is great') = 12"
      ],
      sqlSyntax: "SELECT CHAR_LENGTH('Hello') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "5"
    },
    {
      title: 'LOCATE() or POSITION()',
      description: 'Returns the position of the first occurrence of a substring in a string.',
      syntax: 'LOCATE(substring, string) or POSITION(substring IN string)',
      examples: [
        "LOCATE('World', 'Hello World') = 7",
        "POSITION('SQL', 'SQL is great') = 1"
      ],
      sqlSyntax: "SELECT LOCATE('World', 'Hello World') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "7"
    },
    {
      title: 'STRPOS()',
      description: 'Returns the position of the first occurrence of a substring in a string.',
      syntax: 'STRPOS(string, substring)',
      examples: [
        "STRPOS('Hello World', 'World') = 7",
        "STRPOS('SQL is great', 'SQL') = 1"
      ],
      sqlSyntax: "SELECT STRPOS('Hello World', 'World') AS Result;",
      sqlQuery: "Result",
      sqlOutput: "7"
    }
  ];

  selectedCategory!: {
    title: string;
    description: string;
    syntax: string;
    examples: string[];
  };

  ngOnInit() {
    // Create rows of 8 buttons
    this.buttonRows = this.chunkArray(this.categories, 8);
  }

  buttonRows: any[] = [];

  showCategory(category: string): void {
    this.selectedCategory = this.categories.find(c => c.title.toLowerCase() === category.toLowerCase()) || this.selectedCategory;
  }

  // Function to split an array into chunks of a specific size
  chunkArray(array: any[], size: number): any[] {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  }
}
