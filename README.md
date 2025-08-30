#Rubix Solver

This is a document that will be written as I create this project. Won't be too descriptive but more just an outline so I and whoever reads this can see my progress. Hope you enjoy!

##Start of interface

To start off I'm going to imagine what I would want the site to look like and in what way I am going to code it.

I had grand aspirations but decided it may be better to get working and first just get a simple page running and looking right with react. But this is what I was aiming for:
![Photo of figma page](./images/rubix%20page%20example.png)

I am going to use Vite, this is a lightweight web server that allows me to run the application. After setting that up to quickly get done the nav bar I will use my Navbar.jsx that I created in a prior project. Downloaded the neccesary additions too. I concluded that the text could just be added and then styles with CSS later so decided to focus on the rubix cube components first.

Rather than have it click it and have it rotate I decided it would be better to have something yoou select and then are ablle to fill it in with different colours after.

![Image of selector](./images/selector.png)

After getting some basic code written the site looks like this.

![Image of website](./images/first%20website%20photo.png)

From here I realised I need to do the contexts so that when the colour is changed it stays changed and also so you can differentiate between the sides of the cube. For this I made a new component called side selector and then got to work

Needed Contexts to work:
- Colour of selector
- Current side of cube 
- Array with sides/induvidual faces stored

![Image of completed interface](./images/Completed%20interface.png)

This is fully functioning remembering the sides until reload, all that is left is to make the algorithm, figure out the way in which I think the results should be reported back to the user and then putting that all into the site. 

I feel as for now a "Front - Middle - Turn Left" allows for the user to know what to do with their cube and how to solve it from there. With the interface finished it is time to research and figure out out how to make and encode the algorithm.