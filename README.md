

# E-Commerce Website

This is a full-featured e-commerce website built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Basic E-commerce Features**: Product lists, Product Details, Cart, Checkout, Secure Card Payments / Cash Payments.
- **Admin Panel**: Add/Edit Orders, Add/Edit Products.
- **Authentication**: Passport JS strategies.
- **Emails**: Order Emails, Reset Password Emails.
- **User Profile**: User profile and user orders.
- **Payments**: Stripe - PaymentIntent based custom flow.

## Technical Details

- **Frontend**: React 18 with Tailwind CSS.
- **State Management**: Redux Toolkit.
- **Database**: MongoDB.
- **API**: REST API using Express.
- **API Authentication**: Passport JWT.
- **Database Hosting**: MongoDB Atlas cloud database.
- **Deployment**: Render deployment.
- **Email**: Nodemailer using GMail SMTP system.


## Setup and Running the Project

### Prerequisites

1. Node.js
2. MongoDB

### Environment Variables

Create a `.env` file in the root folder with the following values:

```
MONGODB_URL=
PORT=
JWT_SECRET_KEY=
SESSION_KEY=
STRIPE_SERVER_KEY=
ENDPOINT_SECRET=
MAIL_PASSWORD=
MAIL_ID=
```

Create a `.env` file in the frontend root folder with the following values:

```
REACT_APP_BACKEND_URL=
REACT_APP_STRIPE_PUBLIC_KEY=
```

### Steps to Run

1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm i
    ```
3. Start the frontend:
    ```sh
    npm run start
    ```
4. Navigate back to the root directory:
    ```sh
    cd ..
    ```
5. Install dependencies:
    ```sh
    npm i
    ```
6. Start the backend:
    ```sh
    npm run dev
    ```

## Contributing

Feel free to fork the repository and submit pull requests.

---
