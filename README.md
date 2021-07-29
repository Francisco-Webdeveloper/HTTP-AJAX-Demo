## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
cd ~/code/<your_github_nickname>
git clone git@github.com:Francisco-Webdeveloper/HTTP-AJAX-Demo.git my-js-project
cd my-js-project
rm -rf .git
yarn install
stt # Open this folder in Sublime Text
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run this:

```bash
eslint lib
webpack-dev-server
```

Once a file has been updated in Sublime, you can run it with:

```bash
node lib/01_types.js
```
## Pieces of an HTTP request
1. Verb
```bash
GET: Read
POST: Create
PATCH: Update
DELETE: Delete
```
* Follows the REST Pattern - Software architectural style that uses the above mentioned verbs / actions on an HTTP request.

2. URL

`https://www.google.com/search?q=wagon&hl=en`
```bash
Scheme:	`https`
Host:	`www.google.com`
Path:	`/search`
Query String:	`q=wagon&hl=en`
```

3. Headers

* Where the metadata can be found

4. Body
* No body for a GET Request.
* Body for a POST or PATCH request (usually with content from **form**).

## AJAX - Asynchronous Javascript And XML
* It is usually used to call an API.
* Ajax requests are asynchronous HTTP requests which happen after page load to dynamically refresh the page.
* Uses JavaScript to make a request to another server on another endpoint and then this JS will manipulate things for me after the page load.
* Example: autocomplete in google search

1. How to use? **Fetch**
```bash
// GET request
fetch(url).then((response) => {
  // Do something once HTTP response is received
});
```
2. GET requests\
**Fetching JSON**
```batch
Using the OMDb API
// JavaScript gets the URL
fetch("http://www.omdbapi.com/?s=harry potter&apikey=******")
  // we receive a response which is text and return it transformed into a JS object (JSON)
  .then(response => response.json())
  // data is the name we give to the json
  .then((data) => {
    // digging into the JSON to get the wanted data
    console.log(data);
  });
```
