import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/LoginPage/Loginpage";
import Sidenav from "./Components/Sidenav";
import DealerSignup from "./Pages/DealerSignup/DealerSignup";
import DocCenter from "./Pages/DocCenter/DocCenter";
import PendingItems from "./Pages/PendingItems/PendingItems";
import DealerWarrenty from "./Pages/DealerWarrenty/DealerWarrenty";
import Reporting from "./Pages/Reporting/Reporting";
import MyAgents from "./Pages/MyAgents";
import MyDealers from "./Pages/MyDealers";
import DealerAgreement from "./Pages/DealerSignup/DealerAgreement";
import Dealerw from "./Pages/DealerSignup/Dealerw-9";
import DealerSetup from "./Pages/DealerSignup/DealerSetup";
import DealerAddendum from "./Pages/DealerSignup/DealerAddendum";
import AffiliateFeeForms from "./Pages/DealerSignup/AffiliateFeeForms";
import CreateQuote from "./Pages/DealerWarrenty/CreateQuote";
import PendingQuotes from "./Pages/DealerWarrenty/PendingQuotes";
import CreateWarrenty from "./Pages/DealerWarrenty/CreateWarrenty";
import PendingWarrenties from "./Pages/DealerWarrenty/PendingWarrenties";
import DealerAgreements from "./Pages/PendingItems/DealerAgreements";
import WarrantyDrafts from "./Pages/PendingItems/WarrantyDrafts";
import DealerDocPDF from "./Pages/DocCenter/DealerDocPDF";
import FillableDocuments from "./Pages/DocCenter/FillableDocuments";
import SampleContracts from "./Pages/DocCenter/SampleContracts";
import Brochures from "./Pages/DocCenter/Brochures";
import Finance from "./Pages/Reporting/Finance";
import Claims from "./Pages/Reporting/Claims";
import VitalTrendsNews from "./Pages/Reporting/VitalTrendsNews";
import SalesContracts from "./Pages/Reporting/SalesContracts";
import QuoteReport from "./Pages/Reporting/QuoteReport";
import { Grid } from "@mui/material";

function App() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={2} xs={12}>
          <Sidenav />
        </Grid>

        <Grid item md={10} xs={12}>
          <Routes>
            <Route path="/" index element={<LoginPage />} />
            <Route path="/DealerSignup" element={<DealerSignup />} />
            <Route path="/DealerAgreement" element={<DealerAgreement />} />
            <Route path="/Dealerw" element={<Dealerw />} />
            <Route path="/DealerSetup" element={<DealerSetup />} />
            <Route path="/DealerAddendum" element={<DealerAddendum />} />
            <Route path="/AffiliateFeeForms" element={<AffiliateFeeForms />} />
            <Route path="/Warrenty" element={<DealerWarrenty />} />
            <Route path="/CreateQuote" element={<CreateQuote />} />
            <Route path="/PendingQuotes" element={<PendingQuotes />} />
            <Route path="/CreateWarrenty" element={<CreateWarrenty />} />
            <Route path="/PendingWarrenties" element={<PendingWarrenties />} />
            <Route path="/Docs" element={<DocCenter />} />
            <Route path="/DealerDocPDF" element={<DealerDocPDF />} />
            <Route path="/FillableDocuments" element={<FillableDocuments />} />
            <Route path="/SampleContracts" element={<SampleContracts />} />
            <Route path="/Brochures" element={<Brochures />} />
            <Route path="/Items" element={<PendingItems />} />
            <Route path="/DealerAgreements" element={<DealerAgreements />} />
            <Route path="/WarrantyDrafts" element={<WarrantyDrafts />} />
            <Route path="/Reporting" element={<Reporting />} />
            <Route path="/Finance" element={<Finance />} />
            <Route path="/Claims" element={<Claims />} />
            <Route path="/VitalTrendsNews" element={<VitalTrendsNews />} />
            <Route path="/SalesContracts" element={<SalesContracts />} />
            <Route path="/QuoteReport" element={<QuoteReport />} />
            <Route path="/Agents" element={<MyAgents />} />
            <Route path="/MyDealers" element={<MyDealers />} />
          </Routes>
        </Grid>
      </Grid>
      {/* <Grid>
      </Grid> */}
    </div>
  );
}

export default App;