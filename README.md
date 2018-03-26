# CodeLou_FrontEnd

## Description
```
I created this website to help me organize my best friend's bachelorette party from 1,000 miles away; her friends are scattered across the country and they needed an easy place to find info and plan their trip. The most useful feature is the party cost calculator that will let them answer some questions and find out how much they can expect to spend on the whole weekend, so they can budget.

```
## Custom CSS Classes
```
The class(es) I created are:

1. .containter--Used to define all four main sections of content below the header.  I needed to apply some styles to all four, but used IDs on them individually to be able to isolate one an apply a separate style.

2. .main-nav--defines the ul that contains all li elements that make up the main navigation.

    a) .main-nav li--used to define all li elements within the ul with the class .main nav.  Isolated them to use flexbox to orient them as a row.

    b) .main-nav li:hover--used a pseudo class to define a hover state for all children of the ul with the class ".main-nav"


```
## Custom CSS IDs
```
The IDs I created are:

1. #hero--used to isolate the top banner and apply a hero image in the background.

2. #headline--use to isolate the h1 within the hero banner and apply different text styling to it.

3. #top--used to isolate the entire area of the main-nav so the "Back to top" button at the bottom could point anywhere in that area.

4. #intro--used to isolate the paragraph within the hero and apply text styles not shared by other <p> tags.


The following four were used to isolate the four main content sections between the header/hero and footer for specialized styling/layout as needed. Each has a different background color, and unique margins.

5. #deets 
6. #cost 
7. #food 
8. #check-out 

9. #backToTop--Used to isolate the "back to top" button in the footer to float it to the right.

```
## Custom JavaScript Functions
```
The javascript functions I created are:

1. function calculatePrice(costCalculator){ };
    This function gets selected data by ID.  When the user makes a choice, it converts the choice into a value, converts that value to an integer using ParseInt, calculates the total with simple addition, and prints that total to the screen.  The total recalculates in real time for the user as they make different selections.

```
