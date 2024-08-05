import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefDiscountCodeEditDialogComponent from "../CbRefDiscountCodeEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefDiscountCode edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefDiscountCodeEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefDiscountCode-edit-dialog-component")).toBeInTheDocument();
});
