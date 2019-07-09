import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./dashboard.css";
import SideBar from './SideBar';
class InvoiceSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
          invoices: [],
          isLoading: true,
          startDate: new Date(),
          endDate: new Date(),
          focused: false
        };

        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(date) {
      console.log("changing start :" + date);
      this.setState({
        startDate: date
      });
    }

    handleChangeEnd(date) {
      this.setState({
        endDate: date
      });
    }

    componentDidMount() {
        this.setState({isLoading: true});

        const invoiceList = [
          {
            id: 1,
            date: '05/05/2019',
            customer: {
              id: 1,
              name: "Customer name"
            }
          },
          {
            id: 2,
            date: '07/05/2019',
            customer: {
              id: 1,
              name: "Another Customer name"
            }
          },
          {
            id: 3,
            date: '09/05/2019',
            customer: {
              id: 1,
              name: "Customer name"
            }
          }
        ];

        this.setState({invoices: invoiceList, isLoading: false});
        // fetch('http://localhost:8080/invoices')
        //     .then(response => response.json())
        //     .then(data => this.setState({invoices: data, isLoading: false}));
    }

    render() {
        const {invoices, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const invoiceList = invoices.map(invoice => {
            return <tr key={invoice.id}>
            <td>
                <input type="checkbox" id = "chckHead" />
            </td>
                <td style={{whiteSpace: 'nowrap'}}>{invoice.date}</td>
                <td style={{whiteSpace: 'nowrap'}} >{invoice.customer.name}</td>
            </tr>
        });

        return (


          <div class="container-fluid">
            <div class="row">
              <SideBar/>

              <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <h1 class="h2">Invoices</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group mr-2">
                      <button class="btn btn-sm btn-outline-secondary">Print</button>
                      <button class="btn btn-sm btn-outline-secondary">Export as PDF</button>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <input class="form-control form-control-dark w-50" type="text" placeholder="Search" aria-label="Search"/>
                  <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="mr-2">
                      <DatePicker
                          selected={this.state.startDate}
                          selectsStart
                          startDate={this.state.startDate}
                          endDate={this.state.endDate}
                          onChange={this.handleChangeStart}
                      />
                    </div>
                    <div class="mr-2">
                      <DatePicker
                          selected={this.state.endDate}
                          selectsEnd
                          startDate={this.state.startDate}
                          endDate={this.state.endDate}
                          onChange={this.handleChangeEnd}
                          minDate={this.state.startDate}
                      />
                    </div>
                  </div>
                </div>

                <h2>Section title</h2>
                <div class="table-responsive">
                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Customer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceList}
                    </tbody>
                  </table>
                </div>
              </main>
            </div>
          </div>
        );
    }
}

export default InvoiceSearch;
