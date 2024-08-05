import React from "react";
import { render, screen } from "@testing-library/react";

import AddonPackageCreateDialogComponent from "../AddonPackageCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonPackage create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonPackageCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonPackage-create-dialog-component")).toBeInTheDocument();
});
