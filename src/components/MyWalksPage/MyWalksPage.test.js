import { render, screen, cleanup, waitFor } from "@testing-library/react";
import axiosMock from "axios";
import MyWalks from "./MyWalksPage";
import { BrowserRouter as Router } from "react-router-dom";

// data returned
const mockData = [
    {
        aveRating: 1, dayOf: "27",
        id: "f77d9d24-485d-458b-9fb7-493b987ccde9",
        monthOf: "3",
        userID: "5e37e4d7-d053-4936-8827-01500c10a959",
        walkName: "City Centre",
        walktime: "3/27/2021 10:55:05 PM",
        yearOf: "2021"
    }, {
        aveRating: 0,
        dayOf: "24",
        id: "68f3f3ee-658a-46d3-9f29-459abdb4439c",
        monthOf: "3",
        userID: "5e37e4d7-d053-4936-8827-01500c10a959",
        walkName: "Rachel's Park Walk",
        walktime: "3/24/2021 4:02:48 PM",
        yearOf: "2021"
    }
];

// props

const mockDetails = { selectedTime: 0, reminderId: "", reminderTime: 0, userId: "5e37e4d7-d053-4936-8827-01500c10a123" };

const mockHistory = {};

describe("MyWalksPage component tests", () => {

    afterEach(cleanup);

    test("fetches & displays walks", async () => {

        axiosMock.get.mockResolvedValueOnce({ data: mockData });

        const { getByTestId } = render(
            <Router>
                <MyWalks details={mockDetails} history={mockHistory} />
            </Router>

        );

        expect(getByTestId("loading")).toHaveTextContent("...Loading");
        expect(getByTestId("title")).toHaveTextContent("My Walks");
        expect(getByTestId("rating")).toHaveTextContent("Rating");
        expect(getByTestId("delete")).toHaveTextContent("Delete");

        await waitFor(() => expect(screen.getByText("City Centre")).toBeInTheDocument());
        await waitFor(() => expect(screen.getAllByTestId("walk_name")).toHaveLength(2));
        await waitFor(() => expect(screen.getAllByRole("button")).toHaveLength(3));
        await waitFor(() => expect(screen.getAllByRole("button")[0]).toHaveTextContent("x"));
        await waitFor(() => expect(screen.getAllByRole("button")[2]).toHaveTextContent("Add Walk"));
        await waitFor(() => expect(axiosMock.get).toHaveBeenCalledTimes(1));
    });

});