import React from "react";
import { render, screen } from "@testing-library/react";

import AddonSupportPage from "../AddonSupportPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonSupport page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonSupportPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonSupport-datatable")).toBeInTheDocument();
    expect(screen.getByRole("addonSupport-add-button")).toBeInTheDocument();
});
