# Explore School Data Sync data

## Content<a name="content"></a>
* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Exercise 1: Using SDS portal](#ex1)
* [Exercise 2: Using Graph Explorer](#ex2)
* [Continue with lab 2](#continue)

---

## Overview<a name="overview"></a>
In this lab, you will explore your School Data Sync demo data using web interfaces. You will learn about the Graph API which you can use to create applications that utilize the API to read and modify the data.

[Back to top](#content)

---

## Prerequisites<a name="prerequisites"></a>

Complete [HOL 0](./../HOL0) to set up demo data in the School Data Sync Admin Portal.

[Back to top](#content)

---

## Exercise 1: Using SDS portal<a name="ex1"></a>

In the previous hands-on-lab you created a sync to upload sample data to your School Data Sync Admin Portal. The portal lets you browse and query the synced data.

1. To access the School Data Sync Admin Portal launch a private web browser, navigate to [sds.microsoft.com](https://sds.microsoft.com), click `Sign-In`, then enter your O365 Global Admin account credentials.

1. After logging in, click `Your Organization` in the left hand navigation pane to see a list of your schools.

    ![image](./media/2018-07-17-12-52-00.jpg)

1. After selecting a school, click `View Sections, Teachers, and Students` below the school details to reach the sections overview.

    ![image](./media/2018-07-17-12-52-30.jpg)

1. Click `Teachers` to see the list of teachers. Select a teacher to see details.

    ![image](./media/2018-07-17-12-53-00.jpg)

1. Click `Students` to see the list of teachers. Select a teacher to see details.

    ![image](./media/2018-07-17-12-54-00.jpg)

1. Click `Advanced Search` to see created queries on your data. You can combine multiple criteria to filter your data.

    ![image](./media/2018-07-17-13-16-00.jpg)

[Back to top](#content)

---

## Exercise 2: Using Graph Explorer<a name="ex2"></a>

When you want to utilize your data within your own applications you use the Microsoft Graph API. Microsoft provides the online Graph Explorer so you can test the queries to the API before you implement them in your application.

1. To access the Graph Explorer launch a private web browser, navigate to [developer.microsoft.com/en-us/graph/graph-explorer](https://developer.microsoft.com/en-us/graph/graph-explorer), click `Sign in with Microsoft`, then enter your O365 Global Admin account credentials.

    ![image](./media/2018-07-17-13-47-00.jpg)

1. Access to the rostering API features requires that you grant corresponding permissions to the Graph Explorer app. When you execute a query that requires more permissions you will be prompted by the Graph Explorer.

    ![image](./media/2018-07-17-16-04-00.jpg)

1. Add permissions for `EduRoster.ReadBasic` and click `Modify Permissions`.

    ![image](./media/2018-07-17-16-06-00.jpg)

    You may have to wait for the permissions to update before you can execute all queries.

    ![image](./media/2018-07-17-12-12-00.jpg)

    There is a known issue with the Graph API where some queries return the status code 403 even though the appropriate permissions have been given. Currently there is no known workaround for this issue.

1. Enter `https://graph.microsoft.com/v1.0/education/schools` in the query field and click `Run Query` to fetch a list of your schools. Note how the query field auto-completes your queries.

    ![image](./media/2018-07-17-12-15-00.jpg)

1. Try more queries. You can find the API reference and more example queries at [developer.microsoft.com/en-us/graph/docs/api-reference/beta/resources/education-overview](https://developer.microsoft.com/en-us/graph/docs/api-reference/beta/resources/education-overview).

	Query `https://graph.microsoft.com/beta/education/classes/f84c1c46-c0e2-4ec7-9993-f16246bb0102/members/` to get a list of students in the `Biology 2` class.

    Using the API it is possible to read and write roster information and even management of the School Data Sync.

[Back to top](#content)

---

## Continue with lab 2<a name="continue"></a>

You are now ready to start hands-on lab 2. [View HOL 2 instructions](../HOL2).

[Back to top](#content)

---

Copyright 2018 Microsoft Corporation. All rights reserved. Except where otherwise noted, these materials are licensed under the terms of the MIT License. You may use them according to the license as is most appropriate for your project. The terms of this license can be found at https://opensource.org/licenses/MIT.