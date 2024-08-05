import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefDomainsPage from "../CbRefDomainsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefDomains page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefDomainsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefDomains-datatable")).toBeInTheDocument();
    expect(screen.getByRole("cbRefDomains-add-button")).toBeInTheDocument();
});
