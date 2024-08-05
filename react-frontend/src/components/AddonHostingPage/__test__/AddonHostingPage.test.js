import React from "react";
import { render, screen } from "@testing-library/react";

import AddonHostingPage from "../AddonHostingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonHosting page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonHostingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonHosting-datatable")).toBeInTheDocument();
    expect(screen.getByRole("addonHosting-add-button")).toBeInTheDocument();
});
