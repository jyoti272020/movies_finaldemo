import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Form } from "reactstrap";
import axios from 'axios';

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [ name, setName ] = useState('');
	const [ amount, setAmount ] = useState('');
  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovieDetail();
  }, []);

  function getMovieDetail() {
    setLoading(true);
    fetch(`http://localhost:5000/getMovies/${movieId}`)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setData(result);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }

 async function onClickBook() {
      axios
        .post(`http://localhost:5000/ticketBook`, {
          name, 
          amount
        })
        .then((res) => {
          console.log(res);
                  console.log(res.data);
                  alert('Ticket booked succesfully');
        });
    }
  
  return (
    <Container>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2>{data.Title}</h2>
          <h4>Year: {data.Year}</h4>
          <p>
            <img src={data.Poster} alt="img" className="img-thumbnail" />
          </p>
          <p>PLOT</p>
          <p>{data.Plot}</p>
          <h5>Rating: {data.imdbRating}</h5>
          <h6>Country: {data.Country}</h6>
          <br />
          <Form>
            <label for="name">
              Full name
              <span aria-hidden="true" required="">
                *
              </span>
            </label>
            <input id="name" required="" type="text" 
            onChange={(e)=>{
              setName(e.target.value)
            }}/>
            <label for="name">
              Amount
              <span aria-hidden="true" required="">
                *
              </span>
            </label>
            <input id="name" required="" type="text" onChange={(e)=>{
              setAmount(e.target.value)
            }} />
            <button
              type="button"
              color="btn btn-primary"
              className="btn btn btn-primary -margin m-2"
               onClick={onClickBook}
            >
              Book Ticket
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => history.goBack()}
            >
              Go Back
            </button>
          </Form>
        </>
      )}
    </Container>
  );
}
