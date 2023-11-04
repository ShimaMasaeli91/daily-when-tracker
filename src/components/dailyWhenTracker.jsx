import React, { useState } from "react";
import "./styles.css";

const DailyWhenTracker = () => {
  const now = new Date();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [answers, setAnswers] = useState({
    day: days[now.getDay()],
    date: now.toISOString(),
    title: "",
    createdAt: now.toISOString(),
    alertScore: 0,
    energeticScore: 0,
  });

  debugger;
  console.info(answers);
  console.info("Info ------");
  console.log("log ------");
  console.warn("warn ------");
  console.error("error ------");

  //answers is a state variable that contains the current values of the user's answers to the three questions. It is initialized to an empty object, and it is updated whenever the user changes an answer.
  //setAnswers is a function that can be used to update the answers state variable. It takes a new object as an argument, and it overwrites the current answers state variable with the new object.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
  };

  //The handleSubmit function is an asynchronous function that is called when the user submits the form.
  //It does the following:
  // It prevents the default form submission behavior.
  // It creates a new fetch request to the /api/track-daily-when endpoint.
  // It sets the method of the request to POST.
  // It sets the Content-Type header of the request to application/json.
  // It sets the body of the request to the JSON-serialized answers object.
  // It awaits the response from the server.
  // It does something with the response, such as checking for errors or displaying a success message.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl =
      "https://dev-api-when-time-tracker.iplugx.ir/api/time_tracks";
    // Parse the alertScore field to an integer
    answers.alertScore = parseInt(answers.alertScore);
    answers.energeticScore = parseInt(answers.energeticScore);
    const answersString = JSON.stringify(answers);
    console.warn(answers);
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/ld+json",
      },
      body: answersString,
    });

    if (response.ok) {
      // Success!
    } else {
      // Error!
    }
  };

  return (
    <div className="container">
      <h1 className="main-header">DAILY WHEN TRACKER</h1>
      <div className="questions">
        <div>
          <label htmlFor="title">What am I doing?</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={answers.title}
          />
        </div>
        <div>
          <label htmlFor="alertScore">How mentally alert do I feel?</label>
          <select
            name="alertScore"
            onChange={handleChange}
            value={answers.alertScore}
          >
            <option value="">Select an option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <label htmlFor="energeticScore">How energetic do I feel?</label>
          <select
            name="energeticScore"
            onChange={handleChange}
            value={answers.energeticScore}
          >
            <option value="">Select an option</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <button className="button" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default DailyWhenTracker;
