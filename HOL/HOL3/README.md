# Microsoft Teams

## Overview
In this lab, you will set up Microsoft Teams on your system, create your first team and create a custom Teams app hosted in Microsoft Azure.

## Prerequisites

Complete [HOL 0](./../HOL0) to set up demo data in the School Data Sync Admin Portal.

## Exercises
This hands-on-lab has the following exercises:
* [Exercise 1: Set up Microsoft Teams](#ex1)
* [Exercise 2: Create a new team](#ex2)
* [Exercise 3: Create a Teams app](#ex3)
---

## Exercise 1: Set up Microsoft Teams<a name="ex1"></a>

1. Open a InPrivate or Incognito browser window (`Ctrl + Shift + P` in Edge and Internet Explorer and Firefox or `Ctrl + Shift + N` in Google Chrome)
 and browse to [teams.microsoft.com](https://teams.microsoft.com/). Click `Downloads` and select `Desktop (Windows 7+)` and click `DOWNLOAD NOW (64-BIT)`.

    ![image](./media/2018-06-28-13-33-00.jpg)

1. Execute the downloaded installer and when prompted login with your O365 Global Admin account credentials.

    ![image](./media/2018-06-28-13-34-00.jpg)

1. After the installation finished, complete the welcome wizard.

    ![image](./media/2018-06-28-13-35-00.jpg)

---
## Exercise 2: Create a new team<a name="ex2"></a>

### Create a team

1. On the menu on the left click `Teams` and then click the `Create team` button in the center.

    ![image](./media/2018-06-28-15-41-00.jpg)

1. Select `Classes` as the team type.

    ![image](./media/2018-06-28-15-41-30.jpg)

1. Enter a `Name` for your team.

    ![image](./media/2018-06-28-15-42-00.jpg)

1. Find some students by entering a letter in the search box and add them to your team by clicking the names and clicking `Add`.

    ![image](./media/2018-06-28-15-43-00.jpg)

### Create a Class Notebook

1. Click `Set up Class Notebook`.

    ![image](./media/2018-06-28-15-45-00.jpg)

1. Follow the wizard by clicking `Next`.

    ![image](./media/2018-06-28-15-53-00.jpg)

1. Keep all the preselected features and click `Create`.

    ![image](./media/2018-06-28-15-58-00.jpg)

1. Wait for the wizard to finish.

    ![image](./media/2018-06-28-15-58-30.jpg)

### Create an Assignment

1. Go to the team's `Assignment` tab and click `Create` and `+ New assignment`.

    ![image](./media/2018-07-18-10-23-00.jpg)

1. Enter all required fields and click `Save`.

    ![image](./media/2018-06-28-16-03-00.jpg)

1. The assignment has been added to your list of assignments.You can edit it by clicking it.

    ![image](./media/2018-06-28-16-05-00.jpg)

You have manually created an assignment for your class. In a later hands-on-lab you will create assignments automatically.

---
## Exercise 3: Create a Teams app<a name="ex3"></a>

### Write your app

1. ...

### Host your app in Azure

1. Open Azure Cloud Shell

1. Create a resource group

1. Create an Azure App Service plan

1. Create a web app

1. Deploy ZIP file

1. Browse to the app

### Allow external apps in Teams

You must configure your Office 365 to allow Teams the use of external apps (that you uploaded yourself).

1. Open a InPrivate or Incognito browser window (`Ctrl + Shift + P` in Edge and Internet Explorer and Firefox or `Ctrl + Shift + N` in Google Chrome)
 and browse to [portal.office.com](https://portal.office.com) and enter your O365 Global Admin account credentials. 

1. Click `Services & add-ins` and select `Microsoft Teams`.

    ![image](./media/2018-06-28-16-16-00.jpg)

1. Expand the `Apps` section .

    ![image](./media/2018-06-28-16-17-00.jpg)

1. Check `Allow external apps in Microsoft Teams` and `Allow sideloading of external apps` and `Enable new external apps by default`. Click `Save`.

    ![image](./media/2018-06-28-16-17-30.jpg)

### Install App Studio

1. In Microsoft Teams click `Store` which can be found on the bottom left.

    ![image](./media/2018-06-28-16-48-00.jpg)

1. Use the search to find `App Studio`.

    ![image](./media/2018-06-29-10-04-00.jpg)

1. Select `App Studio` and click `Install`.

    ![image](./media/2018-06-29-10-04-30.jpg)

### Create an app manifest file

App Studio will create the manifest file for your new app. It also provides ready to use controls for your user interface.

1. Click `Open` next to `App`.

    ![image](./media/2018-06-29-10-05-00.jpg)

1. Provide details for all fields. Click `Generate` to generate a new App ID. Download the two icon files from the [assets](./assets) folder: [tabapp192.png](./assets/tabapp192.png) and [tabapp32.png](./assets/tabapp32.png). Upload them in the `Branding` section.

    ![image](./media/2018-07-18-11-46-00.jpg)

1. After you have completed the `Details` -> `App details` page click `Capabilities` -> `Tabs` on the left hand menu to go to the next page. Click the `Add` button below `Team tab`.

    ![image](./media/2018-07-18-11-48-00.jpg)

1. ...

1. ...

### Upload and test your new tab

1. ...


---
## Continue with lab 4

You are now ready to start hands-on lab 4. [View HOL 4 instructions](../HOL4).

---
Copyright 2018 Microsoft Corporation. All rights reserved. Except where otherwise noted, these materials are licensed under the terms of the MIT License. You may use them according to the license as is most appropriate for your project. The terms of this license can be found at https://opensource.org/licenses/MIT.