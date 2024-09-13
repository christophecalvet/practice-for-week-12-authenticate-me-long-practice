const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');


const { ValidationError } = require('sequelize');  //Attempt to fix error validaor is not defined

const router = express.Router();

// Sign up
router.post(
    '/',
    async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });

      await setTokenCookie(res, user);

      return res.json({
        user
      });
    }
  );


module.exports = router;
