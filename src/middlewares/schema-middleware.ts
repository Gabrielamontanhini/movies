import { NextFunction, Request, Response } from "express";
import { Schema, ValidationResult } from "joi";

export function validateSchema(schema: Schema){
    return (req: Request, res: Response, next: NextFunction) => {
        const validate: ValidationResult = schema.validate(req.body, { abortEarly: false })
        if (validate.error) {
            const errors = validate.error.details.map((detail) => detail.message);
            return res.status(422).send(errors);
        }
        next()
    }
}