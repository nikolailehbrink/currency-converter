import { render, screen } from "@testing-library/react";

import { describe, it } from "vitest";
import ConvertCurrencyForm from "./components/ConvertCurrencyForm";

describe("App", () => {
  it("renders app", () => {
    render(<ConvertCurrencyForm />);

    screen.debug();
  });
});
