import joi from "joi"

export const movieSchema = joi.object({
    name: joi.string().required(),
    year: joi.number().required(),
    genre: joi.string().required(),
    score: joi.number().required().min(0).max(10),
    commentary: joi.string().allow('').optional(),
});