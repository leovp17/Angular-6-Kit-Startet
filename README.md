# Angular-6-Kit-Startet

Webpack, typescript and Angular 6 starter kit.

https://www.twilio.com/blog/2018/03/building-an-app-from-scratch-with-angular-and-webpack.html

Initialize node project:
npm init -y

Install the package we will use:

npm install html-webpack-plugin copy-webpack-plugin typescript webpack webpack-cli -—save-dev

npm install ejs express --save

Let’s create our application entry point:

touch webpack.config.js
touch server.js
mkdir -p src/assets/img
mkdir -p src/assets/styles
touch src/index.html
touch src/main.ts
touch src/assets/styles/main.css

First we need to define the entry file, in our case it is ./src/main.ts.
After that we tell Webpack what output file we expect and where (we use the \_\_dirname variable because Webpack expects an absolute path).
We also introduce CopyWebpackPlugin to move our assets together with the compiled application.
Finally we want to instruct Webpack to attach our script in the index.html file. To achieve that we use HtmlWebpackPlugin. Inside the plugin we are specifying a template file, in which a <script> tag should be placed after compilation as well as in the section Webpack should attach the <script> tag.

npm run build & npm start

babel + ES6

babel-core
babel-loader
babel-preset-env

npm i babel-core babel-loader babel-preset-env --save-dev

https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1
