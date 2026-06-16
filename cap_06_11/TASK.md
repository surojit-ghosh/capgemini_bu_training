#1 
Online Food Order App – Restaurant Info Panel
Problem Statement
You are building a small online food ordering app.
The page has:
A counter to increase/decrease the number of food items selected
A separate RestaurantInfo component that shows:
Restaurant name
Rating
Delivery time
When the user changes the item quantity, the RestaurantInfo component should not re-render unnecessarily, because its data is not changing.
Use React.memo to optimize the RestaurantInfo component.
Create a parent component called FoodOrderApp
Display:
Selected Items: 0
+ button
- button
Create a child component RestaurantInfo
Show static restaurant details:
Name: Spice Garden
Rating: 4.5
Delivery Time: 30 mins
Wrap RestaurantInfo using React.memo
Add a console.log() inside RestaurantInfo to check whether it re-renders

#2
Student Result Portal – Calculate Total Marks
Problem Statement
You are building a student result portal.
The page contains:
A list of marks of a student in different subjects
A button to increase a separate counter called Theme Change Count
A section that calculates the total marks
The total marks calculation should be optimized using useMemo, so that it is recalculated only when marks change, not when unrelated state changes.
 
Requirements
Create a component called StudentResult
Store marks in an array like:[78, 85, 92, 88, 76]
 
Show:
Subject marks
Total marks
A button: Change Theme
Theme change count
When theme count changes, total marks should not recalculate unnecessarily
Use useMemo for total marks calculation
Add console.log("Calculating total...") inside the calculation logic

#3
Library Management – Add Book to Favorites
Problem Statement
You are building a small library management page.
The page displays:
A list of books
A child component called BookList
A button to change a separate value like page title color
A function to mark a book as Favorite
The function passed to BookList should not be recreated on every render unnecessarily. Use useCallback for this.
 
Requirements
Create a parent component called LibraryApp
Store books in an array:
React Basics
JavaScript Essentials
Node.js Intro
Display books using child component BookList
Add a button:
Change Title Color
Add a function markAsFavorite(bookName)
Pass this function to the child component
Use useCallback to memoize the function
Add console.log() in child component to observe rendering behavior