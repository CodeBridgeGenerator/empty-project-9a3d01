import React from "react";
import { render, screen } from "@testing-library/react";

import AddonPackageEditDialogComponent from "../AddonPackageEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonPackage edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonPackageEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonPackage-edit-dialog-component")).toBeInTheDocument();
});
