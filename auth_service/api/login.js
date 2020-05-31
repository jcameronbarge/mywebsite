"use strict";

exports.login = async (body) => {
  console.log(body);
  if (!(body.hasOwnProperty("email") && body.hasOwnProperty("password"))) {

  }

  return { status: "ok" };
};
