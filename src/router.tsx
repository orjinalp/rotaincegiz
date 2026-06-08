import { createRouter, createHashHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () =>
  createRouter({
    history: createHashHistory(),
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
