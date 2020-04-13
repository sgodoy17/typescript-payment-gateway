import { Authentication } from "../../src/helpers/Authentication";

test("Authentication", () => {
  let auth = new Authentication({
    login: "login",
    tranKey: "ABCD1234",
    auth: {
      seed: "2016-10-26T21:37:00+00:00",
      nonce: "ifYEPnAcJbpDVR1t",
    },
  });

  let data = auth.toObject();

  expect(data.login).toEqual("login");
  expect(data.tranKey).toEqual("NDlpEEAIe8sbKZ6mGWQrZwbyBB62J1LcyP/a/o7LRqY=");
  expect(data.seed).toEqual("2016-10-26T21:37:00+00:00");
  expect(data.nonce).toEqual("aWZZRVBuQWNKYnBEVlIxdA==");
});
