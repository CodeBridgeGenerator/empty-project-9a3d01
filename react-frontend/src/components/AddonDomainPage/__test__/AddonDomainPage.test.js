import React from "react";
import { render, screen } from "@testing-library/react";

import AddonDomainPage from "../AddonDomainPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonDomain page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonDomainPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonDomain-datatable")).toBeInTheDocument();
    expect(screen.getByRole("addonDomain-add-button")).toBeInTheDocument();
});
