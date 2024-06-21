import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPCOMING_URL, options } from '../utils/constants';
import { addUpcomingMovie } from '../reduxStore/movieSlice';

const useGetUpcoming = () => {
  const upcoming = useSelector((store) => store.movies.upcoming);
  const dispatch = useDispatch();

  useEffect(() => {
    !upcoming && getUpcomig();
  }, []);

  const getUpcomig = async () => {
    const data = await fetch(UPCOMING_URL, options);
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };
}

export default useGetUpcoming;
