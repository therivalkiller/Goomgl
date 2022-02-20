import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from "../context/ResultContextProvider";

export const Results = () => {

  const { results, isLoading, getResults, searchTerm } = useResultContext();


  return <div>Results</div>;
};
