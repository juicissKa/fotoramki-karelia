import React, { useState } from "react";
import styles from "./FilterList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Filter } from "../../redux/reduxTypes";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const FilterList: React.FC<Filter> = ({ name, filters }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div className="dropdown__button" onClick={() => setIsOpen(!isOpen)}>
        <p>{capitalizeFirstLetter(name)}</p>
        <span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={isOpen ? "active" : ""}
          />
        </span>
      </div>
      <div className={`${"dropdown__content"} ${isOpen ? "active" : ""}`}>
        {filters.map((filter) => (
          <label className="selection" key={filter.id}>
            <input type="checkbox" /> {filter.value}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterList;
