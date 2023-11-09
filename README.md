# Permaconn_TH

# Instructions

This is a coding exercise for the Software Engineer role at Permaconn.
The exercise should be relatively fast to complete. We are expecting no more than a few hours to complete the test.  
To return the test, store the code and related documentation on Github for easy access.
Please send the following information over email:

1. Link to Github repository
2. If you ran out of time and you are returning a partial solution, description
   of what is missing and how you would continue

Your code will only be used for the evaluation.

Exercise:
Create a webpage that shows a list of Products with the ability to add a new product and edit existing products. The user should have authorised access to add or edit products.
The frontend should be in React and all the data has to be served through an API backend using ExpressJs framework in NodeJs

Use dummy api's from https://dummyjson.com/docs/products for all actions

Bonus:

1. Ability to dockerise the code
2. Tests included in the API backend code
3. Search from the list of products

# Rayhan's edits:

Here's my submission:

Steps I achieved the task in:

1. Create a rudimentary frontend and backend and connect them (done)
2. Make sure I can get all the products and display them (done)
3. Add auth (not completed)
4. Create add(POST) and edit(Put/Patch) endpoints, and tie them into the frontend (done)

There are requests that can be made using the requests.rest file and the extension: https://marketplace.visualstudio.com/items?itemName=humao.rest-client

the next.js frontend is in /client
the express backend is in /server

The express server can be run using "npm run dev" after cding into the appropriate directory
next.js can be run using "npm run dev" after cding into the appropriate directory

What is missing:
Working authorisation.

I assumed the solution required building your authentication system, rather than using something like clerk or auth0 which I am more familiar with recently.
I have implemented JWT based authentication in the past, and attempted to do so again but ran into a few bugs that I didn't have time to squash. As I am quite busy over the next few days I am submitting a partially complete solution, ideally if I am able to find some time today or tomorrow I will work on this some more to get the solution I wanted. I didn't get as long to work on it as I would have liked, I was sick monday - wednesday so also needed to sleep to make sure I could recover and get through this take home without too much brain fog.

Thanks for this task! Was pretty enjoyable - Hope to discuss with you further.

Thanks,

Rayhan
