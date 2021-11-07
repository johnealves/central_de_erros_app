import React, { useEffect, useState } from "react";
import { Area, AreaChart, Legend, Pie, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Cell } from "recharts";
import events from "../mockrequest/events.json";
import "../Css/dashboard.css";

const Infografics = () => {
  const [errorRegister, setErrorRegister] = useState([])
  const [data, setData] = useState([]);

  const handleData = () => {
    let localhost = 0
    let server = 0
    let app = 0
    events.forEach((value) => {
      if (value.origem === "127.0.0.1") {
        localhost += parseInt(value.quantity)
      } else if (value.origem === "server.com.br") {
        server += parseInt(value.quantity)
      } else if (value.origem === "Application") {
        app += parseInt(value.quantity)
      }
    })

    setData([
      { name: "127.0.0.1", value: localhost },
      { name: "server.com.br", value: server },
      { name: "Application", value: app }
    ])
  } 

  useEffect(() => {
    setErrorRegister(events)
    handleData()
    // eslint-disable-next-line
  }, [])

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return(
    <div className="graphics-container">
      <section>
        <h3>Quantidade</h3>
        <ResponsiveContainer width={600} height={300} className="responsive-container">
          <AreaChart data={errorRegister}
            margin={{ top: 30, right: 20, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="id" height={100}/>
            <YAxis dataKey="quantity" />
            {/* <CartesianGrid strokeDasharray="5 5" /> */}
            <Tooltip />
            <Legend verticalAlign="top" height={100}/>
            <Area type="monotone" dataKey="quantity" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            {/* <Area type="monotone" dataKey="id" stroke="" fillOpacity={1} fill="url(#colorPv)"/> */}
          </AreaChart>
        </ResponsiveContainer>
      </section>
      <section>
        <h3>Origem</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
        {/* <PieChart width={730} height={300}>
          <Pie 
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart> */}
      </section>
    </div>
  )
}

export default Infografics;
