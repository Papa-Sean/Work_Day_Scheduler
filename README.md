I added README.md file to repository 

HTML:
    Created containers for each hour
    linked stylesheet to those containers
    created an area for data to be displayed once saved/entered
    created a button to save/submit
    copied/pasted to build out the page with no js support just yet
    added an icon to the calendar

CSS:
    made a list of tags, will link to html as I go

JS:
    added a way to track the current day
    added homes for each hour
    added homes for each hour/description linked to html
    created a loop to log/locally store data
    created a link to display data in the right hour block
    made a way to have data load in each home
    restart the process each time the page is loaded

Pseudo:

Create container for 9:00, 10:00... - ... 5:00pm
Id CSS tags and assign to HTML and JS
Create text area in each time block and create button to submit/save

JS - I will have to have the current day as the first function
    I need to load any saved data to display
    Create a function to tack the current hour and display accordingly (past present future)
    - create instructions to display




# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
