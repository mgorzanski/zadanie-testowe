import * as React from 'react';
import { TabPanel } from 'react-tabs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { year: '2016', op: 3.329, sr: 30.904 },
  { year: '2017', op: 5.396, sr: 35.808	},
  { year: '2018', op: 2.616, sr: 39.687 },
  { year: '2019', op: -8.586, sr: 38.622 },
  { year: '2020', op: 0.129, sr: 48.770 },
];

class Chart extends React.Component {
  static tabsRole = 'TabPanel';

  render() {
    return (
      <TabPanel className="company-results-tabs__tab-panel" selectedClassName="company-results-tabs__tab-panel--active" {...this.props}>
        <h3 className="company-results-tabs__tab-panel-title">Wykres</h3>

        <div className="company-results-chart">
          <ResponsiveContainer width="100%" height={438}>
            <BarChart
              width={770}
              height={438}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              barGap={0}
              barSize={50}
            >
              <CartesianGrid vertical={false}  />
              <XAxis dataKey="year" tickSize={0} tick={{ fontSize: '14px', fontWeight: 600, lineHeight: '17px', fill: '#C9C9C9' }} tickMargin={10} />
              <YAxis height={50} tickCount={7} tick={{ fontSize: '12px', fontWeight: 600, lineHeight: '15px', fill: '#C9C9C9' }} tickMargin={14} tickFormatter={tickItem => (tickItem < 10 ? '' : tickItem)} tickSize={0} />
              <Legend verticalAlign="top" height={80} content={({ payload }) => (
                <ul className="company-results-chart__legend">
                  {
                    payload.map((entry, index) => (
                      <li key={`item-${index}`} className="company-results-chart__legend-item">
                        <div className="company-results-chart__legend-item-color" style={{ backgroundColor: entry.color }} />
                        <span className="company-results-chart__legend-item-name">{entry.value}</span>
                      </li>
                    ))
                  }
                </ul>
              )} />
              <Bar name="Zysk operacyjny (mln PLN)" dataKey="op" fill="#7A231D" />
              <Bar name="Przychody ze sprzedaży netto (mln PLN)" dataKey="sr" fill="#B5332D" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </TabPanel>
    );
  }
}

export default Chart;
