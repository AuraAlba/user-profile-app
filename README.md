   # User profile app
   This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
    
   Below you will find some information on how to perform common tasks.<br>
   You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
   
   The purpose of this project is that a user can see and edit her or his information for edunext account.
   The user can see the followings fields:
   
   - Type subscription
   - Creation date of the account
   - Last payment
   - Profile Image
   
   The user can edit the following fields:
   
   - Time Zone
   - Email
   - Language
   - Theme name
   - Features list
   - Welcome Message
   
   The theme and the language are settled according with the user data, when the user change and save the information then language and theme will change. You can save information click on save button.
   
   Tasks related with the app were created in a Trello board, you can see them in the following link: https://trello.com/b/7AwTL1qP/user-profile
   
   Future features: 
   - Use redux to manage app state
   - User authentication
   - Profile visualization 
   - Home and ContactUs implementation 
   
   ## Technologies and libraries
   
   This projects use the following technologies and libraries:
   
   - ReactJs
   - ReactIntl
   - React Router
   - React Autosuggest
   - React Bootstrap Toggle
   - React froala wysiwyg
   - Webpack
   - Node
   - Axios
   - Sass
   - Bootstrap
   
   ## Instructions
   
   1. Clone the repository
   2. Locate in the project root folder
   3. Locate in the services folder `cd services`
   4. Install packages `npm install`
   5. Run mock services `node index.js`, server is run in `http://localhost:8010`
   6. Locate in the project root folder `cd ..`
   7. Install packages `npm install`
   8. Run User-profile app `npm start`
   
   By default the user loaded is with the key: `a237ed14-88fb-45f3-b9b1-471877dbdc60`
   To change the user you need to define a element in the browser session storage with the following id: `idUser` you can define the following values for this key: 
   `a237ed14-88fb-45f3-b9b1-471877dbdc60`
    `49a6307e-c261-414d-86f5-c6004bcec8ab`                                                                                                                                                                   
    `1b2f7b83-7b4d-441d-a210-afaa970e5b76` 
    
   ##App Structure
   ### Components
   Those are the components in the app like form fields and basic components to apply the routing (Home, ContactUs).
   ### Containers
   Those components represent the elements that have logic to handle with other components or containers
   ### Scss
   Those are the styles to define and customize themes applied for all app components.
   ### Shared
   This folder contains helpers for the components
   
    