# Fullstack Spirits
> A Full-Stack E-Commerce site dedicated to the distribution of the highest quality liqueur.
> Live demo [_here_](https://graceshopper-4-amigos.herokuapp.com/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
<!-- * [License](#license) -->


## General Information
- Users are able to purchase, add, and checkout items
- Admins have full CRUD capabilities over users and products.
- Effectively deployed application using Heroku.
<!-- You don't have to answer all the questions - just the ones relevant to your project. -->


## Technologies Used
- JavaScript
- React
- Redux
- Node.js
- Express
- PostgreSQL
- Sequelize
## Screenshots
![Example screenshot](./img/screenshot.png)
<img width="1512" alt="Sign in" src="https://user-images.githubusercontent.com/54867270/168204408-9f326e7e-0980-485e-9282-c17c51b8f94d.png">
<img width="1512" alt="Sign up" src="https://user-images.githubusercontent.com/54867270/168204463-9588fad3-f71e-41ab-aa09-4fbb8faca724.png">
<img width="1512" alt="all products" src="https://user-images.githubusercontent.com/54867270/168204481-1b48035f-eb87-4e4e-928d-1fe445557e26.png">
<img width="1512" alt="Shopping cart" src="https://user-images.githubusercontent.com/54867270/168204556-039b8e6a-ec65-4c5a-ad11-fabf14a64ae9.png">
<img width="1512" alt="Checkout" src="https://user-images.githubusercontent.com/54867270/168204567-5e2f08d8-f21d-4e23-ac59-521fecca0100.png">
_ADMIN VIEW_
 <img width="1512" alt="Screen Shot 2022-05-12 at 11 22 26 PM" src="https://user-images.githubusercontent.com/54867270/168205342-8509d1b0-55c2-4378-bf28-59a5b7704aca.png">
<img width="1512" alt="Screen Shot 2022-05-12 at 11 22 47 PM" src="https://user-images.githubusercontent.com/54867270/168205353-a8e4aee7-a647-4514-bc22-08fc3b7803df.png">
<img width="1512" alt="Screen Shot 2022-05-12 at 11 23 05 PM" src="https://user-images.githubusercontent.com/54867270/168205367-ef6198e1-a48e-4360-b62a-d4fa2e44d2d5.png">
<img width="1512" alt="Screen Shot 2022-05-12 at 11 21 51 PM" src="https://user-images.githubusercontent.com/54867270/168205387-2cf068b9-bbd8-41df-9219-73d3a584949e.png">
<img width="1512" alt="Screen Shot 2022-05-12 at 11 21 44 PM" src="https://user-images.githubusercontent.com/54867270/168205398-f29c5eba-4b44-4921-b99e-fc1a769d934d.png">

<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
To use this as boilerplate, you'll need to take the following steps:

- Don't fork or clone this repo! Instead, create a new, empty
  directory on your machine and `git init` (or create an empty repo on
  Github and clone it to your local machine)

- Now you will have to add the fs-app-template as a remote and merge it into your own repository.

```
git remote add boilermaker git@github.com:FullstackAcademy/fs-app-template.git
git fetch boilermaker
git merge boilermaker/main
git branch -m master main
```

## Usage

Now that you've got the code, follow these steps to get acclimated:

- Update project name and description in `package.json`
- `npm install`
- Create two postgres databases (`MY_APP_NAME` should match the `name`
  parameter in `package.json`):
- These commands will create both your **development** and **test** databases

```

createdb fullstack_spirits
createdb fullstack_spirits-test
```

- By default, running `npm test` will use your test database, while
  regular development uses development database


Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!


## Project Status
Project is:  _complete_ 



<!--
# FS-App-Template

## Setup

To use this as boilerplate, you'll need to take the following steps:

- Don't fork or clone this repo! Instead, create a new, empty
  directory on your machine and `git init` (or create an empty repo on
  Github and clone it to your local machine)

- Now you will have to add the fs-app-template as a remote and merge it into your own repository.

```
git remote add boilermaker git@github.com:FullstackAcademy/fs-app-template.git
git fetch boilermaker
git merge boilermaker/main
git branch -m master main
```

## Customize

Now that you've got the code, follow these steps to get acclimated:

- Update project name and description in `package.json`
- Create a .env file in your root folder. Enter the keys below; follow up with an equal sign and assign your preferred string values. 
```
JWT,
JoseAdminUsername
JoseAdminPassword,
MiliAdminUsername,
MiliAdminPassword,
ChristinaTestUserPassword,
JanellyTestUserPassword
```
- import your .env as early as possible in your application main file like this:
```
require("dotenv").config();
```
- `npm install`
- Create two postgres databases (`MY_APP_NAME` should match the `name`
  parameter in `package.json`):
- These commands will create both your **development** and **test** databases

```

createdb fullstack_spirits
createdb fullstack_spirits-test
```

- By default, running `npm test` will use your test database, while
  regular development uses development database

## Start

Sync and seed your database by running `npm run seed`. Running `npm run start:dev` will make great things happen!

- start:dev will both start your server and build your client side files using webpack
- start:dev:logger is the same as start:dev, but you will see your SQL queries (can be helpful for debugging)
- start:dev:seed will start your server and also seed your database (this is useful when you are making schema changes and you don't want to run your seed script separately)

### Heroku

1.  Set up the [Heroku command line tools][heroku-cli]
2.  `heroku login`
3.  Add a git remote for heroku:

[heroku-cli]: https://devcenter.heroku.com/articles/heroku-cli

- **If you are creating a new app...**

  1.  `heroku create` or `heroku create your-app-name` if you have a
      name in mind.
  2.  `heroku config:set JWT=<your secret here!>` to set a secret for JWT signing

Database Setup

3.  `heroku addons:create heroku-postgresql:hobby-dev` to add
    ("provision") a postgres database to your heroku dyno (This creates your production database)

4.  `heroku config:set SEED=true` to get heroku to sync and seed your database

5.  note everytime your app restarts, the database tables will be dropped and re-created. To avoid this you can `config:unset SEED`

- **If you already have a Heroku app...**

  1.  `heroku git:remote your-app-name` You'll need to be a
      collaborator on the app.

Now, you should be deployed!

-->
