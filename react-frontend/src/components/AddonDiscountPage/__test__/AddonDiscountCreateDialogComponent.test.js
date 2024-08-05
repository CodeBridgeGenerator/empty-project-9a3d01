import React from "react";
import { render, screen } from "@testing-library/react";

import AddonDiscountCreateDialogComponent from "../AddonDiscountCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonDiscount create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonDiscountCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonDiscount-create-dialog-component")).toBeInTheDocument();
});
