import { Request, Response } from "express";

import * as moviesServices from "../services/movie-service"
import { MovieScore } from "../protocols";
import httpStatus from "http-status";

export async function postMovie(req: Request, res: Response) {
    const movieResult = req.body as MovieScore
    try {
        await moviesServices.createMovieScore(movieResult)
        return res.sendStatus(httpStatus.CREATED)
    }
    catch (error) {
        res.sendStatus(httpStatus.CONFLICT);
    }
}

export async function getMovies(req: Request, res: Response) {
    try {
        const movies = await moviesServices.getMoviesScores();
        return res.send(movies)
    } catch (error) {
        res.sendStatus(httpStatus.CONFLICT);
    }
}

export async function deleteMovie(req: Request, res: Response){
    const id = Number(req.params.id) as number;
    try{
await moviesServices.deleteMovieById(id)
return res.send("Filme deletado").status(httpStatus.OK)
    }catch (error) {
        res.sendStatus(httpStatus.CONFLICT);
    }
}

export async function editScore(req: Request, res: Response) {
    const id = Number(req.params.id) as number;
    const score = req.body.score as number
    try{
       await moviesServices.editMovieScore(score, id)
    return res.sendStatus(httpStatus.OK)
    }catch (error) {
        res.sendStatus(httpStatus.CONFLICT);
    }
}

export async function editCommentaryById(req: Request, res: Response) {
    const id = Number(req.params.id) as number;
    const commentary = req.body.commentary as string
    try{
await moviesServices.editMovieComment(commentary, id)
return res.sendStatus(httpStatus.OK)
    }catch (error) {
        res.sendStatus(httpStatus.CONFLICT);
    }
}