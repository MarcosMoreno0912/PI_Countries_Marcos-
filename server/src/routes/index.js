const { Router } = require("express");
const activityRouter = require('./activityRouter.js');
const countryRouter = require('./countryRouter.js');

const router = Router();

router.use('/activities', activityRouter);
router.use('/countries', countryRouter);

module.exports = router;
