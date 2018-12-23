# bamazon

![Image of bamazon](https://www.alanchen.com/wp-content/uploads/2018/12/bamazonthumb.png)

This is a CLI store where users can purchase items and the store can check whether there is sufficient inventory.

## Setup

To run this application yourself: 
1. You need to have a local database running using a program like [MySQL Workbench](https://www.mysql.com/products/workbench/).
2. Create a file called `config.json` and add your database credentials:

```
{
    "username":"your_username",
    "password":"your_password"
}
```
3. Create the database by running `bamazon.sql` in MySQL Workbench.
4. In your console, navigate to your bamazon folder and enter `npm install` to install the required npm packages.
5. That's it! To run the app, enter `node bamazonCustomer.js`. Have fun!

## Tools used
- MySQL
- Node.js
