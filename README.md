# Book Catallog Backend

## Live Link
[https://book-catalog-prisma-xi.vercel.app/](https://book-catalog-prisma-xi.vercel.app/)

## Functional Requirements

### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/8fca6599-2242-406c-9172-15488d3985e4 (Single GET) 
- api/v1/users/8fca6599-2242-406c-9172-15488d3985e4 (PATCH)
- api/v1/users/8fca6599-2242-406c-9172-15488d3985e4 (DELETE) 
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/1af6075a-29b5-468f-b436-97a2973306ff (Single GET) 
- api/v1/categories/1af6075a-29b5-468f-b436-97a2973306ff (PATCH)
- api/v1/categories/1af6075a-29b5-468f-b436-97a2973306ff (DELETE) 

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/f0350e97-4706-4bb0-bf96-241f860ea8db/category (GET)
- api/v1/books/4c6da6ea-4511-4a8a-9965-b0feb4664d45 (GET)
- api/v1/books/4c6da6ea-4511-4a8a-9965-b0feb4664d45 (PATCH)
- api/v1/books/4c6da6ea-4511-4a8a-9965-b0feb4664d45 (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/075ac595-c810-457d-bcea-ef55b78a8714 (GET)

# Book Catalog Prisma Backend

This guide will walk you through the process of setting up the book catalog backend. By following these steps, you will clone the project, install dependencies, and configure Prisma for database management. Let's get started!

## Installation Steps

### Follow these steps to clone and set up starter project:

1. `Clone the project:` Open your terminal or command prompt and run the following command to clone the project repository:

```bash
git clone https://github.com/ZeroBug404/book-catalog-prisma.git
```

2. `Navigate into the project directory:` Use the cd command to navigate into the project directory:

```bash
cd file-name
```

3. `Install project dependencies:` Next, install the project dependencies by running the following command:

```bash
yarn install
```

4. Configure Prisma and the database connection:

- Add Prisma as a development dependency by running the following command:

```bash
yarn add prisma --save-dev
```

- Set up your Prisma project by creating the Prisma schema file using the following command:

```bash
npx prisma init
```

- Open the prisma/schema.prisma file and configure your database connection details.

```bash
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

- Create a .env file in the project root directory and set the DATABASE_URL environment variable. Replace the placeholders with your database connection details:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```

5. Creating the database schema
6. Migrate the database schema: Use the following command to create and apply the initial database schema:

```bash
npx prisma migrate dev --name init
```

This command creates a new migration file based on your schema changes and applies it to your database.

6. `Install Prisma Client:` Install the Prisma Client library by running the following command:

```bash
yarn add @prisma/client
```

This command installs the Prisma Client, which provides an interface to interact with your database.

That's it! You have successfully set up the Book Catalog project. You can now start exploring and working with the codebase. Refer to the project documentation or README for further instructions on how to run and use the core service.

Happy coding!
