# Monitoring with Application Insights

## Overview
In this lab, you will set up Microsoft Teams on your system, create your first team and create a custom Teams app hosted in Microsoft Azure.

## Prerequisites

* Complete [HOL 0](./../HOL0) to create a development image with Visual Studio 2017.
* Complete [HOL 2](./../HOL2) to create a.basic Progressive Web App, or use the [PWA](./../HOL2/PWA) folder from lab 2 without completing it.

## Exercises
This hands-on-lab has the following exercises:
* [Exercise 1: Create an Application Insights resource](#ex1)
* [Exercise 2: Create a new team](#ex2)
* [Exercise 3: Create a Teams app](#ex3)
---

## Exercise 1: Create an Application Insights resource<a name="ex1"></a>

An instance of Application Insights can be created in a variety of ways, including ARM Templates or CLI commands. For this exercise we will use the Azure Portal to create and configure our instance.

1. Open a InPrivate or Incognito browser window (`Ctrl + Shift + P` in Edge and Internet Explorer and Firefox or `Ctrl + Shift + N` in Google Chrome)
 and browse to [portal.azure.com](https://portal.azure.com/). Click `Downloads` and select `Desktop (Windows 7+)` and click `DOWNLOAD NOW (64-BIT)`.


1. Open the Resource Group that was originally deployed. Click `Add` on the top toolbar to add a new Azure resource to this group.


1. Search for `Application Insights` and select the entry from the results list:



1. In the overview blade that opens, click `Create` to open the creation settings blade. Enter a name, configure `Application Type` to `Node.js Web Application` and then click the `Create` button.

    Creation typically takes less than a minute.


1. Once provisioning completes, return to your Resource Group and open the resource. You may need to hit the refresh button within the resource group blade.


1.  In the `Essentials` section, take note of the `Instrumentation Key`. We will need that in future exercises.


We now have an instance of Application Insights created and ready for data. The Instrumentation Key is important, as it is the link that ties an application to the AI service. 


---
## Exercise 2: Add server and client side SDKs<a name="ex2"></a>

Application Insights works with 2 components:
1. A server side SDK that integrates into the NodeJS (or other web technologies) processes.
2. A snippet of JavaScript sent down to the client's browser to monitor behavior.

We will add both components to our application and enable the sending of telemetry into the Application Insights service.

### Server side

1. Open the application in Visual Studio. Feel free to use the folder you've been using throughout the hands-on-labs, or use the [PWA](./../HOL2/PWA) folder from lab 2.

1. Microsoft publishes an SDK for AppInsights on NodeJS on [GitHub](https://github.com/Microsoft/ApplicationInsights-node.js). This SDK can be installed in your project via the Visual Studio.package management console.

    Open the package management console (`View` -> `Other Windows` -> `Package Manager Console`), switch to the solution directory install the npm package:

    ```javascript
    cd EduDevCampPWA
    npm install --save applicationinsights
    ```

    ![image](./media/2018-07-23-10-50-00.jpg)
    
    ![image](./media/2018-07-23-10-53-00.jpg)

1. Modify the `app.js` file and add the following code below the line

    ```javascript
    var app = express();
    ```

    and make sure that you replace `YOUR_I_KEY` with the `Instrumentation Key` you created in the previous exercise:

    ```javascript
    let appInsights = require("applicationinsights");
    appInsights.setup("YOUR_I_KEY").start();
    ```

    ![image](./media/2018-07-23-10-54-00.jpg)

1. Run your application and in the navigate around several pages to generate sample telemetry.

1. Back in the Azure Portal, refresh the browser tab (or click `Refresh` from the top toolbar) until you see data appear.


    > It may take 3-5 minutes for data to appear even when manually refreshing.

With just two lines of code you added monitoring to your website. Later you will learn to further improve the level of detail by adding custom events.

### Client side

Our server is now sending data, but what about the client side? Let's add the JavaScript library.

1. In the portal, click the tile that says `Learn how to collect browser page load data`: 
    


1. The next blade will give you a JavaScript snippet pre-loaded with the Instrumentation Key. This snippet, when placed on an HTML page, will download the full Application Insights JavaScript library and configure itself. Click the clipboard icon to copy the snippet.



1. Let's integrate the snippet into our web pages. Create a new file at `views/appInsights.html` and paste in the snippet and insert your own instrumentation key.

    ```html
    <!-- 
    To collect end-user usage analytics about your application, 
    insert the following script into each page you want to track.
    Place this code immediately before the closing </head> tag,
    and before any other scripts. Your first data will appear 
    automatically in just a few seconds.
    -->
    <script type="text/javascript">
    var appInsights=window.appInsights||function(config){
        function i(config){t[config]=function(){var i=arguments;t.queue.push(function(){t[config].apply(t,i)})}}var t={config:config},u=document,e=window,o="script",s="AuthenticatedUserContext",h="start",c="stop",l="Track",a=l+"Event",v=l+"Page",y=u.createElement(o),r,f;y.src=config.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js";u.getElementsByTagName(o)[0].parentNode.appendChild(y);try{t.cookie=u.cookie}catch(p){}for(t.queue=[],t.version="1.0",r=["Event","Exception","Metric","PageView","Trace","Dependency"];r.length;)i("track"+r.pop());return i("set"+s),i("clear"+s),i(h+a),i(c+a),i(h+v),i(c+v),i("flush"),config.disableExceptionTracking||(r="onerror",i("_"+r),f=e[r],e[r]=function(config,i,u,e,o){var s=f&&f(config,i,u,e,o);return s!==!0&&t["_"+r](config,i,u,e,o),s}),t
        }({
            instrumentationKey:"2fd01fb1-d6cb-4c2f-9244-171989d2ac67"
        });
        
        window.appInsights=appInsights;
        appInsights.trackPageView();
    </script>
    ```

1. Now update `views/layout.pug` with an `include` for the new `appInsights.html` file before the end of the `head` block:

    ```pug
    doctype html
    html
      head
        title= title
        link(rel='stylesheet', href='/stylesheets/main.css')
        link(rel='manifest', href='/manifest.json')
        script(src='/pwabuilder-sw-register.js')
        // Application Insights
        include appInsights.html
      body
        block content
    ```

    > In a real world scenario we may not wish to mix `.html` and `.pug` files in our views, however for a lab it can be difficult to copy/paste/troubleshoot pug snippets.

1. Redeploy the application and load several pages to generate more sample telemetry. The Azure Portal should now light up data for **Page View Load Time**:



Our application is now providing the Application Insights service telemetry data from both the server and client.

---
## Exercise 3: Monitor custom events<a name="ex3"></a>



---
## Continue with lab 5

You are now ready to start hands-on lab 5. [View HOL 5 instructions](../HOL5).

---
Copyright 2018 Microsoft Corporation. All rights reserved. Except where otherwise noted, these materials are licensed under the terms of the MIT License. You may use them according to the license as is most appropriate for your project. The terms of this license can be found at https://opensource.org/licenses/MIT.