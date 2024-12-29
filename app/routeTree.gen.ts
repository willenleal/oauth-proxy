/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/_app'
import { Route as IndexImport } from './routes/index'
import { Route as AppDashboardImport } from './routes/_app/dashboard'

// Create/Update Routes

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AppDashboardRoute = AppDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_app/dashboard': {
      id: '/_app/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AppDashboardImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

interface AppRouteChildren {
  AppDashboardRoute: typeof AppDashboardRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppDashboardRoute: AppDashboardRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AppRouteWithChildren
  '/dashboard': typeof AppDashboardRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AppRouteWithChildren
  '/dashboard': typeof AppDashboardRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_app': typeof AppRouteWithChildren
  '/_app/dashboard': typeof AppDashboardRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/dashboard'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/dashboard'
  id: '__root__' | '/' | '/_app' | '/_app/dashboard'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppRoute: typeof AppRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppRoute: AppRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_app"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/dashboard"
      ]
    },
    "/_app/dashboard": {
      "filePath": "_app/dashboard.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */
