import "./styles.css";
import data from "./data.js"; 
import { useState } from "react";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(id) {
        setSelected(id);
    }

    function handleMultiSelection(id) {
        let cpyMultiple = [...multiple];
        const findIndexofCurrentId = cpyMultiple.indexOf(id);

        if (findIndexofCurrentId === -1) cpyMultiple.push(id);
        else cpyMultiple.splice(findIndexofCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    function collapseAll() {
        setSelected(null);
        setMultiple([]);
    }

    console.log("Selected:", selected, "Multiple:", multiple);

    return (
        <div className="wrapper">
            <button
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}
                style={{ backgroundColor: enableMultiSelection ? "green" : "red" }}
            >
                Enable Multiselect
            </button>
            <div className="accordian">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div className="title">
                                <h3>{dataItem.question}</h3>
                            </div>
                            <span
                                className="button"
                                onClick={() =>
                                    enableMultiSelection
                                        ? handleMultiSelection(dataItem.id)
                                        : handleSingleSelection(dataItem.id)
                                }
                            >
                                +
                            </span>
                            {enableMultiSelection ? (
                                multiple.includes(dataItem.id) ? (
                                    <div className="content">{dataItem.answer}</div>
                                ) : null
                            ) : selected === dataItem.id ? (
                                <div className="content">{dataItem.answer}</div>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
                <button className="button" onClick={collapseAll}>
                    Collapse All
                </button>
            </div>
        </div>
    );
}
