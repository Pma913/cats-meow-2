# Cats Meow

## links
- [deployed site](https://cats-meow.vercel.app/)
- [repo](https://github.com/Pma913/cats-meow-2)
- [project board](https://github.com/users/Pma913/projects/4/views/1?layout=board)

## Abstract
Cats Meow is a cat fact generator. The user is able to generate random cat facts at the click of a button, favorite the fact to save for later or get a new fact. This application is designed for all those people out there desperate to know the most about cats and more specifically, to be able to impress their friends with their super knowledge of everyones favorite furry companions..... well at least 25% of us. 

## Context
The purpose of this application is to fetch data from an api and manipulate it in some way through user interaction all while displaying an understanding of React architecture and routing with React Router.


## At a glance
![giph here]()

## Technologies Used
- React
- CSS
- JSX
- React Router
- Cypress
- PropTypes

## Install
- clone [repo](https://github.com/Pma913/cats-meow-2)
- `cd` into repo
- run `npm i`
- run `npm start`

## Winns
For this project, I really wanted a way to make data persist across page refresh/reloads. I orriginally reached out for local storage which worked, but then I started looking into session storage which appealed to me better since it would allow the data model to maintain updates only as long as the specific tab stayed open. Also it was a new and exciting resource to reach for when creating this project.

## Challenges
Getting the bad url path to work for this project was a bit of a challenge for me. I got it to work just by using the * path, but then noticed that the error page was attaching it to the bottom of each page. Did some digging and came up with the Switch routing and implemented that which resulted in successful routing of the error component when a bad url was entered within the application. 

## Collaborators
Patrick Ankiewicz: [github](https://github.com/Pma913) | [linkedin](https://www.linkedin.com/in/patrick-ankiewicz/)

## Future Extensions
- Random cat photo with each fact
- Turn saved cards into cat quiz/flash cards
- Add cat breed and profile section
- Random cat fact on landing page
