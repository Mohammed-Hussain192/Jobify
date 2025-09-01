const express = require("express");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// Session middleware
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: "1016899033409-ugqsqvb0r3mqs1bsnm9kjftvgti9evn6.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // You can save user to DB here
      console.log(profile)
      const userData = {
        name: profile.displayName,  // Full name
        email: profile.emails[0].value,  // First email
      };

      console.log("Selected User Data: ", userData);
      return done(null, profile);
    }
  )
);

// Serialize & Deserialize User
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Routes
app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Login with Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.send(`Hello ${req.user.displayName}, you are logged in ✅`);
  }
);

app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

// Start server
app.listen(5000, () => console.log("Server running at http://localhost:5000"));
