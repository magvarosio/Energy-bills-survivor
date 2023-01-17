<a id="idtext"></a>

# ⚡️ Energy Bills Survivor ⚡️


![energydemo](https://user-images.githubusercontent.com/112773333/212915431-e2005bb2-ee55-4c3d-bd44-6723f8cf4ea8.gif)

- [Brief](#brief)
- [Deployment](#deployment)
- [Concept](#concept)
- [Technologies Used](#technologies-used)
- [Planning](#planning)
- [Process](#process)
- [Bugs, Challenges and Wins](#bugs-challenges-and-wins)
- [Key Learnings](#key-learnings)
- [Author](#authors)


## Brief

## Deployment

#### Please follow this link to play my game: https://magvarosio.github.io/project-space-invaders/

#### Repository link: https://github.com/magvarosio/energy-bills-survivor

## Concept
This game was a solo project where we were asked to build a game using HTML, CSS and JavaScript. I decided to build a space invaders clone. I decided to call it  ‘Energy Bills Survivor’ as the player has to destroy the light bulbs in order to survive the 2022 energy bills. The player is a floating hologram.

## Technologies Used

### Languages:

- [x] Vanilla JavaScript
- [x] HTML5 (including audio)
- [x] CSS

### Development Tools:

- [x] Visual Studio Code
- [x] Git and GitHub
- [x] GitHub pages (for deployment)
- [x] Google Chrome Development Tools
- [x] Google Fonts
- [x] Canva (for images)


## Planning

First, I created a wire frame, pseudo-code, and also set daily goals in order to build as many features as possible for my game.

![image1](https://user-images.githubusercontent.com/112773333/212917901-a17ac7b4-b520-4f76-b871-17c17610a339.png)

I also planned the work with a roadmap on Notion, setting the Priorities and writing general ideas on how every function should have worked. I decided which function I needed and which elements were necessary in order to meet the MVP, maximise the work and hit the deadline. I wrote down the function I needed in this roadmap:

![image2](https://user-images.githubusercontent.com/112773333/212918000-f0c890a8-09ad-4568-b981-451e6e1ca1b9.png)

## Process

I followed my roadmap to build the code. I did the set-up grid that allowed me to build the game and then I started working on the three main elements: Player, Laser and Invaders. 

This is the grid setup. I used a ‘for loop’ to create the grid <div> in HTML. 

![Screenshot 2023-01-17 at 14 00 35](https://user-images.githubusercontent.com/112773333/212918296-17bfe653-a43c-48b5-8652-8e5a16b7b2a9.png)

For every function, I created an `addElement`, a `removeElement` and a `moveElement` function. For example, I wrote the functions:  `addInvaders`, `removeInvaders` and `moveInvaders`. 

To save time, whenever I decided to add an invader, I created this for-loop, adding a condition in order to remove the invader after the collision.


![Screenshot 2023-01-17 at 14 01 11](https://user-images.githubusercontent.com/112773333/212918460-f972c09e-b61b-40f3-9a60-76f32e6ad519.png)

In order to move the invader array, I created two variables to check the left border and the right one. Then I used an If statement to check if the movement was in the right direction and if it was on the edge of the grid. 
Here’s the code I wrote in order to achieve this result: 

![Screenshot 2023-01-17 at 14 01 38](https://user-images.githubusercontent.com/112773333/212918566-3194f4a9-35de-4fd2-924b-fbda7fa1d29a.png)

The `moveLaser()` function allowed me to set the movement of the laser, work on the collision between the laser and the invader and also start writing the logic that would lead to the end of the game. 
After removing the explosion, every time an invader is killed, it goes into an array (I created an empty array in the global variables called `killInvadersArray`). To win the game the length of the killed array has to be equal to the initial array -called invadersArray-.  

![Screenshot 2023-01-17 at 14 02 38](https://user-images.githubusercontent.com/112773333/212918782-2dd72788-1ab9-4e4f-92fe-48cb51443c6f.png)



## Bugs, Challenges and Wins

The main challenge for me was to make the invaders move all together as a group and how to make them disappear once dead.
Initially this caused a delay in my progress, but working through and solving the issue early on actually worked out in my favor. This was because I acquired useful knowledge from the experience that enabled me to quickly fix any similar future problems, thus allowing me to get back on track with my schedule.

I managed to meet the MVP and hit the deadline. I also managed to save some time at the end of the project to add the laser sound, play with CSS in a creative way and develop a general concept of the game.

Planning. A well-structured and thorough plan for reaching the minimum viable product was really beneficial for me. It made the entire process more efficient and less stressful. This is because I had specific targets to work towards each day, breaking down the bigger project into more manageable pieces

## Key Learnings

I feel I have strengthened the concepts we learnt in the past three weeks, improved my understanding of DOM manipulation using JavaScript and understood how methods can be used in a real project. 

## Author

- LinkedIn - [Margherita (Mag) Varosio](https://www.linkedin.com/in/margherita-varosio/)
- Email - margherita.varosio@gmail.com

[Back to the top ⬆️](#idtext)
