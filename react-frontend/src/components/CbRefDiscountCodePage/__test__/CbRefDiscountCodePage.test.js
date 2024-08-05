import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefDiscountCodePage from "../CbRefDiscountCodePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefDiscountCode page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefDiscountCodePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefDiscountCode-datatable")).toBeInTheDocument();
    expect(screen.getByRole("cbRefDiscountCode-add-button")).toBeInTheDocument();
});
