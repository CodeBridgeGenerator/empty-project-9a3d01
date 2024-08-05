import React from "react";
import { render, screen } from "@testing-library/react";

import AddonDomainCreateDialogComponent from "../AddonDomainCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonDomain create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonDomainCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonDomain-create-dialog-component")).toBeInTheDocument();
});
