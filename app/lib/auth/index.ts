import { betterAuth } from "better-auth";
import { oAuthProxy } from "better-auth/plugins";
import Database from "better-sqlite3";

if (!(process.env.CLIENT_ID && process.env.CLIENT_SECRET)) {
  throw new Error("Missing env vars");
}

export const auth = betterAuth({
  database: new Database("./sqlite.db"),
  secret: "supersecret",
  plugins: [oAuthProxy()],
  socialProviders: {
    google: {
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectURI: "http://localhost:3000/api/auth/callback/google",
    },
  },
});
