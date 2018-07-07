import { JsonController, Get, Post, HttpCode, Body, Put, Param, NotFoundError, BadRequestError } from 'routing-controllers'
import Game from './entity'

const colors = ['red', 'blue', 'green', 'yellow', 'magenta']


@JsonController()
export default class GameController {
  @Get('/games')
  async allGames() {
    const games = await Game.find()
    return { games }
  }

  @Post('/games')
  @HttpCode(201)
  createGame(
    @Body() game: Game
  ) {
    game.color = colors[Math.floor(Math.random() * colors.length)]
    return game.save()
  }

  @Put('/games/:id')
  async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
  ) {
    const game = await Game.findOne(id)
    if(!game) throw new NotFoundError('Cannot find game')
    if(update.color && colors.indexOf(update.color) < 0) throw new BadRequestError('Wrong color')
    return Game.merge(game, update).save()
  }

  
}
// When a **game is changed** using the endpoint you made in #4 and the color field is updated, make sure (validate) that the color is one of these colors: red, blue, green, yellow, magenta