import React from "react";
import { render, screen } from "@testing-library/react";

import AddonSupportCreateDialogComponent from "../AddonSupportCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonSupport create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonSupportCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonSupport-create-dialog-component")).toBeInTheDocument();
});
