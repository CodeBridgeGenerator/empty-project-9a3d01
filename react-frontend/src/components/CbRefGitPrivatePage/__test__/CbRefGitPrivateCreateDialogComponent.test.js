import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefGitPrivateCreateDialogComponent from "../CbRefGitPrivateCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefGitPrivate create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefGitPrivateCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefGitPrivate-create-dialog-component")).toBeInTheDocument();
});
