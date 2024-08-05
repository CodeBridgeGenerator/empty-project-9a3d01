import React from "react";
import { render, screen } from "@testing-library/react";

import AddonSupportEditDialogComponent from "../AddonSupportEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonSupport edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonSupportEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonSupport-edit-dialog-component")).toBeInTheDocument();
});
