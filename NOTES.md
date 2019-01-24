# FIRST: CHALLENGES
1. Some how getting user feedback
eg: typing a term in the search bar
2. Once search term is retrieved, how to use that term to make a request to an external API
- Use a free API to match the search term and return the results
3. How to render the list onto the browser display

# What Components to create?
[x] Create SearchBar Component responsible for just showing text at top of screen
  - will handle the typing event
[] Create PhotoList Component responsible for rendering a list of photos on the screen
[x] Will still have an App Component(most root)

- A couple of different Components will end up in the App Component
- Those different Components will have different CSS files
- Will not define App Component in `index.js`, it will be created in a Component file under /components

[x] Add a touch of styling to the input search bar with semantic ui

# Functionality
- How to handle user input in the search bar
- Different event Property names
eg:

EVENT | PropertyName
-- | --
CLICK | onClick
CHANGE | onChange
SUBMIT | onSubmit

# Trigger Search
- After user presses enter key from typing in the search bar, trigger search
- Show images on the screen

[x] Detect when user presses enter key

# API Request and Attempt Fetch
- SearchBar Component isn't responsible to make fetch request
- App Component should make API request and get list of images
- Take search term and pass it back up to the App Component
- Where to initiate to attempt fetching images
- PROPs system allows info to be passed down from Parent to Child(ren)

[x] When user hits enter, fetch images
[x] Turn App Component to class-based Component
[x] In App define CB name onSearchSubmit, passed down to SearchBar
  - User submitted the form? Better call the CB to tell App(this.onSearchSubmit)
[x] Reference Prop to Child component

#Fetch Data
- The application is running inside the user's browser
- Enter search term and hit enter, make AJAX/Network request to an API
- Issue network request from Photos application

[x] Implement Axios
[x] Modify onSearchSubmit to call Axios function
[x] Use Axios and Unsplash doc to make request to API
[x] Console log some images
[] How to get data out of request
[] Render list of images
[x] Short-term goal: app will display the number of photos fetched

1. Component renders itself one time with no photos list
2. onSearchSubmit method called
3. Request made to Unsplash
---WAIT---
4. Request is complete
5. Set photo data on State of App Component
6. App Component re-renders and shows photos!

# SET STATE AFTER ASYNC Request
- After getting response, set it on App Component State

[x] Add State in App Component/initialize
[x] Fix TypeError with 1 of 3 methods
[] Code cleanup around Axios code, remove configuration from App Component
