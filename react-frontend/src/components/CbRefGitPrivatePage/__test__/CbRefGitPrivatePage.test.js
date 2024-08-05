import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefGitPrivatePage from "../CbRefGitPrivatePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefGitPrivate page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefGitPrivatePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefGitPrivate-datatable")).toBeInTheDocument();
    expect(screen.getByRole("cbRefGitPrivate-add-button")).toBeInTheDocument();
});
