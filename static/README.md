# React, NextJS and Now: course 3

(?hrs)

This course is aimed at experienced developers who have completed:

-   [course-1](https://course-1.willemliu.now.sh)
-   [course-2](https://course-2.willemliu.now.sh)

This course will build upon the product created in course-2. The goal is how to create a single-page-app in NextJS and deploy this to a development, acceptance and production environment. After this course you will know how to:

-   Implement single-page-app routing
-   Create separate deployments to Now for development, acceptance and production
-   Incorporate environment specific secrets into your application

# Recap

<details>
<summary>course-2</summary>

In course-2 we've learned the following:

-   How to configure Now to support routes using [Regex](https://github.com/willemliu/react-next-now-course-2/blob/5b23cb6c1068382df2ed889b43a9d4b3396deb28/now.json#L6)
-   Make use of [url path variables](https://github.com/willemliu/react-next-now-course-2/blob/5b23cb6c1068382df2ed889b43a9d4b3396deb28/pages/index.tsx#L44) by returning the params via the `query` object given in [`getInitialProps`](https://nextjs.org/docs#fetching-data-and-component-lifecycle)
-   Make use of data retrieved from an endpoint by using `fetch`
-   `fetch` isn't available on Node and so it's necessary to make use of a library like [`fetch-everywhere`](https://github.com/willemliu/react-next-now-course-2/blob/5b23cb6c1068382df2ed889b43a9d4b3396deb28/pages/DataPage.tsx#L1) or [`isomorphic-fetch`](https://www.npmjs.com/package/isomorphic-fetch)
-   How to use `fetch` in an `async` function by using `await` [[code example](https://github.com/willemliu/react-next-now-course-2/blob/5b23cb6c1068382df2ed889b43a9d4b3396deb28/pages/DataPage.tsx#L38)]
-   What the effect is of [client-side rendering versus server-side-rendering](https://course-2.willemliu.now.sh/DataPage)

</details>

# Acceptance criteria

1. Create menu bar with two links to `index` page and one to the `DataPage`
1. Navigating with the menu should behave like a Single-Page-App
1. Going to a URL directly should still result in a Server-side-rendered page
1. Deploy this application to the development, acceptance and production environment

# Steps

<details>
<summary>Sprint 6</summary>

1. Create a `<Header/>` component in the `components` folder
1. Include this component in both `index` and `DataPage`.
1. This component should render 2 anchors. One points to the `index` and the other points to the `DataPage`
    1. Navigating using the header anchors should result in a client-side navigation without complete page-refresh
    1. Hard refresh in the web-browser should still work as intended
    1. Tip: Routing: https://nextjs.org/docs#routing
1. Modify your link so that navigating to `index` will pass `section` and `id` as url parameters.
    1. Navigate using that link and you should see the `section` and `id` values rendered on the page (made possible in course-2).
    1. Make it so that when using the link to navigate to `index` will result in a URL in the address bar looking like `/section_name:string/id:number` instead of an URL with parameters. Replace the parts of the URL with data that makes sense. Do you see the `section` and `id` values rendered?
    1. Do a hard refresh of the page with this URL. Are the values of `section` and `id` still rendered on the page?

</details>

<details>
<summary>Sprint 7</summary>

1. Add `course-3-secret` and `course-3-public-secret` environment variables to `Now`. You can determine what the value should be as long as they're distinguishable.
    1. Bonus: Are you able to prevent `course-3-secret` to be exposed in the client JS asset?
    1. Tip: Runtime configuration: https://nextjs.org/docs#runtime-configuration
    1. Now environment configuration: https://zeit.co/docs/v2/environment-variables-and-secrets/#accessing-environment-variables
1. Render the environment variables into your `index` page somewhere
1. Add the following environment variables and make sure they contain values which are distinguishable and move on to the next sprint
    1. `course-3-dev-secret`
    1. `course-3-dev-public-secret`
    1. `course-3-acc-secret`
    1. `course-3-acc-public-secret`

</details>

<details>
<summary>Sprint 8</summary>

1. Make sure you're running the latest `now cli` version
1. Add an alias to your `now.json` i.e. `dev-course-3.<your-id>.now.sh`
    1. Tip: Aliasing: https://zeit.co/docs/v2/advanced/configuration#alias
1. Copy your `now.json` to a `now.acc.json` and `now.prod.json`
1. Change the alias names in `now.acc.json` to `acc-course-3.<your-id>.now.sh`
1. Change the alias names in `now.prod.json` to `course-3.<your-id>.now.sh`
1. Run `now --prod -A now.acc.json` and check your deployment on your acceptance alias
    1. Bonus: create an NPM Script named `deploy-acc` for this execution
1. Run `now --prod -A now.prod.json` and check your deployment on your production alias
    1. Bonus: create an NPM Script named `deploy-prod` for this execution
1. Change the environment variables for `now.acc.json` and `now.prod.json` so they are distinguishable
1. Redeploy all your environments and check if the environment variables are coming through

</details>

# What's next

<details>
<summary>`next` steps?</summary>

1. `now.json` will get an overhaul in the near future and will become a JavaScript configuration file much like `next.config.js`. Specifics are unknown

</details>

# Resources

-   Routing: https://nextjs.org/docs#routing
-   Runtime configuration: https://nextjs.org/docs#runtime-configuration
-   Now environment configuration: https://zeit.co/docs/v2/environment-variables-and-secrets/#accessing-environment-variables
-   Aliasing: https://zeit.co/docs/v2/advanced/configuration#alias
