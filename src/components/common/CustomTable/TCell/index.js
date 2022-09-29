import React, { Component } from 'react';
import "./index.css";
import Radio from '@tds/core-radio';
import ReactTooltip from "react-tooltip";

class TCell extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        let { columns, data, rowActions } = this.props;
return (<React.Fragment>
            <tr className="tcell">
                {columns && columns.map((columnsX) => {
                    if (columnsX.dataKey === "actions") {
                        return (<td className="tcolumns" style={{ width: columnsX.width }}>
                            {rowActions && rowActions.actionList.map((actionListX, actionListXIndex) => {
                                return <>
                                    <span
                                        onClick={() => rowActions.handleRowActions(actionListX.value, data)}
                                        className="action-icon pointer"
                                        data-tip
                                        data-for={actionListX.value + actionListXIndex}
                                    ><img src={actionListX.icon} alt="" />
                                        <ReactTooltip place="left" id={actionListX.value + actionListXIndex} effect="solid">
                                            <span>{actionListX.label}</span>
                                        </ReactTooltip>
                                    </span>
                                </>
                            })}
                        </td>)
                    } else if (columnsX.dataKey === "index") {
                        return (<td className="tcolumns" style={{ width: columnsX.width }}>
                            <span className="tcell">{data[columnsX.dataKey] + 1}</span>
                        </td>)
                    } else if (columnsX.dataKey === "html") {
                        return (data[columnsX.htmlWrapper])
                    } else if (columnsX.dataKey === "radio") {
                        return (<td className="tcolumns" style={{ width: columnsX.width }}>
                            <span className="tcell">
                                <Radio
                                    label=" "
                                    name={data.title || ""}
                                    value={data.title || ""}
                                    checked={data.selected}
                                    onClick={() => rowActions.handleRowActions("radio", data)}
                                />

                            </span>
                        </td>)
                    }
                    else if (columnsX.dataKey === "activityStatus"){
                        return (<td className="tcolumns" style={{ width: columnsX.width }}>
                            {
                                (data[columnsX.dataKey] < 400 && data[columnsX.dataKey] > 199) ? 
                                <div className="tcell status success">{data[columnsX.dataKey]}</div>:
                                <div className="tcell status error">{data[columnsX.dataKey]}</div>
                            }

                        </td>)
                    }
                    else {
                        return (<td className="tcolumns" style={{ width: columnsX.width }}>
                            {columnsX.dataKey == 'url' ? 
                            <a className="tcell drive-link" href={data[columnsX.dataKey]}>{data[columnsX.dataKey]}</a> : 
                            <span className="tcell">{data[columnsX.dataKey]}</span>
                            }

                        </td>)
                    }
                })}
            </tr>
        </React.Fragment>
        )
    }
}

TCell.propTypes = {

};

export default TCell;