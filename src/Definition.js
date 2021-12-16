import React from "react";
import Synonyms from "./Synonyms";
import Accordion from "react-bootstrap/Accordion";
export default function Definition(props) {
  return (
    <Accordion eventKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> {props.definition.definition}</Accordion.Header>
        <Accordion.Body>
          <em>{props.definition.example}</em>
          <br />
          <Synonyms synonyms={props.definition.synonyms} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
