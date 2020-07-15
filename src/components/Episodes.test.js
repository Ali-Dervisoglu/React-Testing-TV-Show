import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes.js";

test("re-render successfully with episodes", () => {
    const {rerender, queryAllByTestId} = render(<Episodes episodes={[]}/>);
    const episodes = queryAllByTestId(/episode/ig);
    expect(episodes.length).toBeLessThanOrEqual(0);//todo: why does this test fail?
    expect(episodes).toStrictEqual([]);//todo: this test fails, expected [], received Array
    // [
    //     +   <div
    //     +     class="episodes"
    //     +     data-testid="episodes"
    //     +   />,
    //     + ]
    //???How did the queryAllByTestId(/episode/ig) return the div for Episodes?

    rerender(<Episodes episodes={mockData}/>);
    const newEpisodes = queryAllByTestId(/episode/i);
    expect(newEpisodes).toHaveLength(2);
});


const mockData = [
    {
        "id": 553946,
        "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        "name": "Chapter One: The Vanishing of Will Byers",
        "season": 1,
        "number": 1,
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        },
        "summary": "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
        "_links": {"self": {"href": "http://api.tvmaze.com/episodes/553946"}}
    },
    {
        "id": 1576473,
        "url": "http://www.tvmaze.com/episodes/1576473/stranger-things-3x05-chapter-five-the-flayed",
        "name": "Chapter Five: The Flayed",
        "season": 3,
        "number": 5,
        "airdate": "2019-07-04",
        "airtime": "",
        "airstamp": "2019-07-04T12:00:00+00:00",
        "runtime": 52,
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/204/510102.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/204/510102.jpg"
        },
        "summary": "<p>The Scoop Group explore the tunnels beneath Starcourt, while Nancy and Jonathan recruit Mike and the others to help them discover what happen to the Holloways and find the Mind Flayer's base of operations.</p>",
        "_links": {"self": {"href": "http://api.tvmaze.com/episodes/1576473"}}
    }
];

// test("s", async () => {
//     mockFetchShow.mockResolvedValueOnce(mockData);
//     const { getByText, getByTestId, getAllByTestId } = render(<App />);

//     waitForElementToBeRemoved(getByText(/fetching data/i)).then(() => {
//         const poster = getAllByTestId(/poster/i);
//         expect(poster).toHaveLength(1);

//         // const dropdown = getByTestId(/dropdown/i);
//         // fireEvent.click(dropdown);

//         const selectSeason = getByText(/select a season/i);
//         fireEvent.click(selectSeason);
//     })
// });