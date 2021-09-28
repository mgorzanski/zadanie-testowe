import * as React from 'react';
import { TabPanel } from 'react-tabs';

const ReportIconPDF = () => (
  <svg className="company-results-reports__item-icon" role="presentation" width={73} height={76} viewBox="0 0 73 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M53.8069 0.982807H55.7755V17.6897H53.8069V0.982807ZM53.8069 16.2155H71.5238V18.3448H53.8069V16.2155ZM55.6114 2.78446V17.1983L69.7193 16.7069L55.6114 2.78446ZM64.4698 8.35345L55.2833 0H14.9281V42.2586C15.7483 42.4224 16.5685 42.9138 17.0606 43.569V1.8018H54.2989L62.5012 9.66388L70.2113 17.6897V73.8707H17.2246V50.9397C17.2246 51.1035 16.7325 51.431 16.4044 51.5948C15.9122 51.9224 15.4201 52.0862 14.9279 52.25V76H73V16.8708L64.4696 8.35352L64.4698 8.35345ZM30.5125 45.862C30.0204 45.5345 29.5282 45.2069 28.872 45.043C28.3799 44.8792 27.3956 44.8792 26.0833 44.8792H24.6069V56.3448H27.0675C28.0518 56.3448 28.708 56.181 29.2001 56.0172C29.6922 55.8535 30.1844 55.5258 30.5125 55.1982C30.8405 54.8707 31.1687 54.2155 31.3327 53.5603C31.4968 52.7413 31.6608 51.7586 31.6608 50.4482C31.6608 49.1379 31.4967 48.1551 31.3327 47.5C31.1687 46.8448 31.0047 46.3534 30.5125 45.862ZM54.135 37.6724C54.135 36.5259 53.1508 35.7069 52.0025 35.7069H1.96857C0.820256 35.7069 0 36.5259 0 37.6724V65.3534C0 66.4999 0.820256 67.3189 1.96857 67.3189H52.0025C53.1508 67.3189 54.135 66.4999 54.135 65.3534V37.6724ZM17.7169 49.9569C17.3888 50.612 16.8966 51.2672 16.2405 51.5948C15.5843 51.9223 15.0921 52.4138 14.4359 52.5775C13.6157 52.7413 12.4674 52.9051 10.8269 52.9051H8.85837V58.9654H5.24937V42.2585H10.8269C12.9595 42.2585 14.2719 42.2585 14.9281 42.4223C15.9123 42.7499 16.7326 43.2413 17.3888 44.0602C18.045 44.8792 18.373 46.0258 18.373 47.3361C18.373 48.3188 18.2089 49.1378 17.7168 49.9568L17.7169 49.9569ZM34.7777 54.3792C34.2856 55.6896 33.7934 56.6723 32.9732 57.3275C32.317 57.9827 31.4967 58.3102 30.5125 58.6379C29.6922 58.8017 28.708 58.9654 27.3956 58.9654H20.5057V42.2585H27.3956C28.872 42.2585 29.8563 42.2585 30.6765 42.4223C31.6607 42.7499 32.481 43.2413 33.3012 43.8965C33.9574 44.7155 34.6136 45.5344 34.9417 46.681C35.2697 47.8275 35.4338 49.1379 35.4338 50.612C35.4338 52.0861 35.2697 53.3964 34.7776 54.3792H34.7777ZM50.198 44.8792H41.8316V48.8102H48.8856V51.9223H41.8316V58.9654H38.2226V42.2585H50.198V44.8792ZM12.7956 45.043C12.4675 45.043 11.4832 44.8792 10.3349 44.8792H8.69446V49.6292H10.499C11.8113 49.6292 12.7956 49.6292 13.2877 49.4654C13.7798 49.3016 14.108 48.9741 14.436 48.6464C14.7641 48.3189 14.7641 47.8274 14.7641 47.3361C14.7641 46.6809 14.6 46.1895 14.272 45.8619C13.9439 45.3705 13.4517 45.2067 12.7955 45.0429L12.7956 45.043Z" fill="black" />
  </svg>
);

class Reports extends React.Component {
  static tabsRole = 'TabPanel';

  render() {
    return (
      <TabPanel className="company-results-tabs__tab-panel" selectedClassName="company-results-tabs__tab-panel--active" {...this.props}>
        <h3 className="company-results-tabs__tab-panel-title">Raporty Główne</h3>

        <ul className="company-results-reports">
          <li className="company-results-reports__item">
            <a href="#" className="company-results-reports__item-link">
              <span className="company-results-reports__item-featured-text">Lorem Ipsum</span>
              <ReportIconPDF />
              <h4 className="company-results-reports__item-name">Raport_zadanie testowe_1</h4>
              <p className="company-results-reports__item-description">Przykładowy tekst pod headlinem w sekcji rapory</p>
            </a>
          </li>
          <li className="company-results-reports__item">
            <a href="#" className="company-results-reports__item-link">
              <span className="company-results-reports__item-featured-text">Lorem Ipsum</span>
              <ReportIconPDF />
              <h4 className="company-results-reports__item-name">Raport_zadanie testowe_2</h4>
              <p className="company-results-reports__item-description">Przykładowy tekst pod headlinem w sekcji rapory</p>
            </a>
          </li>
          <li className="company-results-reports__item">
            <a href="#" className="company-results-reports__item-link">
              <span className="company-results-reports__item-featured-text">Lorem Ipsum</span>
              <ReportIconPDF />
              <h4 className="company-results-reports__item-name">Raport_zadanie testowe_3</h4>
              <p className="company-results-reports__item-description">Przykładowy tekst pod headlinem w sekcji rapory</p>
            </a>
          </li>
          <li className="company-results-reports__load-more">
            <button type="button" className="company-results-reports__load-more-btn">
              Więcej
            </button>
          </li>
        </ul>
      </TabPanel>
    );
  }
}

export default Reports;
