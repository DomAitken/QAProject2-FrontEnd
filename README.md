# Cloud Native Project - Front End
This project is a demonstration of a working database system with a front-end website UI. The project is written in Java and SQL, and is tested with Maven. The project will also feature Github to Jira integration.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
To install this project and set up a test environment you must first ensure that you have the following prerequisites:

Java Runtime (JRE) - I am running JRE 1.8 while building this project.

Maven (https://maven.apache.org/)

Eclipse IDE (https://www.eclipse.org/downloads/packages/release/luna/sr1/eclipse-ide-java-developers)

MySQL Workbench / or any DB utility you prefer. EG: NaviCat / DBeaver (I used MySQL Workbench: https://dev.mysql.com/downloads/workbench/) 

### Installing
To set up the test environment for this project, first make sure you have all of the required prerequisites. Then open Eclipse and create a new Spring Starter Project.

There should be a folder listed in the file explorer directory called "application.properties". Open it, find and edit the details in the file to be the login for your MySQL database account. Next, locate "sql-data.sql" and run it to create the required databases.

The usage of this program is to allow a user to create, edit, read, and update a databse for NFL Players by interacting with a front-end website GUI.

For example if you wanted to create a player, when running the program just input the data into the prompted tables on the website. The application will add the data to the database table, where it will be stored persistently. This table can also be read from by pressing the "List All" button, updated by pressing the "Replace" button and have items deleted from it using the "delete" button.

## Running the tests
The tests included with this system are made to automatically run the code to see if the results we give it are possible to come back with. There are not enough tests in this project to cover the whole application, but the tests that exist in the project already can cover some of the areas.

To run a test, you can open the class that holds the test and click "coverage as, JUnit". To run all of the tests at once, right click on the project itself at "Src/Java" and click coverage as JUnit again.

## Deployment
To add this to a live system, make sure that the application properties in the application.properties folder match those that exist with your database, and update the sql-schema to include your tables.

If your tables are already existing and holding data, you may have to change a few methods in this application such as those found in the "Service" classes. The main changes will be to your SQL queries, but if your tables have different columns then this application will not be good to run on your system.

## Built With
Maven (https://maven.apache.org/) - Dependency Management

## Versioning
I used GitHub and MacOS Terminal for versioning.

## Authors
Chris Perrins - Initial work - christophperrins

Dom Aitken - Updated Functionality - DomAitken (www.github.com/DomAitken)

## License
This project is licensed under the MIT license - see the LICENSE.md file for details.

## Acknowledgments
Thanks to anyone whose code was used.

Jordan for the help with the project.
