# Nextjs TODO App

A serverless todo app made in nextjs.

![Screenshot of app](https://utfs.io/f/XYf3vgwsdO6enWEt3KHQPeh7KjDSN6kzUmgwCMXdOVcvny4J)


## Using Todo App
1. Sign in or create an account
2. Add todos
3. Check the checkbox to complete iteam
4. Use ... button to delete todo

## Running the project

### What you need:
- [Clerk Account](https://clerk.com/) 
- Postgres database
  - Local with docker ```docker compose up ```
  - [Remote with neon](https://neon.tech) 
- Nodejs and pnpm

### 1. Setting up clerk

1. Create an account
2. Create a project
3. Put clerk api keys in a .env file in the root of the project
   ```                                        
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_**************************************************
    CLERK_SECRET_KEY=sk_test_******************************************
   ```

### 2. Setting up postgres database
#### Local
1. Install docker and docker compose plugin
2. In a terminal in the root folder of this project run
    ```docker compose up```
3. In .env file add ```DATABASE_URL="postgresql://postgres:password@localhost:15432/todo-next"```
4. Dont close terminal while running project as it will kill the postgres db to exit pres CTL+C
#### Neon
1. Create an account
2. Create project
3. Add database url in to .env file like ```DATABASE_URL="postgresql://neondb_owner:*********@hg-band-frosty.us-east-2.aws.neon.tech/neondb?sslmode=require"```

### 3. Deploying Database Schema
1. Have nodejs and pnpm installed on system
2. Install deps by running ```pnpm install```
3. Deploy schema by running ```pnpm db:push```

### 4. Run the project
1. Run the project by running ``` pnpm dev ```