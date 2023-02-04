// @desc    Show all the bootcamps
// @route   GET /api/v1/bootcamps
// @access  public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "Show all Bootcamps",
    user: req.user,
  });
};

// @desc    Show bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Show Bootcamp: ${req.params.id}`,
  });
};

// @desc    Create a new bootcamp
// @route   POST /api/v1/bootcamps
// @access  private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Create new Bootcamp`,
  });
};

// @desc    Update a new bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Update Bootcamp: ${req.params.id}`,
  });
};

// @desc    Delete a new bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `Delete Bootcamp: ${req.params.id}`,
  });
};
