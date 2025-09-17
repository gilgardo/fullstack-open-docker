const express = require("express");
const router = express.Router();
const { getAsync, setAsync } = require("../redis");

const configs = require("../util/config");

/* GET index data. */
router.get("/", async (req, res) => {
  let visits = await getAsync("visits");

  if (!visits) {
    visits = 0;
  }
  visits = Number(visits);
  await setAsync("visits", visits + 1);
  res.send({
    ...configs,
    visits,
  });
});

module.exports = router;
