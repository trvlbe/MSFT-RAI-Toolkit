// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { wrapYAxisLabels } from "@responsible-ai/model-assessment";

describe("wrapYAxisLabels", () => {
  it.each`
    input                                                                                                         | expectedResult
    ${""}                                                                                                         | ${""}
    ${"a"}                                                                                                        | ${"a"}
    ${"This is a test description that's meant to be wrapped"}                                                    | ${"This is a test description that's meant<br /> to be wrapped"}
    ${"Not this one, though!"}                                                                                    | ${"Not this one, though!"}
    ${"Thisone,ontheotherhand,doesn'treallyofferanywhitespacewrapoptionsoitjustwraps"}                            | ${"Thisone,ontheotherhand,doesn'treallyoffe<br />ranywhitespacewrapoptionsoitjustwraps"}
    ${"Then again, some descriptions are so long that we really need to cut them off to avoid overlapping text."} | ${"Then again, some descriptions are so<br /> long that we really need to cut them off..."}
  `("should wrap text as expected", ({ input, expectedResult }) => {
    expect(wrapYAxisLabels(input)).toBe(expectedResult);
  });
});