# TicTacToe-API
Made to practice REST API. It uses Typescript, Koa, routing-controllers and TypeORM.

It has these endpoints:

* `GET /games`: returns all the games (with envelope)
* `POST /games`: create a new game (only with name)
* `PUT /games/:id`: allows to overwrite one or more fields of the game. (validation for color (being one of: red, blue, green, yellow, magenta) and limit to 1 move at a time)

* When a game starts, the app sets to an empty board. The board is a two dimensional array that contains three arrays with three times the letter 'o'.
```
const defaultBoard = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
]
```
