import React from "react";
import { render, screen } from "@testing-library/react";

import AddonHostingEditDialogComponent from "../AddonHostingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonHosting edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonHostingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonHosting-edit-dialog-component")).toBeInTheDocument();
});
