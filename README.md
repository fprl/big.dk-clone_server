<!-- REPO TITLE -->
<br />
<p align="center">
  <img src="readme/logo.svg" alt="Logo" height="80">

  <h4 align="center">Bjarke Ingels Group | Clone (headless cms)</h4>
  <p align="center">
    <a href="https://big-clone.herokuapp.com/admin/auth/login" target="_blank">Live Demo</a>
  </p>
</p>

<br />
<br />


![product-screenshot]
<!-- ABOUT THE PROJECT -->
## About the clone
The aim of this clone is to provide — like the original — a CMS that allows the user to create projects in an easy and fast way, which automatically generates the necessary properties based on the project information (alphabetical, slug, scale) to use them on the client-side.

About the Client ([repository](https://github.com/francoromanol/big.dk-clone_client)): It improves the [BIG (Bjarke Ingels Group)](https://big.dk/) website which is made with wordpress, a custom plugin and the Canvas API and which lacks of responsiveness, accesibility, performance and SEO based on the lighthouse report.

It also helped me to get a workaround to the `flex-direction: column;` [css problem](https://stackoverflow.com/questions/33891709/when-flexbox-items-wrap-in-column-mode-container-does-not-grow-its-width).


### Features
 * Headless CMS.
 * Roles.
 * Content-type builder.
 * Automatically generated properties based on project information (alphabetical, slug, scale).
 * Easy to adapt to new requirements (e.g blog).


### Made with
* [Strapi](https://strapi.io/).
* [Cloudinary](https://cloudinary.com/) as a third-party image storage solution.
* [Heroku](https://www.heroku.com/) for deployment.
* [Next.js](https://nextjs.org/) for the Client => [repository](https://github.com/francoromanol/big.dk-clone_client).


### Installation and start
To get a local copy up and running follow these steps:

1. Clone this repo
   ```sh
   $ git clone https://github.com/francoromanol/big.dk-clone_server.git
   ```
2. Install packages
   ```sh
   $ yarn install
   ```
3. In `.env`
    ```sh
    HOST=0.0.0.0
    PORT=1337
    # for production:
    CLOUDINARY_NAME = [CLOUDINARY NAME]
    CLOUDINARY_KEY = [CLOUDINARY KEY]
    CLOUDINARY_SECRET = [CLOUDINARY SECRET]
    ```
4. Run headless cms
    ```sh
    $ yarn develop
    ```

Once started the app should be available via [localhost:1337/admin](http://localhost:1337/admin) and you will need to use this credentials:

email: admin@hotmail.com
password: Administrator0


### Have a great day!

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: readme/recording.gif
