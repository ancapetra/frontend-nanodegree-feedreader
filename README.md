# Project Overview

This project is a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! I wrote the rest.

# Steps to run the tests

1. First you have to download the http://github.com/ancapetra/frontend-nanodegree-feedreader.
2. To run the application just open the **./index.html** file in your browser.
3. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
4. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
5. Now you can understand how the tests are working and you can look through the first test suite.
6. First test suite is named `"RSSFeeds"`. First test was done so I've started with the second test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty. Third test loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
7. Creating a new test suite named `"The menu"`. First test ensures the menu element is hidden by default. Second test ensures the menu changes visibility when the menu icon is clicked. The menu display when clicked and hide when clicked again.
8. Creating a new test suite named `"Initial Entries"`. The test ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
9. Creating a new test suite named `"New Feed Selection"`. This test ensures when a new feed is loaded by the loadFeed function that the content actually changes.
10. You can try and edit for example the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
11. If a test is passing the spec is green.
12. If a test failed it will show a failure.
13. All of the tests should pass.

# Resources

1. Jasmine documentation https://jasmine.github.io/.
2. jQuery documentation https://api.jquery.com/.
3. Course https://classroom.udacity.com/nanodegrees/.