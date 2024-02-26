import React from "react";
import styles from "./sidenav.module.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { navData } from "../lib/navData";
import { useState } from "react";


export default function Sidenav() {
  const [open, setopen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();

  const toggleOpen = () => {
    setopen(!open);
    setDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
console.log(location.pathname,"location.pathname");
  const isDealerSignupActive = location.pathname.startsWith("/DealerSignup");
  const isDealerWarrentyActive = location.pathname.startsWith("/Warrenty");
  const isPendingItemsActive = location.pathname.startsWith("/Items");
  const isDocCenterActive = location.pathname.startsWith("/Docs");
  const isReportingActive = location.pathname.startsWith("/Reporting");
  console.log(isDealerSignupActive,"isDealerSignupActive");
  return (
    <div className={open ? styles.sidenav : styles.sidenavClosed}>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
      </button>
      {navData.map((item) => (
        <React.Fragment key={item.id}>
          {item.link === "/DealerSignup" && (
            <>
              <NavLink
                className={styles.sideitem}
                to={item.link}
                onClick={toggleOpen}
              >
                {item.icon}
                <span className={styles.linkText}>{item.text}</span>
              </NavLink>
              {isDealerSignupActive && (
                <div className={styles.subLinks}>
                  <NavLink
                    className={styles.subitem}
                    to="/DealerAgreement"
                    onClick={toggleOpen}
                  >
                    Dealer Agreement
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/Dealerw"
                    // onClick={(e) => {
                    //   e.stopPropagation();
                    //   setDropdownOpen(!dropdownOpen);
                    // }}
                  >
                    Dealer W-9
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/DealerSetup"
                  // onClick={toggleOpen}
                  >
                    Dealer Setup
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/DealerAddendum"
                  // onClick={toggleOpen}
                  >
                    Dealer Addendum
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/AffiliateFeeForms"
                  // onClick={toggleOpen}
                  >
                    Affiliate Fee Forms
                  </NavLink>
                </div>
              )}
            </>
          )}
          {item.link === "/Docs" && (
            <>
              <NavLink
                className={styles.sideitem}
                to={item.link}
                onClick={toggleDropdown}
              >
                {item.icon}
                <span className={styles.linkText}>{item.text}</span>
              </NavLink>
              {isDocCenterActive && (
                <div className={styles.subLinks}>

                  <NavLink
                    className={styles.subitem}
                    to="/DealerDocPDF"
                  // onClick={toggleOpen}
                  >
                    Dealer Doc PDF's
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/FillableDocuments"
                  // onClick={toggleOpen}
                  >
                    Fillable Documents
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/SampleContracts"
                  // onClick={toggleOpen}
                  >
                    Sample Contracts
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/Brochures"
                  // onClick={toggleOpen}
                  >
                    Brochures
                  </NavLink>
                </div>
              )}
            </>
          )}
          {item.link === "/Warrenty" && (
            <>
              <NavLink
                className={styles.sideitem}
                to={item.link}
                onClick={toggleDropdown}
              >
                {item.icon}
                <span className={styles.linkText}>{item.text}</span>
              </NavLink>
              {isDealerWarrentyActive && (
                <div className={styles.subLinks}>

                  <NavLink
                    className={styles.subitem}
                    to="/CreateQuote"

                  >
                    Create Quote
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/PendingQuotes"

                  >
                    Pending Quote
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/CreateWarrenty"

                  >
                    Create Warrenty
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/PendingWarrenties"

                  >
                    Pending Warrenties
                  </NavLink>
                </div>
              )}
            </>
          )}
          {item.link === "/Items" && (
            <>
              <NavLink
                className={styles.sideitem}
                to={item.link}
                onClick={toggleDropdown}
              >
                {item.icon}
                <span className={styles.linkText}>{item.text}</span>
              </NavLink>
              {isPendingItemsActive && (
                <div className={styles.subLinks}>
                  {/* Add your Dealer Warrenty dropdown items here */}
                  <NavLink
                    className={styles.subitem}
                    to="/DealerAgreements"

                  >
                    Dealer Agreements
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/WarrantyDrafts"

                  >
                    WarrantyDrafts
                  </NavLink>
                </div>
              )}
            </>
          )}
          {item.link === "/Reporting" && (
            <>
              <NavLink
                className={styles.sideitem}
                to={item.link}
                onClick={toggleDropdown}
              >
                {item.icon}
                <span className={styles.linkText}>{item.text}</span>
              </NavLink>
              { isReportingActive && (
                <div className={styles.subLinks}>

                  <NavLink
                    className={styles.subitem}
                    to="/Finance"

                  >
                    Finance
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/Claims"

                  >
                    Claims
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/VitalTrendsNews"

                  >
                    Vital Trends News
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/SalesContracts"

                  >
                    Sales & Contracts
                  </NavLink>
                  <NavLink
                    className={styles.subitem}
                    to="/QuoteReport"

                  >
                    Quote Report
                  </NavLink>
                </div>
              )}
            </>
          )}
          {item.link !== "/DealerSignup" && item.link !== "/Warrenty" && item.link !== "/Docs" && item.link !== "/Items" && item.link !== "/Reporting" && (
            <NavLink
              className={styles.sideitem}
              to={item.link}
              onClick={toggleOpen}
            >
              {item.icon}
              <span className={styles.linkText}>{item.text}</span>
            </NavLink>
          )}
        </React.Fragment>

      ))}
      <Outlet />
    </div>
  );
}
