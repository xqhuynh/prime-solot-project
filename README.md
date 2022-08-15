# Sweet Surrender

## Description

_Duration: 2 Week Sprint_

Sweet Surrender mimics an e-commerce store that sells cakes made by a local baker. This project has most of the features you would expect from an e-commerce store such as viewing the item details, adding items to the cart, viewing the cart, checking out, and sending a live notification to the owner after an order is placed. 

In the dashboard, the owner can make changes to their inventory, edit items, and add items to the store.

To see the fully functional site, please visit: [https://intense-reaches-03253.herokuapp.com/]

## Screen Shot

![Aug-15-2022 09-10-32](https://user-images.githubusercontent.com/77410880/184651641-ebf9de1d-bdff-4ca1-935a-5b6b253ece1e.gif)

## Installation

SMS notification is sent to store owner after user clicks 'Place Order' but functionality has been removed in this repo. 

1. Create a database named `prime_app`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. User must register or log in to use app
2. User clicks on cake item to view more details
3. In Cake Details, user can add cake to cart or continue shopping
4. Cart will have a badge to indicate the number of items in the cart
5. User can click on the cart icon to go to checkout
6. User can place order

## Tree Structure
```
├── PostmanPrimeSoloRoutes.json
├── PostmanPrimeSoloRoutesv2.json
├── README.md
├── database.sql
├── documentation
│   └── images
├── package-lock.json
├── package.json
├── public
│   ├── images
│   └── index.html
├── server
│   ├── constants
│   ├── modules
│   ├── routes
│   ├── server.js
│   └── strategies
└── src
    ├── components
    ├── hooks
    ├── index.js
    └── redux
```

## Built With

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- Passport
- Twilio 3rd party API

## Acknowledgement
Thanks to [Prime Digital Academy](https://www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [xqhuynh@gmail.com](xqhuynh@gmail.com)

Connect with me on [LinkedIn](https://www.linkedin.com/in/savon-huynh).
