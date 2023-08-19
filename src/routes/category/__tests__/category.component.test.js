import { screen } from "@testing-library/react";
import Category from "../category.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));

describe("Category tests", () => {
  test("it should render a spinner if isLoading is true", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  test("it should render products if isLoading is false and there are items present", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: "mens",
              items: [
                {
                  id: 1,
                  name: "Product 1",
                },
                {
                  id: 2,
                  name: "Product 2",
                },
              ],
            },
          ],
        },
      },
    });

    expect(screen.queryByTestId("spinner")).toBeNull();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
  });
});
