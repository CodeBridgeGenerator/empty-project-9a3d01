import React from "react";
import { render, screen } from "@testing-library/react";

import AddonUsersPage from "../AddonUsersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonUsers page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonUsersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonUsers-datatable")).toBeInTheDocument();
    expect(screen.getByRole("addonUsers-add-button")).toBeInTheDocument();
});
