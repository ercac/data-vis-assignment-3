import React, { Component } from "react";
import * as d3 from "d3";

class Child2 extends Component {
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


    const svg = d3.select(".child2_svg");

    const averageTips = d3.rollup(
      data,
      v => d3.mean(v, d => d.tip),
      d => d.day
    );

    const days = Array.from(averageTips.keys());
    const avgTipValues = Array.from(averageTips.values());

    const xScale = d3.scaleBand()
      .domain(days)
      .range([0, w])
      .padding(0.2);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(avgTipValues)])
      .range([h, 0]);

    const g = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

    g.append("g")
      .attr("transform", `translate(0, ${h})`)
      .call(d3.axisBottom(xScale));

    g.append("g")
      .call(d3.axisLeft(yScale));

    g.selectAll("rect")
      .data(days)
      .join("rect")
      .attr("x", d => xScale(d))
      .attr("y", d => yScale(averageTips.get(d)))
      .attr("width", xScale.bandwidth())
      .attr("height", d => h - yScale(averageTips.get(d)))
      .attr("fill", "#69b3a2");

    g.append("text")
      .attr("x", w / 2)
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .attr("font-weight", 750)
      .text("Average Tip by Day");

    g.append("text")
      .attr("x", w / 2)
      .attr("y", h + 45)
      .attr("text-anchor", "middle")
      .text("Day");

    g.append("text")
      .attr("x", -h / 2)
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .text("Average Tip");
  }

  render() {
    return <svg className="child2_svg"></svg>;
  }
}

export default Child2;
