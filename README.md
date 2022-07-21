# Sweet Surrender

## Description

_Duration: 2 Week Sprint_

Sweet Surrender mimics an e-commerce store that sells cakes made by a local baker. This project has most of the features you would expect from an e-commerce store such as viewing the item details, adding items to the cart, viewing the cart, checking out, and sending a live notification to the owner after an order is placed. 

In the dashboard, the owner can make changes to their inventory, edit items, and add items to the store.

To see the fully functional site, please visit: [https://intense-reaches-03253.herokuapp.com/]

## Screen Shot

![Jul-20-2022 19-05-24](https://user-images.githubusercontent.com/77410880/180102858-12faaea5-176b-4afe-aa2f-9d9424d3e389.gif)

### Prerequisites

- [Node.js](https://nodejs.org/en/)

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

## Built With

1. React.js
2. Node.js
3. Express.js
4. Postgres
5. Material UI
6. Passport
7. React Bootstrap
8. Postico
9. React Redux
10. Twilio

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [xqhuynh@gmail.com]
