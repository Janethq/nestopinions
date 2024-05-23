# NestOpinion

A property review app with reviews by your fellow home searchers!

---

## Description / User Story

As a home searcher, I want to read honest home listings because the current propery apps available are only written up by property agents who try to paint a more rosy picture due to their own interests which might not be as aligned with the home searcher. On the contrary, fellow home searchers all have the same goals - to find the perfect home according to their needs.

Everyone has different requirements and opinions to what constitutes a perfect home and so as a user, they would want to be able to filter through relevant search queries while looking for their house.

As some things are quite subjective when it comes to housing opinions, it would be beneficial to look at the house from different perspectives of your fellow home searchers and see if there are other things that you have failed to consider but actually found it quite critical in your search for the perfect home.

## Getting Started - Planning

#### Project Time Frame

2 weeks

### [Trello Board](https://trello.com/b/nMGA0Eyq/ga-sei-project-3)

<img src="screenshots/trello.png">

### WireFrame in [Figma](https://www.figma.com/board/tnVfWKHcX4gzCulPPkbyaR/Project-3?node-id=0%3A1&t=IE89gLKHWpSDTkl7-1)

<img src="screenshots/wireframe.png">

### Example Schema in [Google Sheets](https://docs.google.com/spreadsheets/d/1En5AYS5Jb8o0fZvBJPKw_9DJl8ueUhnMdwmN__04wTc/edit?usp=sharing)

<img src="screenshots/exampleSchema.png">

### Deployed on Render

Try it here: (https://nestopinion.onrender.com/)

---

## [MERYL](https://github.com/Merylcheng)

### Landing Page

<img src="screenshots/LandingPg.png">

### Property Details

<img src="screenshots/Propdetails.png">

### Favourite

<img src="screenshots/Query.png">

Implement a search functionality for properties based on multiple criteria: area, postal code, and HDB type and handles potential errors.

### Seed properties and seed function

<img src="screenshots/seedproperties.png">

The seed data consists of information for properties. The seed function is an asynchronous process that is used to reset and populate the Property database collection with predefined data. The seed function clears the existing property data in the database and replaces it with new data from seedData. It logs messages to the console at each step to confirm the operations and sends back the newly inserted data as a JSON response.

### Embedded

<img src="screenshots/embedreview.png">

A property can have many reviews, which is a one-to-many relationship. Embedding occurs when a child subdocument (review) is embedded within its parent document (property).

### Key Takeaways

Working on this project as a team requires clear communication and effective project management. I am grateful that my team is very efficient in setting direction and goals for the project. For me, documenting the process has been a huge part of this project. Spending time planning my schedule, estimating and visualizing what I can complete, strategizing on how to tackle errors, and setting mini to-do lists the day before helps me manage myself and ensure good overall team progression.

---

## [VANITAA](https://github.com/vanitaar)

### User Model with Referencing in reviewsPosted Array

<img src="screenshots/userModel.png">

### AuthContext

Created AuthContext in order to carry authenticated user state throughout app and avoid prop drilling. This allowed me to then access AuthContext to determine user authorization. The {children} is in refrence to the App component.

<img src="screenshots/AuthContext.png">

### AuthRoutes and Using Middleware

<img src="screenshots/authRoutes.png">

### Fav Component: User's Dashboard

"My Profile" is the default tab.
<img src="screenshots/dashboard-profileSettings.png">
Users can click "My Reviews" to view their posted reviews.
<img src="screenshots/dashboard-postedReviews.png">

#### Dashboard Functionalities in AuthController

**CRUD: _Update_**
<img src="screenshots/authUpdatePassword.png">
**CRUD: _Delete_**
<img src="screenshots/authDeleteReview.png">

### Another Fav: Protected Route

Created protected route to establish paths that require authorization and authentication.

<img src="screenshots/protectedRoute.png">
<img src="screenshots/protectedRouteClientSideUrlPath.png">

### Navigating

Wanted users who have been prompted to login or register to be able to return to their intended destination i.e. review form page of desired property. User flow:

- _add review - login - review form_
- _add review - login - register - review form_
  <img src="screenshots/handleAddReview-navigate.png">
  <img src="screenshots/register-navigate.png">

### Key Learnings and Challengers

- Working with **TailwindCSS** for the first time. Quite a jump from Bulma. But once you get the hang of it, styling with it becomes easier. I also like how it reinforces CSS fundementals.
- I initially had a hard time connecting the dots between frontend and backend. I do feel doing this project helped me have a better grasp of **client side vs server side** and how to connect them.
- Have a better understanding of **embedding vs referencing**. Embedding involves sub-documentation while referencing involves the storing of ObjectId.
- Realized the importance of **middleware**.
- Working and collaborating in a **team** for a coding project has been a different experience. It requires communication and proper planning. There's the added challenge of understanding and explaining one's code and also the realization that we all have different coding styles. I am thankful for my groupmates and I feel quite proud of how far we have come.

---

## [JANE](https://github.com/Janethq)

### Screenshots

- The review form
  <img src="screenshots/reviewForm.png">

- The reviews
  <img src="screenshots/reviewDetails.png">

### Favourite React Component

<img src="screenshots/reviewDetailsComponent.png">

- Allows for multiple queries
<img src="screenshots/multiplequery1.png">
<img src="screenshots/multiplequery2.png">

### Routing Component

<img src="screenshots/routing.png">

### CRUD

- create
  <img src="screenshots/create.png">

- read
  <img src="screenshots/read.png">

- remove
  <img src="screenshots/delete.png">

### Referencing

- Mongoose Model
  <img src="screenshots/referencingmodel.png">

- Model's View
  <img src="screenshots/referencingreviewform.png">

### Biggest Challenge

- referencing propertyID to each individual review

### Key Takeaways

- Learnt how to navigate monorepo
- Got more familiar with security concerns while creating an app

---

### Tech Stack

##### Programming Language

- **Javascript** - For both frontend and backend

##### Frontend

- **Vite** - Fast development build tool
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Hot Toast** - Notification library for React

##### Backend

- **Node.js** - JavaScript runtime environment
- **Express** - Web application framework for Node.js

##### Database

- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool

##### Authentication & Security

- **JSON Web Token (JWT)** - For creating and verifying tokens
- **jwt-decode** - Library to decode JWT tokens
- **bcrypt** - Password hashing library

##### Deployment

- **Render** - Cloud platform for deploying web applications

##### Development & Testing Tools

- **MongoDB Compass** - GUI tool for MongoDB
- **Bruno** - API testing tool (for backend validation)
- **VS Code** - Code editor
- **Trello** - Project management tool
- **Figma** - Wireframe tool (for UI/UX design)

### Icebox

- An additional user role: House Hunters and **Property Agents**

  - Agents would be able to create initial listings for properties and then manage them (update/delete).

- Allow house hunters to **upload images** in the review form.

- Allow users to **clap/upvote** for a review enabling interaction between fellow users.

- Include **map** to direct to property location.

- Include more **user dashboard functionalities**:

  - edit their posted reviews / update username / delete account.

- Enable **Google sign-in**

---

### QnA + Feedback
