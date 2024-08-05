import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefDomainsCreateDialogComponent from "../CbRefDomainsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefDomains create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefDomainsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefDomains-create-dialog-component")).toBeInTheDocument();
});
