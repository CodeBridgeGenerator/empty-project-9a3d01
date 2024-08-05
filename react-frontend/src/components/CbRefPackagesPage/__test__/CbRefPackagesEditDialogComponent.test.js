import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefPackagesEditDialogComponent from "../CbRefPackagesEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefPackages edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefPackagesEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefPackages-edit-dialog-component")).toBeInTheDocument();
});
