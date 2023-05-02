import { useD3 } from './hooks/useD3';;
import * as d3 from 'd3';
import { useLocation } from 'react-router-dom';

function BarChart(props: any) {
  const { state } = useLocation();
  const ref = useD3(
    (svg: any) => {
      const height = 400;
      const width = 300;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(props.data.map((d: any) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = (d3 as any)
        .scaleLinear()
        .domain([0, d3.max(props.data, (d: any) => d.population)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g: any) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`)
        .style("color", "grey")
        .call(
          d3
            .axisBottom(x)
            .tickValues(
                (d3 as any)
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v: any) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g: any) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "grey")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g: any) => g.select(".domain").remove())
          .call((g: any) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(props.data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
        .attr("fill", state.param.fill)
        .selectAll(".bar")
        .data(props.data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d: any) => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", (d: any) => y1(d.population))
        .attr("height", (d: any) => y1(0) - y1(d.population));
    },
    [props.data.length]
  );

  return (
    <svg
      ref={(ref as any)}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default BarChart;