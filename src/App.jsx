import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddUser from "./Components/Project-1/AddProduct";
import ShowUser from "./Components/Project-1/ShowProduct";
import { Provider } from "react-redux";
import { store } from "./Components/Store/store";
import DataTable from "./Components/Project-2/DataTable";
import DataTableApi from "./Components/Project-3/DataTableApi";
import EmployeeForm from "./Components/Project-4/EmployeeForm";
import Context from "./Components/Project-4/Context/Context";
import UserContext from "./Components/Project-4/PayRole/PayroleContext/PayRoleContext";
import PayRole from "./Components/Project-4/PayRole/PayRole";
import EmployeeFormReducer from "./Components/Project-5/EmployeeFormReducer";
import EmployeeTable from "./Components/Project-5/EmployeeTable";
import store1 from "./Components/Project-5/store1/store1";
import SelectedList from "./Components/Project-2/SelectedList";
import Mapping from "./Mapping";
import ChartJsHome from "./Components/Project-6/ChartJsHome";
import LineChart1 from "./Components/Project-6/LineChart1";
import LineChart2 from "./Components/Project-6/LineChart2";
import LineChartHome from "./Components/Project-6/LineChartHome";
import BarChartHome from "./Components/Project-6/BarChartHome";
import BarChart1 from "./Components/Project-6/BarChart1";
import BarChart2 from "./Components/Project-6/BarChart2";
import MainPage from "./Components/Project-7/Components/MainPage";
import ReactStrapMain from "./Components/Project-8/reactStrapMain";
import GinDocument from "./Components/Project-9/GinDocument";
import BarCode from "./Components/Project-10/BarCode";
import Rake from "./Components/Project-11/Rake";
import IssueDocument from "./Components/Project-12/IssueDocument";
import QcMain from "./Components/Project-13/QcMain";
import QcSummery from "./Components/Project-13/QcSummery";
import QcDetail from "./Components/Project-13/QcDetail";
import AssignRoles from "./Components/Project-14/AssignRoles";
import LaboratoryReport from "./Components/Project-15/LaboratoryReport";

import DatePicker from "./Components/Project-16/DatePicker";
function App() {
  return (
    <>
      <Provider store={store}>
        <Context>
          <UserContext>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project-1" element={<AddUser />} />
                <Route path="/showUser" element={<ShowUser />} />
                <Route path="/project-2" element={<DataTable />} />
                <Route path="/project-3" element={<DataTableApi />} />
                <Route path="/project-4" element={<EmployeeForm />} />
                <Route path="/payRole" element={<PayRole />} />
                <Route path="/selectedLists" element={<SelectedList />} />
                <Route path="/mapping" element={<Mapping />} />
                <Route path="/charts" element={<ChartJsHome />} />
                <Route path="/linechart1" element={<LineChart1 />} />
                <Route path="/barchart1" element={<BarChart1 />} />
                <Route path="/barchart2" element={<BarChart2 />} />
                <Route path="/linechart2" element={<LineChart2 />} />
                <Route path="linechart" element={<LineChartHome />} />
                <Route path="barchart" element={<BarChartHome />} />
                <Route path="/mainPage" element={<MainPage />} />
                <Route path="/project-9" element={<ReactStrapMain />} />
                <Route path="/project-10" element={<GinDocument />} />
                <Route path="/project-11" element={<BarCode />} />
                <Route path="/project-12" element={<Rake />} />
                <Route path="/project-13" element={<IssueDocument />} />
                <Route path="/project-14" element={<QcMain />} />{" "}
                <Route path="/project-15" element={<AssignRoles />} />{" "}
                <Route path="/qc_summery" element={<QcSummery />} />
                <Route path="/qc_detail" element={<QcDetail />} />
                <Route path="/project-16" element={<LaboratoryReport />} />{" "}
                <Route path="/project-17" element={<DatePicker />} />{" "}
              </Routes>
              <Provider store={store1}>
                <Routes>
                  <Route path="/project-5" element={<EmployeeFormReducer />} />
                  <Route path="/view_employee" element={<EmployeeTable />} />
                </Routes>
              </Provider>
            </BrowserRouter>
          </UserContext>
        </Context>
      </Provider>
    </>
  );
}

export default App;
