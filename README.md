# Memento - Memory Game

Memento is a delightful memory game designed to test and enhance your memory skills while providing an enjoyable and challenging gaming experience. This project is developed using the Progressive Web App (PWA) template with Create React App and has been deployed on Firebase for easy access and usage.

## Demo

[Live Demo](https://memento-5e158.web.app/)

## Introduction

Memento is a delightful memory game designed to test and enhance your memory skills while providing an enjoyable and challenging gaming experience. This project is developed using the Progressive Web App (PWA) template with Create React App and has been deployed on Firebase for easy access and usage.

## Installation

To run the game locally on your machine, follow the instructions below:

### Clone

1. Clone this repository to your local machine.
2. Navigate to the project's root directory.

```bash
git clone https://github.com/vishalqw78/memento.git
cd memento
```
### Install Dependencies

Before running the game, you'll need to install the required dependencies. The game is built with React, so you need Node.js and npm (Node Package Manager) installed on your machine.

To install the dependencies, run the following command:

```
npm install
```
### Run the Game
Once the dependencies are installed, you can start the game locally by running:

```
npm start
```

## Firebase Deployment
The Memento game has been deployed on Firebase for easy access and usage. To deploy the game on Firebase, you can follow these steps:

#### Step 1: Firebase Setup
- If you haven't already, create a Firebase account at https://firebase.google.com/ and log in.

- Create a new Firebase project from the Firebase console.

Install the Firebase CLI globally on your machine, if you haven't done so already:

```
npm install -g firebase-tools

```

- Authenticate the Firebase CLI with your Firebase account:
```
firebase login
```
####  Step 2: Build the Project

Before deploying to Firebase, you need to build the project. In the project's root directory, run:

```
npm run build

```

This will create an optimized production build in the build folder.

#### Step 3: Deploy to Firebase
To deploy the project to Firebase, run the following command:
```
firebase deploy
```

After a successful deployment, Firebase will provide you with a URL where your Memento game is now live and accessible online.
