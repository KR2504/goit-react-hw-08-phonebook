import React from "react";
// import PropTypes from "prop-types";
import styles from "./styles/styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../redux/filter";
const Filter = () => {
    const dispatch = useDispatch();

    const value = useSelector(state => state.filter.value);

    const handleChangeFilter = e => (
        dispatch(setFilter(e.target.value))
    );

    return (
        <label className = {styles.label}>
        Find contacts by name
        <input
            type="text"
            value={value}
            onChange={handleChangeFilter}
        />
    </label>
    )
};

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

export default Filter;