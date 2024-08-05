import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefHostingEditDialogComponent from "../CbRefHostingEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefHosting edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefHostingEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefHosting-edit-dialog-component")).toBeInTheDocument();
});
