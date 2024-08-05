import React from "react";
import { render, screen } from "@testing-library/react";

import AddonDiscountPage from "../AddonDiscountPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonDiscount page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonDiscountPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonDiscount-datatable")).toBeInTheDocument();
    expect(screen.getByRole("addonDiscount-add-button")).toBeInTheDocument();
});
