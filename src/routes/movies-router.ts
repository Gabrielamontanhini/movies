import { Router } from "express";

import * as moviesController from "../controllers/movies-controllers"
import { validateSchema } from "../middlewares/schema-middleware";
import { movieSchema } from "../schemas/movie-schema";

const moviesRouter = Router()

moviesRouter.get("/movies",  moviesController.getMovies)
moviesRouter.post("/movies", validateSchema(movieSchema),moviesController.postMovie)
moviesRouter.delete("/movies/:id", moviesController.deleteMovie)
moviesRouter.patch("/movies/edit-score/:id", moviesController.editScore)
moviesRouter.patch("/movies/edit-comment/:id", moviesController.editCommentaryById)

export default moviesRouter