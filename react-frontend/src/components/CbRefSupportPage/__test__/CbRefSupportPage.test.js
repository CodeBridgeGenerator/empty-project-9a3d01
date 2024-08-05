import React from "react";
import { render, screen } from "@testing-library/react";

import CbRefSupportPage from "../CbRefSupportPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders cbRefSupport page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CbRefSupportPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("cbRefSupport-datatable")).toBeInTheDocument();
    expect(screen.getByRole("cbRefSupport-add-button")).toBeInTheDocument();
});
