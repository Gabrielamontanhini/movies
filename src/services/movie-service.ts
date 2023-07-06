import { MovieScore } from "../protocols";

import * as movieRepository from "../repositories/movie-repository"

export function createMovieScore(movie: MovieScore){
    return movieRepository.postMovieDB(movie)
}

export function getMoviesScores(){
    return movieRepository.getMoviesDB();
}

export function deleteMovieById(id: number){
return movieRepository.deleteMovieDB(id)
}

export function editMovieScore(score: number, id:number){
    return movieRepository.editScoreDB(score, id)
}

export function editMovieComment(commentary: string, id: number){
    return movieRepository.editCommentaryDB(commentary, id)
}