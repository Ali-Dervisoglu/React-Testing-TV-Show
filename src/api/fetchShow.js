import { useState } from "react";
import axios from "axios";
import { formatSeasons } from "../utils/formatSeasons";

// const [show, setShow] = useState(null);
// const [seasons, setSeasons] = useState([]);
// const [selectedSeason, setSelectedSeason] = useState("");
// const episodes = seasons[selectedSeason] || [];
// export default function fetchShow() {
//     axios
//         .get(
//             "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
//         )
//         .then(res => {
//             setShow(res.data);
//             setSeasons(formatSeasons(res.data._embedded.episodes));
//         });
// }


export const fetchShow = (show, seasons, selectedSeason, setShow, setSeasons, setSelectedSeason) => {
    
        axios
          .get(
            "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
          )
          .then(res => {
            setShow(res.data);
            setSeasons(formatSeasons(res.data._embedded.episodes));
          });
      }; 

// export default fetchShow();