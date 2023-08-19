import { categoriesReducer, INITIAL_STATE } from "../category.reducer";

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "../category.action";

describe("Category Reducer tests", () => {
  test("fetchCategoriesStart", () => {
    const expectedState = {
      ...INITIAL_STATE,
      isLoading: true,
    };

    expect(categoriesReducer(INITIAL_STATE, fetchCategoriesStart())).toEqual(
      expectedState
    );
  });

  test("fetchCategoriesSuccess", () => {
    const mockData = [
      {
        title: "mens",
        imageUrl: "test",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
      {
        title: "womens",
        imageUrl: "test",
        items: [
          { id: 1, name: "Product 3" },
          { id: 2, name: "Product 4" },
        ],
      },
    ];
    const expectedState = {
      ...INITIAL_STATE,
      isLoading: false,
      categories: mockData,
    };

    expect(
      categoriesReducer(INITIAL_STATE, fetchCategoriesSuccess(mockData))
    ).toEqual(expectedState);
  });

  test("fetchCategoriesFailed", () => {
    const mockError = new Error("Error fetching categories");

    const expectedState = {
      ...INITIAL_STATE,
      isLoading: false,
      error: mockError,
    };

    expect(
      categoriesReducer(INITIAL_STATE, fetchCategoriesFailed(mockError))
    ).toEqual(expectedState);
  });
});
