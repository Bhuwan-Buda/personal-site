import React, { Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";

export const lazyWithReload = (componentImport) =>
  lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.localStorage.getItem("page-has-been-force-refreshed") || "false"
    );
    try {
      const component = await componentImport();
      window.localStorage.setItem("page-has-been-force-refreshed", "false");
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        // Assuming that the user is not on the latest version of the application.
        // Let's refresh the page immediately.
        window.localStorage.setItem("page-has-been-force-refreshed", "true");
        return window.location.reload();
      }
      // The page has already been reloaded
      // Assuming that user is already using the latest version of the application.
      throw error;
    }
  });

const Homepage = lazyWithReload(() => import("../Pages/Homepage"));
const AboutPage = lazyWithReload(() => import("../Pages/AboutPage"));
const ContactPage = lazyWithReload(() => import("../Pages/ContactPage"));
const PageNotFound = lazyWithReload(() => import("../Pages/PageNotFound"));

const PrivateRoutes = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Homepage {...props} />;
            }}
          />
          <Route
            exact
            path="/personal-site"
            render={(props) => {
              return <Homepage {...props} />;
            }}
          />
          <Route
            exact
            path="/about"
            render={(props) => {
              return <AboutPage {...props} />;
            }}
          />
          <Route
            exact
            path="/contact"
            render={(props) => {
              return <ContactPage {...props} />;
            }}
          />
          <Route
            path="*"
            render={(props) => {
              return <PageNotFound {...props} />;
            }}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default PrivateRoutes;
