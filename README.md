# My DrupalReact Portfolio

My DrupalReact Portfolio is an assignment project that showcases the integration of Drupal 10 as a backend with a React.js frontend app inside drupal. In this setup, Drupal manages content, while the React app fetches and displays this information using JSON:API. The communication between the two platforms is facilitated through JSON:API, with the React app handling all frontend presentation. Additionally, CORS issues between the two were resolved by implementing a services.yml file in the Drupal configuration.

## Technologies Used
### In Drupal site
- **Drupal 10**: For managing and storing the backend content.
- **React.js**: Build the separate frontend application inside drupal app.
- **JSON:API**: Used for managing API requests between Drupal and the React app.
- **Lando**: A local development environment for setting up and managing the Drupal project.
- **YAML**: For configuring the `services.yml` file, solving CORS issues between the frontend and backend.

### In React site
- **React.js**: Create a frondend folder for building the frontend UI.
- **Node.js & NPM**: Required to manage the React environment.
- **EmailJS**: Used for sending emails directly from the React app.
- **Google Cloud Console**: Used for authenticating your application and managing services like Gmail.

## Setup and Usage in Drupal site 

To get started, follow these steps:

### Step 1: Clone the Repository

```bash
git clone https://github.com/bishnu-suyel/my_drupalreact_portfolio
```

### Step 2: Install Dependencies

Make sure the necessary dependencies are installed:

```bash
lando composer install
```
### Step 3: Start the Lando Environment

Inside the project folder, run the following command to start Lando:

```bash
lando start
```
Access the content through the API at a URL like:

```bash
http://my-drupal-portfolio.lndo.site/jsonapi/node/home
```
 ## Setup and Usage in frontend

### Step 1: Install Dependencies

Navigate to the frontend folder and install the necessary dependencies:

```bash
npm install
```
### Step 2: Start the React App
To start the frontend React app, run the following command:

```bash
npm run dev
```
This will launch the React app on http://localhost:5173, fetching data from the Drupal backend. Make sure that the drupal app is up and running.

### Step 3: Configure EmailJS for Sending Emails
To set up EmailJS for your contact form:

- Create an EmailJS account at EmailJS.
- Add a new service and connect it with your email provider (e.g., Gmail).
- Obtain your User ID from the EmailJS dashboard.
- Set up your contact form in your React application to use EmailJS for sending messages.

### Step 4: Configure Google Cloud Console
To send emails through Gmail using EmailJS, you'll need to set up Google Cloud Console for authentication:

1. Create a Google Cloud Project: Go to the Google Cloud Console and create a new project.

2. Enable the Gmail API:

    - Navigate to the API & Services > Library.
    - Search for Gmail API and enable it for your project.

3. Create Credentials:
    - Go to API & Services > Credentials.
    - Click on Create Credentials and choose OAuth client ID.
    - Configure the consent screen and then select Web application as the application type.
    - Add authorized redirect URIs (e.g., http://localhost:5173).

4. Obtain the Client ID and Client Secret: These will be used in your EmailJS setup and in your application to authenticate requests.

5. Set up Scopes: Ensure that you request the necessary authentication scopes for sending emails

## Live Page

  Not yet

## Screenshot

  Not yet

## Sources

- [GitHub Guides - Mastering Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Make a README](https://www.makeareadme.com/)
- [Drupal JSON Documentation](https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module)
- [Lando Documentation](https://docs.lando.dev/getting-started/)
- [React Documentation](https://react.dev/learn)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Google Cloud Console Documentation](https://cloud.google.com/docs)

## Authors and Acknowledgment
This project was developed as part of an assignment.

- [GitHub @bishnu-suyel](https://github.com/bishnu-suyel)
- [LinkedIn @bishnu-suyel](https://www.linkedin.com/in/bishnu-suyel)
