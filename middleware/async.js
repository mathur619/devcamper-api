const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// const asyncHandlerUsingTryCatch = (fn) => async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//     } catch (err) {
//       next(err);
//     }
//   };

module.exports = asyncHandler;
