import React from "react";
import { render, screen } from "@testing-library/react";

import AddonPrivacyPage from "../AddonPrivacyPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders addonPrivacy page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AddonPrivacyPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("addonPrivacy-datatable")).toBeInTheDocument();
    expect(screen.getByRole("addonPrivacy-add-button")).toBeInTheDocument();
});
