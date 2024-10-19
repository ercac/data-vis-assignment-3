import React, { Component } from "react";
import * as d3 from "d3";

class Child1 extends Component {
  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  renderChart() {
    const margin = { top: 50, right: 10, bottom: 50, left: 50 },
      w = 500 - margin.left - margin.right,
      h = 300 - margin.top - margin.bottom;

    const data = this.props.data;

    const svg = d3.select(".child1_svg");

    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.total_bill)])
      .range([0, w]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.tip)])
      .range([h, 0]);

    const g = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

    g.append("g")
      .attr("transform", `translate(0, ${h})`)
      .call(d3.axisBottom(xScale));

    g.append("g")
      .call(d3.axisLeft(yScale));

    g.selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", d => xScale(d.total_bill))
      .attr("cy", d => yScale(d.tip))
      .attr("r", 3)
      .attr("fill", "#69b3a2");

    g.append("text")
      .attr("x", w / 2)
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .attr("font-weight", 750)
      .text("Total Bill vs Tips");

    g.append("text")
      .attr("x", w / 2)
      .attr("y", h + 45)
      .attr("text-anchor", "middle")
      .text("Total Bill");

    g.append("text")
      .attr("x", -h / 2)
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Tips");
  }

  render() {
    return <svg className="child1_svg"></svg>;
  }
}

export default Child1;
