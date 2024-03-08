import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PartnersData from "./components/PartnersData/PartnersData";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { DataProvider } from "./components/PartnersData/DataProvider";
import TotalRecords from "./components/Table/TotalRecords";
import Sidebar from "./components/Sidebar/Sidebar";

export const App = () => {
  return (
    <>
      <div
        id="app"
        className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-100 text-gray-900"
      >
        <Header title="Radius Event Planner" />
        <div className="grid grid-cols-1 sm:grid-cols-4">
          <Sidebar />
          <div className="col-span-1 sm:col-span-3 p-4 h-[500px] sm:h-auto overflow-y-auto">
            <h1 className="text-xl font-semibold mb-4">Partners Data</h1>
            <div className="overflow-x-auto">
              <DataProvider>
                <PartnersData />
                <TotalRecords />
              </DataProvider>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default App;
