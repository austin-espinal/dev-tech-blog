# dev-tech-blog

  ![badge](https://img.shields.io/badge/license-MIT-green)
  

## Description 

This project was created to have a blog where devs or anyone in tech can share articles, their thoughts, and opinions. They can post articles, like, and comment on posts. This application uses Javascript, Node, and MySQL.

() 
The link above is a link to the application

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

You'll need to install MySQL for the project which instructions can be found at (https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

After downloading and extracting the project from the zip, open the terminal and install these node packages

* npm init -y
* npm i dotenv express bcrypt handlebars
* npm i mysql2 sequelize express-handlebars express-session
* npm i connect-session-sequelize

Make sure to duplicate the .env.EXAMPLE file first, then rename the duplicate as ".env". The user and password in the .env should match your MySQL user and password in order to use the application/ run the server.

The database needed for the application will need to be set up as well. First, log into MYSQL via the terminal using "mysql -uroot -p". Enter in your password and type in "SOURCE db/schema.sql" when MYSQL is connected to create the techBlog_db database. Exit MYSQL shell by typing in "quit;". Next, start the server by typing "npm start" in the terminal to set up the tables for the database then press CTRL + C and type "Y" to stop the server. After, you will want to populate the database with data via seeding. Type "npm run seed" in the terminal to seed the database. Now the application is ready to be used.

## Usage 




## License  
  

  [MIT](https://choosealicense.com/licenses/mit/)
    
The link to the license can be found above  
  

## Contributing

No contribution necessary

## Tests

insert testing

## Questions

Github: [austin-espinal](https://github.com/austin-espinal)   
Email: [austinespi@gmail.com](mailto:austinespi@gmail.com)  

For additional questions, You can reach me via email. Github is also acceptable. 
