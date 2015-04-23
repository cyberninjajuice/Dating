# Dating
A dating application run entirely through 1 page and querying the DOM with JS



##Want to find your future hus/wife no problem!
This is the app for you... With less options and even less realism than Tinder, match.com, or any other company. This is not affiliated with any company or dating site.

WDINDER
Today we're going to write a dating site. randomuser.me let's you supply it with a seed so that you can control which user you get. Using the same seed again will result in the same user being returned. It also allows you to select a gender and nationality.

Create a page that has the following items:

A list of all saved dates' names.
A new date section with an optional text input for a seed, 2 radio buttons for nationality (us or gb), and two checkboxes for gender (male and female). If neither gender box or both gender boxes are checked then get random users of both genders. There should also be a submit button. Keep in mind that this is not a form!
When the user hits the submit button generate a query string based on the selected inputs and make an AJAX request to api.randomuser.me.

If the request is successful:

Populate the page with the new random user's information beneath the new date section .
There should be an unordered list of the random user's name, address, password, and phone number. A picture of the user should also be rendered.
Underneath the picture there should be two buttons, one labeled 'date' and one labeled 'dump'.
If the 'dump' button is clicked:

Remove the current random user's information from the page.
Try again; send another AJAX request to api.randomuser.api based on the radio buttons and checkboxes (if the seed is used again it will return the same user, so do not include it!).
Repopulate the page with the new random user information, along with the 'date' and 'dump' buttons.
When the 'date' button is clicked:

Send an AJAX POST request to your server and save the random user's name, address, phone number, password, and image url in a database.
The random user's name should also be added to the list at the top of the page
The user's info beneath the new date section should dissappear.
If a date's name is clicked:

The browser should go to a new page that is populated with the date's name, address, phone number, password, and picture.
There should also be a "See hobbies in action" button that, when clicked, sends an AJAX request to your server with the date's password.
The server should then make a request to instagram to get a photo that is tagged with the date's password.
The server should, upon succesfully getting a photo, return that photo's url, and the image should show up under the date's information under a heading of "hobbies". If there are no images associated with that tag, render the text "DATE'S_NAME is too mysterious for pictures."