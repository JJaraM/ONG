import * as React from 'react';

import "../styles/table.scss";
import TableRow from "./TableRow";

interface Props {
  title: string;
  headers: Array<String>;
  rows: Array<TableRow>;
  footer?: any;
}

export class Table extends React.Component<Props, any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div className="card m-b-30">
        <div className="card-header">
          <h5 className="m-b-0 title">
              {this.props.title}
          </h5>
        </div>

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
              {
                this.props.headers.map((header, index) => {
                  return (
                    <th key={index}>{header}</th>
                  )
                })
              }
              </tr>
            </thead>
            <tbody>
            {
              this.props.rows.map((row, rowIndex) => {
                let rowId = 0;

                return (
                  <tr key={rowIndex}>
                    {
                      row.columns.map((column, columnIndex) => {

                        if (column.type === 'id') {
                          rowId = column.value;
                          return;
                        }
                        return (
                            <td key={columnIndex} className="align-middle">
                            {
                              (() => {
                                if (column.type === 'badge') {
                                  return (
                                    <span className={column.className}>
                                      {column.value}
                                    </span>
                                  )
                                }
                                if (column.type === 'button') {
                                  return (
                                    <button className="btn btn-primary btn-sm btn-lettuce" onClick={() => column.action(rowId) } >
                                      {column.value}
                                    </button>
                                  )
                                }
                                if (column.type === 'avatar') {
                                  return (
                                    <>
                                      <div className="avatar avatar-sm avatar-online">
                                        <img src={column.typeExtra} className="avatar-img avatar-sm rounded-circle" alt="user-image" />
                                      </div>
                                      <span className="ml-2">{column.value}</span>
                                    </>
                                  )
                                }
                                return (
                                  column.value
                                )
                              })()
                            }
                            </td>
                        )
                      })
                    }
                  </tr>
                  )
              })
            }
            </tbody>
          </table>
        </div>

        <div className="card-footer">
          {this.props.footer}
        </div>
      </div>
    )
  }
}
