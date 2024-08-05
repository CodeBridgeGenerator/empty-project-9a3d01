import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefPackagesCreateDialogComponent from "../CbRefPackagesCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefPackages create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefPackagesCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefPackages-create-dialog-component")).toBeInTheDocument();
});
