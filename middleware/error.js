const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  /* 
  here we will have 2 cases: 

  1. error from catch block - 
    this will have the error obj provided by mongoose and then we check here what 
    type of error it is and set a new ErrorResponse with the message and status on it

  2. error from try block -
  this will already have the ErrorResponse with the message and statusCode on it and we use
  it directly

  Finally, when we send the response, res will take the message and the statusCode from the 
  ErrorResponse object
  */

  // making a copy of the error as we don't want to send response again and again in every if block
  let error = { ...err };
  error.message = err.message; // because it won't get copied by {...err}, used for case 2

  // Mongoose Bad ObjectID
  if (err.name === "CastError") {
    const message = `Resource not found with id of: ${error.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate error
  if (err.code === 11000) {
    const message = `Duplicate field value provided`;
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    /*

    err.errors is an array of objects with the key as the field which has error and
    the value as the ValidationError object

    [{name: ValidationError},{description: ValidationError},{address: ValidationError}]

    */
    const message = Object.values(err.errors).map((err) => err.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
