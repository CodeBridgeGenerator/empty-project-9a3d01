import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefDiscountCodeCreateDialogComponent from "../CbRefDiscountCodeCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefDiscountCode create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefDiscountCodeCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefDiscountCode-create-dialog-component")).toBeInTheDocument();
});
