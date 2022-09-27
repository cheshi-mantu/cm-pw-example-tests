import { test } from "@playwright/test";
import { allure } from "allure-playwright";
import {
  attachJiraIssue,
  attachMicroservice,
  authorize,
  createNewEntity,
  deleteNewEntity,
} from "./utils";

test.describe("ShipmentRequestsWebTest", () => {
  test.beforeEach(async () => {
    allure.label({ name: "layer", value: "e2e" });
    allure.owner("baev");
    allure.feature("Shipment Requests");
  });

  test("Authenticated user with confirmed payment can request a shipment", async () => {
    allure.tag("e2e", "regress", "smoke", "regular");
    attachJiraIssue("AD-7");
    allure.story("Manage shipments");
    attachMicroservice("Shipment");
    await authorize();
    await createNewEntity("shipment");
  });
  test("Authenticated user with confirmed payment can cancel a shipment", async () => {
    attachJiraIssue("AD-8");
    allure.tag("web", "regress", "regular", "smoke");
    allure.story("Manage shipments");
    attachMicroservice("Shipment");
    await authorize();
    await deleteNewEntity("shipment");
  });
});