import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";
export default function Results(props) {
  if (props.results && props.results.status === 200) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.data[0].word}</h2>
          {props.results.data[0].phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.data[0].meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else if (props.results && props.results.status === 404) {
    return (
      <div className="Results">
        <section>
          <h3>Could not find definition - please try another word.</h3>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
