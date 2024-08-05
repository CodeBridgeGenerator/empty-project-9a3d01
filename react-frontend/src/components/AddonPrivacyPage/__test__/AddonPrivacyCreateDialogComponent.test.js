import React from "react";
import { render, screen } from "@testing-library/react";

import AddonPrivacyCreateDialogComponent from "../AddonPrivacyCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonPrivacy create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonPrivacyCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonPrivacy-create-dialog-component")).toBeInTheDocument();
});
