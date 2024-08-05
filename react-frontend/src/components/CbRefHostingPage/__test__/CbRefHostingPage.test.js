import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefHostingPage from "../CbRefHostingPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefHosting page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefHostingPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefHosting-datatable")).toBeInTheDocument();
    expect(screen.getByRole("cbRefHosting-add-button")).toBeInTheDocument();
});
