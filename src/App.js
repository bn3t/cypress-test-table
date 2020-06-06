import React from "react";

import { Table } from "antd";

const columns = [
  {
    width: 150,
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

export default class App extends React.Component {
  state = { data: [], loading: true, scrollX: true };

  componentDidMount() {
    if (window.location.pathname.match(/no-scroll-x/)) {
      this.setState({ scrollX: false });
    }
    setTimeout(() => {
      const data = [];
      for (let i = 0; i < 46; i++) {
        data.push({
          key: i,
          name: `Edward King ${i}`,
          age: 32,
          address: `London, Park Lane no. ${i}`,
        });
      }
      this.setState({ data, loading: false });
    }, 2000);
  }

  render() {
    let scroll = undefined;
    if (this.state.scrollX) {
      scroll = { x: true };
    }
    console.log("scroll", scroll);
    return (
      <div style={{ padding: 40 }}>
        <h1>Table test</h1>
        <Table
          loading={this.state.loading}
          bordered
          size="small"
          scroll={scroll}
          columns={columns}
          dataSource={this.state.data}
          pagination={{
            pageSize: 5,
            hideOnSinglePage: true,
          }}
        />
      </div>
    );
  }
}
