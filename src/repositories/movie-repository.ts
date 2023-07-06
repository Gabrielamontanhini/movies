import { db } from "../database/database-connection";
import { MovieScore } from "../protocols";


const result: MovieScore[] = [
{name: "Shrek", year: 2001, genre: "Animação, Infantil" ,score: 10, commentary: "Uma obra prima, um dos melhores filmes ja feitos pela DreamWorks e pela humanidade toda."},
{name: "Donnie Darko", year: 2001, genre: "Ficção Científica, Drama", score: 8, commentary: "Um drama psicológico intrigante, mas que pode acabar sendo visto como 'confuso e dificil de entender'."}, 
{name: "Shrek 2", year: 2004, genre: "Animação, Infantil" ,score: 10, commentary: "Uma excelente continuação, mantendo a qualidade e perfeição do primeiro filme."}
]

export async function postMovieDB(movie: MovieScore){
   const result = await db.query(`INSERT INTO movies (nome, ano, genero, nota, comentario)
   VALUES ($1, $2, $3, $4, $5)`,
   [movie.name, movie.year, movie.genre, movie.score, movie.commentary])
return result
}

export async function getMoviesDB(){
const result = await db.query(`SELECT * FROM movies`)
return result.rows
}

export async function deleteMovieDB(id: number) {
    const result = await db.query(`DELETE FROM movies WHERE id=$1;`, [id])
    return result
}

export async function editScoreDB(score:number, id: number) {
    const result = await db.query(`UPDATE movies SET  nota = $1 WHERE id = $2;`, [score, id])
    return result
}

export async function  editCommentaryDB(commentary:string, id:number) {
    const result = await db.query(`UPDATE movies SET comentario = $1 WHERE id = $2;`, [commentary, id])
}