import React from "react";
import Synonyms from "./Synonyms";
import Accordion from "react-bootstrap/Accordion";
import "./Definition.css";
export default function Definition(props) {
  return (
    <Accordion>
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
