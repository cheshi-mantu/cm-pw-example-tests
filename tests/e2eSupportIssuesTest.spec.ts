import { expect, test } from "@playwright/test";
import { allure } from "allure-playwright";
import {
  attachJiraIssue,
  attachMicroservice,
  authorize,
  createNewEntity,
  deleteNewEntity,
} from "./utils";

test.describe("IssuesWebTest", () => {
  test.beforeEach(async () => {
    allure.label({ name: "layer", value: "e2e" });
    allure.owner("eroshenkoam");
    allure.feature("Support requests handling");
  });

  test("Authenticated user must be able to create a support request with type Issue", async () => {
    allure.tag("web", "critical", "regress");
    attachJiraIssue("AD-5");
    allure.story("Managing support requests with type Issue");
    attachMicroservice("Support");
    await createNewEntity("issue");
    await authorize();
  });

  test("Authenticated user must be able to close existing support request with type Issue", async () => {
    allure.tag("web", "regress");
    attachJiraIssue("AD-6");
    allure.story("Managing support requests with type Issue");
    attachMicroservice("Support");
    await deleteNewEntity("issue");
    await authorize();
  });
});