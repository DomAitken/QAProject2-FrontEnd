# Cloud Native - Plant Tracker Project

Dom Aitken

## Introduction:
The brief was to create a CRUD application that encapsulated all the core modules covered during the training.
Project Management - A fully expanded Jira board, clear documentation from a design phase. Code integrated into a Version Control System.
Databases - A relational database to store persistent data from the project.
Java SE & Spring Boot - Functional application created in OOP language which meets requirements of Kanban board.
Testing - Acceptable level of test coverage on back-end (JUnit).
Front-End Development - Functioning front-end website with API integration.

## Planning Resources:
Using Jira Software I created a Kanban board modelled as a Scrum and created the user stories and epics. From the user stories I created linked issues for the front and back end of my project to help the structure of the build. I created several user stories, incorporating the MoSCoW prioritisation format. An example of one is shown here:

![image](https://user-images.githubusercontent.com/93253286/146449680-10441e92-f9f6-494d-9084-cc3e8ed6392b.png)

Throughout the project build I adhered to only one sprint, as I decided that the timescale we were given was not long enough to justify multiple sprints.

![image](https://user-images.githubusercontent.com/93253286/146449728-dccd575d-863a-4d6d-9e92-ceda1381c47f.png)

I set up two git repositories before starting - one for the front-end and one for back-end. This is the network graph from my back-end repository:



## Databases
Two databases were used in this project, a local H2 database which was used for testing the back-end and a MySQL database for storing the persistent data from the application.
H2:
The H2 database was created with plant-schema.sql and plant-data.sql files to automatically populate the fields for testing purposes.

![image](https://user-images.githubusercontent.com/93253286/146449790-cca7d545-c391-4687-9ddd-0019958a6c79.png)

MySQL:

![image](https://user-images.githubusercontent.com/93253286/146449854-eb947a8b-b04f-465c-aab9-9d84a2a36076.png)

## Back-end + Testing:
The back-end of this project was created using Java in a Spring Boot Framework. I made sure that all of my Kanban board requirements were met with the correct mappings in my code.

![image](https://user-images.githubusercontent.com/93253286/146449883-4cde3972-5460-4b8c-9b60-91fa131bd74d.png)

## Testing:
I used a JUnit test structure on this project.

![image](https://user-images.githubusercontent.com/93253286/146449911-875aa41d-0a76-4c87-8f4e-4b2f4ed70fe8.png)

(Not remarkable, I know.)

To make sure that the program was working, I used MockMVC to create a mocked Controller class.

It performed mock HTTP requests like a user of the program would and allowed me to test the outcomes of each HTTP endpoint.

Unit testing: JUnit

By unit testing each part of the program I could check that the individual parts are working as they should. Using Mockito I mocked the responses given by the repo so that I could test if what came out of my method matched my testing data.

![image](https://user-images.githubusercontent.com/93253286/146449952-3ff06d5e-96b2-437a-8b68-624682eef56f.png)

## Front-End:
The front-end is built from HTML, CSS and JavaScript. I used the Bootstrap framework for various components, including forms, modals and toasts.
The HTML and CSS are used to create the look of the website, I used CSS to alter the position of h1 and h2 headers, but nothing else.

![image](https://user-images.githubusercontent.com/93253286/146449971-d163dbed-d36f-4f5d-bd58-8c5b2888272f.png)
 
The JS was used for the API integration using axios, thus allowing the program to communicate with the database via my Java files.
