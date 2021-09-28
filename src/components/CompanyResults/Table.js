import * as React from 'react';
import { TabPanel } from 'react-tabs';

const TableIconPDF = () => (
  <svg className="company-results-table__icon" role="presentation" width={25} height={26} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.427 0.336223H19.1012V6.05174H18.427V0.336223ZM18.427 5.54742H24.4944V6.27585H18.427V5.54742ZM19.045 0.952577V5.88361L23.8765 5.71552L19.045 0.952577ZM22.0787 2.85776L18.9326 0H5.11235V14.4569C5.39326 14.5129 5.67415 14.681 5.84268 14.9052V0.616405H18.5955L21.4045 3.30606L24.045 6.05174V25.2715H5.89884V17.4267C5.89884 17.4828 5.73031 17.5948 5.61793 17.6509C5.4494 17.7629 5.28086 17.819 5.1123 17.875V26H25V5.77158L22.0786 2.85778L22.0787 2.85776ZM10.4495 15.6896C10.2809 15.5776 10.1124 15.4655 9.88769 15.4095C9.71915 15.3534 9.38206 15.3534 8.93264 15.3534H8.427V19.2758H9.26971C9.60678 19.2758 9.8315 19.2198 10 19.1638C10.1686 19.1078 10.3371 18.9957 10.4495 18.8836C10.5618 18.7715 10.6742 18.5474 10.7304 18.3233C10.7866 18.0431 10.8427 17.7069 10.8427 17.2586C10.8427 16.8103 10.7866 16.4741 10.7304 16.25C10.6742 16.0258 10.618 15.8577 10.4495 15.6896ZM18.5394 12.8879C18.5394 12.4957 18.2023 12.2155 17.8091 12.2155H0.674168C0.28091 12.2155 0 12.4957 0 12.8879V22.3577C0 22.75 0.28091 23.0302 0.674168 23.0302H17.8091C18.2023 23.0302 18.5394 22.75 18.5394 22.3577V12.8879ZM6.06743 17.0905C5.95508 17.3146 5.78652 17.5388 5.5618 17.6508C5.33708 17.7629 5.16854 17.931 4.94382 17.987C4.66291 18.0431 4.26965 18.0991 3.70786 18.0991H3.03369V20.1724H1.79773V14.4569H3.70786C4.43819 14.4569 4.88763 14.4569 5.11235 14.5129C5.44942 14.625 5.73033 14.7931 5.95506 15.0732C6.17978 15.3534 6.29213 15.7457 6.29213 16.1939C6.29213 16.5301 6.23594 16.8103 6.06741 17.0905L6.06743 17.0905ZM11.9102 18.6034C11.7416 19.0517 11.5731 19.3879 11.2922 19.612C11.0675 19.8362 10.7866 19.9482 10.4495 20.0603C10.1686 20.1164 9.8315 20.1724 9.38206 20.1724H7.02251V14.4569H9.38206C9.88769 14.4569 10.2248 14.4569 10.5056 14.5129C10.8427 14.625 11.1236 14.7931 11.4045 15.0172C11.6293 15.2974 11.854 15.5776 11.9663 15.9698C12.0787 16.362 12.1349 16.8103 12.1349 17.3146C12.1349 17.8189 12.0787 18.2672 11.9101 18.6034H11.9102ZM17.1911 15.3534H14.3259V16.6982H16.7416V17.7629H14.3259V20.1724H13.0899V14.4569H17.1911V15.3534ZM4.38205 15.4095C4.2697 15.4095 3.93261 15.3534 3.53935 15.3534H2.97755V16.9784H3.59553C4.04498 16.9784 4.38205 16.9784 4.55059 16.9224C4.71912 16.8663 4.8315 16.7543 4.94384 16.6422C5.05619 16.5301 5.05619 16.362 5.05619 16.1939C5.05619 15.9698 5.00001 15.8017 4.88766 15.6896C4.77531 15.5215 4.60675 15.4655 4.38202 15.4094L4.38205 15.4095Z" />
  </svg>
);

class Table extends React.Component {
  static tabsRole = 'TabPanel';

  render() {
    return (
      <TabPanel className="company-results-tabs__tab-panel" selectedClassName="company-results-tabs__tab-panel--active" {...this.props}>
        <h3 className="company-results-tabs__tab-panel-title">Tabela</h3>

        <div className="company-results-table">
          <table className="company-results-table__inner">
            <thead>
              <tr className="company-results-table__row">
                <th className="company-results-table__heading">okres <br />rozliczeniowy</th>
                <th className="company-results-table__heading">przychody <br />ze sprzedaży</th>
                <th className="company-results-table__heading">zysk <br />operacyjny</th>
                <th className="company-results-table__heading">pliki <br />PDF</th>
              </tr>
            </thead>
            <tbody>
              <tr className="company-results-table__row">
                <td className="company-results-table__cell">2020</td>
                <td className="company-results-table__cell">48 770</td>
                <td className="company-results-table__cell">129</td>
                <td className="company-results-table__cell">
                  <a href="#" className="company-results-table__file-link">
                    <TableIconPDF />
                  </a>
                </td>
              </tr>
              <tr className="company-results-table__row">
                <td className="company-results-table__cell">2019</td>
                <td className="company-results-table__cell">38 622</td>
                <td className="company-results-table__cell">-8586</td>
                <td className="company-results-table__cell">
                  <a href="#" className="company-results-table__file-link">
                    <TableIconPDF />
                  </a>
                </td>
              </tr>
              <tr className="company-results-table__row">
                <td className="company-results-table__cell">2018</td>
                <td className="company-results-table__cell">39 687</td>
                <td className="company-results-table__cell">2616</td>
                <td className="company-results-table__cell">
                  <a href="#" className="company-results-table__file-link">
                    <TableIconPDF />
                  </a>
                </td>
              </tr>
              <tr className="company-results-table__row">
                <td className="company-results-table__cell">2017</td>
                <td className="company-results-table__cell">35 808</td>
                <td className="company-results-table__cell">5396</td>
                <td className="company-results-table__cell">
                  <a href="#" className="company-results-table__file-link">
                    <TableIconPDF />
                  </a>
                </td>
              </tr>
              <tr className="company-results-table__row">
                <td className="company-results-table__cell">2016</td>
                <td className="company-results-table__cell">30 904</td>
                <td className="company-results-table__cell">3329</td>
                <td className="company-results-table__cell">
                  <a href="#" className="company-results-table__file-link">
                    <TableIconPDF />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <span className="company-results-table__note">Wyniki skonsolidowane (w tys. PLN)</span>
        </div>
      </TabPanel>
    );
  }
}

export default Table;
