### React-Redux-KeystoneJS-Webpack

---

### Usage

    yarn install          # or npm install
    npm run dev           # runs server with webpack HMR
    npm run serve:prod    # builds bundles and starts server

> make sure your mongo process is running

> make sure you have setup the .env file (template provided .env-template)

### Requirements

- NodeJS

    > v8.9.1

- MongoDB

### Features

- **KeystoneJS - 4.0.0-beta.7**

  > I am using a Fork of this that fixes some of the beta bugs. The keystone team has been slow in resolving issues so I now maintain my own version

- **Webpack - 3.5.5**

    webpack is setup to run hot module reloading and to build for production

- **SASS**

    **gulp-sass** compiles `public/styles/scss` directory to one `public/styles/site.css` file

- **Bootstrap 4**

    Bootstrap 4 (beta) is included and is ready to go

- **Font Awesome - 4.7.0**

    Font Awesome included in scss

- **React - 16.1.0**

    React with Redux (3.7.2) and HMR middleware (2.20.0)

    Server side rendering (SSR) is also included and can be removed with one line in _routes/index.js_

- **reset password** - makes an api call that will send an email with a password link

    ![Reset Password Picture](./docs/images/reset-password-form.png)

- **signin**

    ![Signin](./docs/images/signin-form.png)

- **Hot Module Reload ready**

    ![Home](./docs/images/home.png)

- **React Routing** - react-router-dom@4.2.2

    ![Admin](./docs/images/admin.png)
# React-Redux-Keystone-Webpack4

