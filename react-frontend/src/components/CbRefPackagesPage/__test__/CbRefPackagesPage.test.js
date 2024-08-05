import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefPackagesPage from "../CbRefPackagesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefPackages page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefPackagesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefPackages-datatable")).toBeInTheDocument();
    expect(screen.getByRole("cbRefPackages-add-button")).toBeInTheDocument();
});
