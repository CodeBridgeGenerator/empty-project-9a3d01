import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefHostingCreateDialogComponent from "../CbRefHostingCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefHosting create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefHostingCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefHosting-create-dialog-component")).toBeInTheDocument();
});
