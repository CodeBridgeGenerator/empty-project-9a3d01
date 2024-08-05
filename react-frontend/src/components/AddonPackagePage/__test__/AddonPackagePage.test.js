import React from "react";
import { render, screen } from "@testing-library/react";

import AddonPackagePage from "../AddonPackagePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonPackage page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonPackagePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonPackage-datatable")).toBeInTheDocument();
    expect(screen.getByRole("addonPackage-add-button")).toBeInTheDocument();
});
