#Angular Monorepo App

This repository contains an Angular CLI monorepo workspace with multiple applications and shared libraries.
The workspace demonstrates clean architecture, state management, internationalization, authentication flow, and UI design using Angular best practices.

#Project Structure

todo-monorepo-workspace/
│ 
├── projects/ 
│   └──login-app     # Login application 
│   └── todo-app     # TODO application (protected) 
│   └── core         # Core services (Auth, Storage, Guards) 
│   └── ui           # Reusable UI components 
│   └── data-access  # Models, NgRx store, state logic 
│ 
├── angular.json 
├── package.json 
└── README.md

#Applications Overview

1) Login App (login-app)
  Dedicated login application
  Uses hardcoded credentials for demo purposes
  Provides authentication entry point
  Redirects authenticated users to the TODO app

2) TODO App (todo-app)
  Main application for managing tasks
  Protected using an AuthGuard
  Accessible only after successful login
  Features:
      -Add task
      -Edit task
      -Delete task
      -Mark task as Complete / Undo
      -Persistent storage using browser localStorage
      -Logout functionality
      -Internationalization support (English, Hindi, Spanish)
      -Structured table-based UI with a fixed header

#Shared Libraries 

1) Core Library (libs/core)
  Contains cross-application services:
      -AuthService (handles login/logout logic)
      -AuthGuard (protects routes in todo-app)
      -StorageService (handles persistence using localStorage)

2) UI Library (libs/ui)
   Reusable UI components
   Contains TodoListComponent
   Styled using plain SCSS

3)Data Access Library (libs/data-access)
  Centralized domain logic
  Task model
  NgRx store:
      -Actions
      -Reducer
      -Selectors
  Ensures separation of UI and state logic  

#Technology Stack

Angular 14
NgRx 14 (State Management)
ngx-translate (Internationalization/Localization)
TypeScript
SCSS (Plain CSS, no UI frameworks)
RxJS 
Browser Local Storage 

#Setup & Installation 

Prerequisites:
  -Node.js v16.x (recommended)
  -Angular CLI v14.x

Verify versions:
  node -v
  ng version

Install Dependencies        
  npm install

Create workspace
  ng new my-workspace --no-create-application

Create projects
  ng generate application login-app

Create Libraries
  ng generate library ui

Running the Applications
  Start todo app 
  -ng serve todo-app --port 4200
  Start Login App
  -ng serve login-app --port 4201    
  

#Internationalization

Implemented using @ngx-translate/core.
Supported languages:
  -English (en)
  -Hindi (hi)
  -Spanish (es)

Translation files are stored under:
"apps/todo-app/src/assets/i18n/"      

Language switching happens at runtime without a page reload


#Authentication Flow

Since browsers' scope storage per origin, the following flow is used:
  1) User logs in via login-app
  2) On success, the user is redirected to the todo-app with a query flag
  3) todo-app stores authentication state locally
  4) AuthGuard protects all routes
  5) Logout clears the authentication state and redirects back to the login-app
  6) 

#State Management (NgRx Overview)

NgRx is used to manage the TODO state:
  -Actions:– Add, Update, Toggle, Delete tasks
  -Reducer:– Handles immutable state updates
  -Selectors:– Read state reactively
  -Store:– Centralized application state

The UI components remain stateless and interact with the store via dispatched actions.   


#Design & Architecture Principles

Angular CLI monorepo (native support)
Separation of concerns
Reusable shared libraries
Component-driven UI
Stateless UI + centralized state
Clean SCSS styling


