# Tech Talk Blog

Tech Talk is a CMS-style blog site designed for developers to publish their blog posts and engage in discussions by commenting on other developers' posts. Similar to platforms like WordPress, this application allows users to create an account, publish blog posts, comment on posts, edit their own blog posts, and manage their content from a user dashboard.

## Motivation

The primary motivation for this project was to build a full-fledged blog site entirely from scratch and practice implementing the Model-View-Controller (MVC) paradigm. By creating Tech Talk, I gained valuable experience in building a complex web application with user authentication and content management capabilities.

## Technologies Used

- **Handlebars.js**: Handlebars.js is used as the templating language to dynamically generate HTML content based on data from the server.

- **Sequelize**: Sequelize is the Object-Relational Mapping (ORM) library used to interact with the MySQL database. It simplifies database operations and allows for easy management of data models.

- **express-session**: The express-session npm package is used for user authentication, enabling users to sign up, log in, and manage their blog posts.

## Installation

To run this blog application on your local machine, follow these steps:

1. **Clone the Repository**: Start by cloning this repository to your local machine.

   ```bash
   git clone https://github.com/k-pineda/TechBlog.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies using npm.

   ```bash
   cd TechBlog
   npm install
   ```

3. **Create .env File**: Create a `.env` file in the root directory of the project and configure your MySQL database settings as follows:

   ```env
   DB_NAME='techblog_db'
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   ```

4. **Start MySQL Server**: Ensure that your MySQL server is running. You can use tools like MAMP or XAMPP to manage your MySQL server.

5. **Create Database Schema**: Use MySQL Workbench or a similar tool to login with your MySQL user and password. Then, run the `schema.sql` found in the `db` folder to create the necessary database schema.

6. **Seed the Database**: After creating the database schema, go back to your terminal and run the following command to seed the database with initial data:

   ```bash
   npm run seed
   ```

7. **Start the Application**: To start the application, run:

   ```bash
   npm start
   ```

8. **Access the Blog**: Open your web browser and navigate to `http://localhost:3001` to access the Tech Talk blog application locally.

## Usage

Here are the steps for users to interact with the Tech Talk blog:

1. **Sign Up or Log In**: Users can sign up for a new account or log in with their existing credentials. The sign-up and log-in buttons are located in the top right-hand corner of the page.

2. **Create a Blog Post**: Logged-in users can create new blog posts by clicking the "Dashboard" link in the navigation menu and selecting the "New Post" option. They can provide a title and content for their post.

3. **Comment on Blog Posts**: Users can comment on existing blog posts by navigating to the post and entering their comments in the provided input box.

4. **Edit/Delete Blog Posts**: Logged-in users can edit or delete their own blog posts from their dashboard. This allows for content management and updates.

5. **Log Out**: Users can log out of their accounts using the "Log Out" button in the top right-hand corner of the page.

## Access the Deployed Application

You can also access the deployed Tech Talk blog online via the following link: [Tech Talk Blog](https://think-tech-talk-ef0ed76edf19.herokuapp.com/)

Enjoy publishing and discussing tech-related content on Tech Talk!