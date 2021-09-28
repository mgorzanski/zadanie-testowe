import * as React from 'react';
import { Tabs, TabList, Tab } from 'react-tabs';

import Reports from './Reports';
import Table from './Table';
import Chart from './Chart';

const TabIcon = () => (
  <svg className="company-results-tabs__tab-icon" role="presentation" width={67} height={67} viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M33.5 2C23.5715 2 14.9379 6.69758 9.18739 13.9286H16.4762C17.0285 13.9286 17.4762 14.3763 17.4762 14.9286C17.4762 15.4809 17.0285 15.9286 16.4762 15.9286H7.19049C6.63821 15.9286 6.19049 15.4809 6.19049 14.9286V5.64286C6.19049 5.09057 6.63821 4.64286 7.19049 4.64286C7.74278 4.64286 8.19049 5.09057 8.19049 5.64286V11.9875C14.2824 4.71621 23.2314 0 33.5 0C52.0047 0 67 14.9953 67 33.5C67 52.0047 52.0047 67 33.5 67C14.9953 67 0 52.0047 0 33.5C0 30.3063 0.478791 27.125 1.27102 24.1146C1.41157 23.5805 1.95849 23.2614 2.49259 23.402C3.02669 23.5425 3.34572 24.0894 3.20517 24.6235C2.44978 27.494 2 30.5032 2 33.5C2 50.9001 16.0999 65 33.5 65C50.9001 65 65 50.9001 65 33.5C65 16.0999 50.9001 2 33.5 2ZM28.8113 17.799C28.916 17.3452 29.32 17.0238 29.7857 17.0238H37.2142C37.6664 17.0238 38.0623 17.3272 38.1799 17.7638L39.1385 21.3244C39.9297 21.6803 40.6828 22.0751 41.4324 22.6311L44.6361 21.5632C45.0883 21.4125 45.5841 21.6019 45.8206 22.0158L49.5348 28.5157C49.7636 28.916 49.689 29.4208 49.3543 29.7378L46.8128 32.1456C46.881 32.6187 46.8809 33.0347 46.8809 33.4696V34.8039L49.3926 37.4551C49.6958 37.7752 49.7536 38.2561 49.5348 38.639L45.8206 45.1389C45.5863 45.5489 45.0972 45.7391 44.6475 45.5952L41.2366 44.5037C40.5555 44.9541 39.824 45.4183 39.0063 45.8124L38.1886 49.3558C38.0839 49.8095 37.6799 50.1309 37.2142 50.1309H29.7857C29.32 50.1309 28.916 49.8095 28.8113 49.3558L27.9956 45.821C27.2097 45.4665 26.4611 45.0725 25.7159 44.5189L22.3524 45.5952C21.9027 45.7391 21.4136 45.5489 21.1794 45.1389L17.4651 38.639C17.2413 38.2474 17.3073 37.7546 17.6262 37.4357L20.1927 34.8692C20.1189 34.344 20.119 33.8638 20.119 33.528L20.119 33.5C20.119 33.2134 20.1617 32.8974 20.1955 32.647C20.1988 32.6222 20.2021 32.5981 20.2052 32.5747C20.2226 32.4437 20.2382 32.3215 20.2501 32.2053L17.6456 29.7378C17.3109 29.4208 17.2363 28.916 17.4651 28.5157L21.1794 22.0158C21.4136 21.6058 21.9027 21.4156 22.3524 21.5595L25.7634 22.651C26.4444 22.2006 27.1759 21.7364 27.9936 21.3423L28.8113 17.799ZM30.5812 19.0238L29.8315 22.2725C29.7598 22.5832 29.5442 22.8411 29.251 22.9668C28.265 23.3893 27.4098 23.9564 26.4713 24.582C26.2181 24.7509 25.9017 24.7952 25.6119 24.7024L22.5141 23.7111L19.5912 28.8261L21.9615 31.0716C22.1609 31.2605 22.2738 31.523 22.2738 31.7976C22.2738 32.1814 22.226 32.5512 22.1876 32.839L22.1852 32.8574C22.1439 33.1667 22.119 33.3534 22.119 33.5C22.119 33.9746 22.1231 34.4764 22.2439 34.9598C22.3291 35.3006 22.2293 35.6611 21.9809 35.9095L19.5805 38.3098L22.5141 43.4436L25.6119 42.4523C25.9376 42.348 26.2941 42.4175 26.5568 42.6365C27.3758 43.319 28.2014 43.7381 29.251 44.1879C29.5442 44.3136 29.7598 44.5715 29.8315 44.8822L30.5812 48.1309H36.4187L37.1684 44.8822C37.2401 44.5715 37.4558 44.3136 37.7489 44.1879C38.7349 43.7654 39.5901 43.1983 40.5286 42.5727C40.7818 42.4038 41.0982 42.3595 41.3881 42.4523L44.4858 43.4436L47.4299 38.2915L45.1549 35.8901C44.979 35.7043 44.8809 35.4582 44.8809 35.2024V33.5C44.8809 32.8797 44.8777 32.527 44.756 32.0401C44.6685 31.69 44.7764 31.3199 45.0384 31.0716L47.4087 28.8261L44.4908 23.7198L41.5543 24.6987C41.2257 24.8082 40.8639 24.7399 40.5979 24.5182C39.7789 23.8357 38.9533 23.4166 37.9036 22.9668C37.6222 22.8461 37.4116 22.6032 37.332 22.3076L36.4479 19.0238H30.5812ZM33.5 29.8572C31.4881 29.8572 29.8572 31.4882 29.8572 33.5C29.8572 35.5119 31.4881 37.1429 33.5 37.1429C35.5119 37.1429 37.1429 35.5119 37.1429 33.5C37.1429 31.4882 35.5119 29.8572 33.5 29.8572ZM27.8572 33.5C27.8572 30.3836 30.3836 27.8572 33.5 27.8572C36.6165 27.8572 39.1429 30.3836 39.1429 33.5C39.1429 36.6165 36.6165 39.1429 33.5 39.1429C30.3836 39.1429 27.8572 36.6165 27.8572 33.5Z" />
  </svg>
);

class CompanyResults extends React.Component {
  render() {
    return (
      <section id="wyniki-firmy" className="section company-results">
        <h2 className="section__title company-results__title">Wyniki firmy</h2>

        <Tabs>
          <TabList className="company-results-tabs__tab-list" {...this.props}>
            <Tab className="company-results-tabs__tab" selectedClassName="company-results-tabs__tab--selected">
              <div className="company-results-tabs__tab-wrapper">
                <TabIcon />
                <span className="company-results-tabs__tab-name">Raporty główne</span>
              </div>
            </Tab>
            <Tab className="company-results-tabs__tab" selectedClassName="company-results-tabs__tab--selected">
              <div className="company-results-tabs__tab-wrapper">
                <TabIcon />
                <span className="company-results-tabs__tab-name">Tabela</span>
              </div>
            </Tab>
            <Tab className="company-results-tabs__tab" selectedClassName="company-results-tabs__tab--selected">
              <div className="company-results-tabs__tab-wrapper">
                <TabIcon />
                <span className="company-results-tabs__tab-name">Wykres</span>
              </div>
            </Tab>
          </TabList>

          <Reports />
          <Table />
          <Chart />
        </Tabs>
      </section>
    );
  }
};

export default CompanyResults;
