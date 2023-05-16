## Tulisanku

be package.json ga pake axios

be pake express, mysql, cors, body-parser

## coder media

- pake sequelize
- package.json type: module, agar bisa es6 syntax utk import dan export module
- server.js nya pake index.js, sama saja hanya beda nama saat run `node server.js` jadinya `nodemon index` (pake nodemon)
- Produk model

  - Harus `DataTypes`, walau gpt nyocot bisa custom naming misal ~~`TipeData`~~ tapi pas di run ga bisa wkwk
  - Output run node server.js setelah buat file ini:
~~~
PS C:\AWEBSTORM\NODEjs\mern_product\be> node server.js
Server listening on port 3001
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'produk' AND TABLE_SCHEMA = 'produkdb'
Executing (default): CREATE TABLE IF NOT EXISTS `produk` (`id` INTEGER NOT NULL auto_increment , `name` VARCHAR(255), `buy_price` DECIMAL(10,2) NOT NULL, `sell_price` DECIMAL(10,2) NOT NULL, `stock` INTEGER NOT NULL, `photo` VARCHAR(255), `photo_
url` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `produk`
~~~
- 
