import React, { useState } from "react";

import styled from "styled-components";

import IsoTopeGrid from "react-isotope";

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

const Filter = styled("button")`
  background-color: transparent;
  border: none;
  outline: none;

  > input {
    width: 0;
    height: 0;

    &:checked {
      & + label {
        color: blue;
        border-color: blue;
      }
    }
  }

  > label {
    padding: 5px;
    border-bottom: 2px solid transparent;

    &:hover {
      color: blue;
      cursor: pointer;
    }
  }
`;

const Card = styled("div")`
  &.test {
    background-color: blue !important;
  }

  &.test1 {
    background-color: red !important;
  }
`;

const cardsDefault = [
  {
    id: "a",
    filter: ["test", "chart"]
  },
  {
    id: "b",
    filter: ["test1", "tile"]
  },
  {
    id: "c",
    filter: ["test", "chart"]
  },
  {
    id: "d",
    filter: ["test1", "tile"]
  },
  {
    id: "e",
    filter: ["test", "tile"]
  },
  {
    id: "f",
    filter: ["test1", "chart"]
  },
  {
    id: "h",
    filter: ["test1", "chart"]
  }
];

const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "test", isChecked: false },
  { label: "test1", isChecked: false },
  { label: "chart", isChecked: false },
  { label: "tile", isChecked: false }
];

export default function App() {
  const [filters, updateFilters] = useState(filtersDefault);

  const onFilter = event => {
    const {
      target: { value, checked }
    } = event;

    updateFilters(state =>
      state.map(f => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked
          };
        }

        return f;
      })
    );
  };

  return (
    <div className="App">
      <div>
        {filters.map(f => (
          <Filter key={`${f.label}_key`}>
            <input
              id={f.label}
              type="checkbox"
              value={f.label}
              onChange={onFilter}
              checked={f.isChecked}
            />
            <label htmlFor={f.label}>{f.label}</label>
          </Filter>
        ))}
      </div>

      <Container>
        <IsoTopeGrid
          gridLayout={cardsDefault}
          noOfCols={3}
          unitWidth={200}
          unitHeight={100}
          filters={filters}
        >
          {cardsDefault.map(card => (
            <Card key={card.id} className={`card ${card.filter[0]}`}>
              <div className="tags">
                {card.filter.map(c => (
                  <span>{c}</span>
                ))}
              </div>
              {card.id}
            </Card>
          ))}
        </IsoTopeGrid>
      </Container>
    </div>
  );
}
