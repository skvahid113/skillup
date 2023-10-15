import { Component } from '@angular/core';

@Component({
  selector: 'app-sqlcommands',
  templateUrl: './sqlcommands.component.html',
  styleUrls: ['./sqlcommands.component.css']
})
export class SqlcommandsComponent {

  selectedContent: string = 'ddl';

  // Define an array of products with the same structure as your records
  products = [
    { ProductID: 1, ProductName: 'Cocoa Coffee', Description: 'Delicious cocoa-flavored coffee blend', Price: 19.99, StockQuantity: 100, IsActive: 1, ReleaseDate: '2023-01-15', LastUpdated: '2023-01-15 10:30:00', CategoryID: 1 },
    { ProductID: 2, ProductName: 'Espresso Blend', Description: 'Strong and bold espresso coffee', Price: 29.99, StockQuantity: 150, IsActive: 1, ReleaseDate: '2023-01-16', LastUpdated: '2023-01-16 11:45:00', CategoryID: 2 },
    { ProductID: 3, ProductName: 'Vanilla Latte', Description: 'Smooth and creamy vanilla latte', Price: 39.99, StockQuantity: 200, IsActive: 1, ReleaseDate: '2023-01-17', LastUpdated: '2023-01-17 09:15:00', CategoryID: 1 },
    { ProductID: 4, ProductName: 'Mocha Frappuccino', Description: 'Chilled mocha frappuccino', Price: 49.99, StockQuantity: 50, IsActive: 1, ReleaseDate: '2023-01-18', LastUpdated: '2023-01-18 14:20:00', CategoryID: 2 },
    { ProductID: 5, ProductName: 'Caramel Macchiato', Description: 'Caramel-infused macchiato coffee', Price: 59.99, StockQuantity: 75, IsActive: 1, ReleaseDate: '2023-01-19', LastUpdated: '2023-01-19 16:55:00', CategoryID: 1 },
    { ProductID: 6, ProductName: 'Iced Americano', Description: 'Refreshingly iced Americano coffee', Price: 69.99, StockQuantity: 90, IsActive: 1, ReleaseDate: '2023-01-20', LastUpdated: '2023-01-20 08:45:00', CategoryID: 2 },
    { ProductID: 7, ProductName: 'Hazelnut Cappuccino', Description: 'Rich and nutty hazelnut cappuccino', Price: 79.99, StockQuantity: 120, IsActive: 1, ReleaseDate: '2023-01-21', LastUpdated: '2023-01-21 15:30:00', CategoryID: 1 },
    { ProductID: 8, ProductName: 'Decaf Dark Roast', Description: 'Decaffeinated dark roast coffee', Price: 69.99, StockQuantity: 80, IsActive: 1, ReleaseDate: '2023-01-22', LastUpdated: '2023-01-22 10:20:00', CategoryID: 2 },
    { ProductID: 9, ProductName: 'Irish Cream Latte', Description: 'Irish cream-flavored latte', Price: 89.99, StockQuantity: 110, IsActive: 1, ReleaseDate: '2023-01-23', LastUpdated: '2023-01-23 13:10:00', CategoryID: 1 },
    { ProductID: 10, ProductName: 'Cinnamon Mocha', Description: 'Sweet and spicy cinnamon mocha', Price: 79.99, StockQuantity: 60, IsActive: 1, ReleaseDate: '2023-01-24', LastUpdated: '2023-01-24 17:40:00', CategoryID: 2 }
  ];


}
