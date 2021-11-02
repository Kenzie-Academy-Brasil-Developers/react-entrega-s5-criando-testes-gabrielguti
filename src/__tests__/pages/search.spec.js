import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Search from "../../components/Search";
import api from "../../services";
import MockAdapter from "axios-mock-adapter";
import Providers from "../../providers/";

const apiMock = new MockAdapter(api);

describe("Search Page", () => {
  apiMock.onGet("88064092").replyOnce(200, {});
  it("should be able to search an address", async () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const input = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: 88064092 } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(input).toHaveValue(88064092);
    });
  });
});
