import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-math-functions',
  templateUrl: './math-functions.component.html',
  styleUrls: ['./math-functions.component.css']
})
export class MathFunctionsComponent implements OnInit {

  selectedContent: string = 'not-null-constraint';
  contentTemplate!: TemplateRef<any>;
  activeButton: string | null = 'not-null-constraint';
  blinkingInterval: any;


  selectedCategory!: {
    title: string,
    description: string,
    syntax: string,
    examples: string[],
    sqlSyntax: string,
    sqlQuery: string,
    sqlOutput: string
  };

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
      title: 'Basic Arithmetic Functions',
      description: 'Perform basic arithmetic operations on numbers.',
      syntax: '+, -, *, /, %',
      examples: [
        'Addition Example: 2 + 3 = 5',
        'Subtraction Example: 8 - 4 = 4',
        'Multiplication Example: 5 * 6 = 30',
        'Division Example: 10 / 2 = 5',
        'Modulus Example: 7 % 3 = 1'
      ],
      sqlSyntax: 'SQL Syntax: SELECT 2 + 3, 8 - 4, 5 * 6, 10 / 2, 7 % 3;',
      sqlQuery: 'SQL Query: SELECT 2 + 3, 8 - 4, 5 * 6, 10 / 2, 7 % 3;',
      sqlOutput: 'SQL Output: 5, 4, 30, 5, 1'
    },
    {
      title: 'Mathematical Functions',
      description: 'Perform various mathematical calculations.',
      syntax: 'ABS(), CEIL(), FLOOR(), ROUND(), TRUNCATE(), POWER(), SQRT(), EXP(), LOG(), LOG10()',
      examples: [
        'Absolute Value Example: ABS(-10) = 10',
        'Ceiling Example: CEIL(4.3) = 5',
        'Floor Example: FLOOR(4.7) = 4',
        'Rounding Example: ROUND(3.456, 2) = 3.46',
        'Square Root Example: SQRT(16) = 4',
        'Exponential Example: EXP(2) = 7.389',
        'Natural Log Example: LOG(10) = 2.303',
        'Base-10 Log Example: LOG10(100) = 2'
      ],
      sqlSyntax: 'SQL Syntax: SELECT ABS(-10), CEIL(4.3), FLOOR(4.7), ROUND(3.456, 2), SQRT(16), EXP(2), LOG(10), LOG10(100);',
      sqlQuery: 'SQL Query: SELECT ABS(-10), CEIL(4.3), FLOOR(4.7), ROUND(3.456, 2), SQRT(16), EXP(2), LOG(10), LOG10(100);',
      sqlOutput: 'SQL Output: 10, 5, 4, 3.46, 4, 7.389, 2.303, 2'
    },
    {
      title: 'Trigonometric Functions',
      description: 'Perform trigonometric calculations.',
      syntax: 'SIN(), COS(), TAN(), ASIN(), ACOS(), ATAN(), ATAN2()',
      examples: [
        'Sine Example: SIN(30 degrees) = 0.5',
        'Cosine Example: COS(60 degrees) = 0.5',
        'Tangent Example: TAN(45 degrees) = 1',
        'Arcsine Example: ASIN(0.5) = 30 degrees',
        'Arccosine Example: ACOS(0.5) = 60 degrees',
        'Arctangent Example: ATAN(1) = 45 degrees',
        'Arctangent of Quotient Example: ATAN2(1, 1) = 45 degrees'
      ],
      sqlSyntax: 'SQL Syntax: SELECT SIN(30), COS(60), TAN(45), ASIN(0.5), ACOS(0.5), ATAN(1), ATAN2(1, 1);',
      sqlQuery: 'SQL Query: SELECT SIN(30), COS(60), TAN(45), ASIN(0.5), ACOS(0.5), ATAN(1), ATAN2(1, 1);',
      sqlOutput: 'SQL Output: 0.5, 0.5, 1, 0.5235987755982989, 1.0471975511965979, 0.7853981633974483, 0.7853981633974483'
    },
    {
      title: 'Hyperbolic Functions',
      description: 'Perform hyperbolic calculations.',
      syntax: 'SINH(), COSH(), TANH()',
      examples: [
        'Hyperbolic Sine Example: SINH(2) = 3.6268604078470186',
        'Hyperbolic Cosine Example: COSH(2) = 3.7621956910836314',
        'Hyperbolic Tangent Example: TANH(2) = 0.9640275800758169'
      ],
      sqlSyntax: 'SQL Syntax: SELECT SINH(2), COSH(2), TANH(2);',
      sqlQuery: 'SQL Query: SELECT SINH(2), COSH(2), TANH(2);',
      sqlOutput: 'SQL Output: 3.6268604078470186, 3.7621956910836314, 0.9640275800758169'
    },
    {
      title: 'Random Number Functions',
      description: 'Generate random numbers.',
      syntax: 'RAND(), RAND(N), FLOOR(RAND() * N)',
      examples: [
        'Random Float (0 to 1) Example: RAND() = 0.4288819379068567',
        'Random Float (0 to N) Example: RAND(10) = 7.238469256405487',
        'Random Integer (0 to N) Example: FLOOR(RAND() * 10) = 3'
      ],
      sqlSyntax: 'SQL Syntax: SELECT RAND(), RAND(10), FLOOR(RAND() * 10);',
      sqlQuery: 'SQL Query: SELECT RAND(), RAND(10), FLOOR(RAND() * 10);',
      sqlOutput: 'SQL Output: 0.4288819379068567, 7.238469256405487, 3'
    },
    {
      title: 'Other Functions',
      description: 'Perform miscellaneous functions.',
      syntax: 'SIGN(), PI()',
      examples: [
        'Sign of a Number Example: SIGN(-5) = -1',
        'Value of π Example: PI() = 3.141592653589793'
      ],
      sqlSyntax: 'SQL Syntax: SELECT SIGN(-5), PI();',
      sqlQuery: 'SQL Query: SELECT SIGN(-5), PI();',
      sqlOutput: 'SQL Output: -1, 3.141592653589793'
    },
    {
      title: 'Aggregate Functions',
      description: 'Perform aggregate calculations on sets of data.',
      syntax: 'SUM(), AVG(), MIN(), MAX()',
      examples: [
        'Sum Example: SUM(column) - Calculate the sum of a column',
        'Average Example: AVG(column) - Calculate the average of a column',
        'Minimum Example: MIN(column) - Find the minimum value in a column',
        'Maximum Example: MAX(column) - Find the maximum value in a column'
      ],
      sqlSyntax: 'SQL Syntax: SELECT SUM(column), AVG(column), MIN(column), MAX(column) FROM table;',
      sqlQuery: 'SQL Query: SELECT SUM(column), AVG(column), MIN(column), MAX(column) FROM table;',
      sqlOutput: 'SQL Output: Sum Result, Average Result, Minimum Result, Maximum Result'
    },
  ];

  showCategory(category: string): void {
    this.selectedCategory = this.categories.find(c => c.title.toLowerCase() === category.toLowerCase()) || this.selectedCategory;
  }

  constructor() {
    // Set the default category
    this.selectedCategory = this.categories[0]; // Use the first category as the default
  }

  ngOnInit() {
    // Set the default content to "data" when the component is initialized
    this.selectedContent = 'not-null-constraint';
  }


  // Function to handle button clicks and initiate blinking
  handleClick(button: string) {
    this.selectedContent = button; // Update the selected content
    this.activeButton = button; // Set the active button

    // Clear any existing blinking interval
    if (this.blinkingInterval) {
      clearInterval(this.blinkingInterval);
    }

    // Create a blinking effect by toggling the active-button class every 500ms
    this.blinkingInterval = setInterval(() => {
      if (this.activeButton === button) {
        this.activeButton = null; // Turn off the blinking effect
      } else {
        this.activeButton = button; // Turn on the blinking effect
      }
    }, 500);



    
  }

}
