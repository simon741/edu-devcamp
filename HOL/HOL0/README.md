# Setup of the Developer Environment

## Content<a name="content"></a>
* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Before you start](#before)
* [Exercise 1: Set up Office 365 Educational trial subscription](#ex1)
* [Exercise 2: Set up demo data in the School Data Sync Admin Portal](#ex2)
* [Exercise 3: Set up Azure free trial subscription](#ex3)
* [Exercise 4: Provision a virtual machine for development](#ex4)
* [Continue with lab 1](#continue)

---

## Overview<a name="overview"></a>
In this lab, you will set up an Office 365 Educational trial subscription, populate your School Data Sync environment with demo data, and provision resources in the Azure subscription to use for development of further labs.

**This lab is a requirement for the other hands-on labs.**

[Back to top](#content)

---

## Prerequisites<a name="prerequisites"></a>

* You will need a cell phone for identity verification.

[Back to top](#content)

---

## Before you start<a name="before"></a>

> &#x1F53A; If you already have an Office 365 subscription, please **use an alternate browser or use private mode!** This will help avoid any issues with conflicting accounts.
>
> Clear your browsers cache and restart your browser.
>
> **Do not skip exercise 1!** Even if you already have an Office 365 subscription and address, follow exercise 1 and create a new account.
>
> Use the account created in exercise 1 for **all the following exercises and hands-on labs!**
>
> To register for a free trial use an e-mail address and a phone number that has **not been used for a free trial** yet! &#x1F53A;

[Back to top](#content)

---

## Exercise 1: Set up Office 365 Educational trial subscription<a name="ex1"></a>

1. Open a InPrivate or Incognito browser window (`Ctrl + Shift + P` in Edge and Internet Explorer and Firefox or `Ctrl + Shift + N` in Google Chrome)
 and browse to the signup page. You will be given an individual link by your instructor that includes a promo code.

    ![image](./media/2018-06-27-16-27-00.jpg)

1. Choose the Country/Region for your tenant (this determines the SDS Schema, and Datacenter deployment). Populate information about yourself and click `Next`.

    ![image](./media/2018-06-27-16-37-00.jpg)

1. Create a user name and password for your company and click `Create my account`.

    ![image](./media/2018-06-28-09-13-00.jpg)
    
1. Enter you phone number, select your method of communication and click `Text me`.

    ![image](./media/2018-06-28-09-16-00.jpg)

1. Once you receive your verification code, enter it and click `Next`.

    ![image](./media/2018-06-28-09-17-00.jpg)

1. Prior to moving forward, make sure to capture the displayed information in order to sign into your new account. Wait for the page to finish loading.

    ![image](./media/2018-06-28-09-18-00.jpg)

1. There is no need to verify eligibility for an Educational pricing plan or register a domain. Click `I'll verify later` and confirm by clicking `Yes`.

    ![image](./media/2018-06-28-09-19-00.jpg)

1. You will be redirected to the Office 365 Admin center to your new subscription. You can skip the offered tour.

    ![image](./media/2018-06-28-09-19-30.jpg)

1. You can access the School Data Sync Ux via the menu. Click `Show more` > `Admin` > `Admin centers` > `School Data Sync`.

    ![image](./media/2018-06-28-09-27-00.jpg)

1. It may take a few minutes before you can access the SDS page.

    ![image](./media/2018-06-28-10-48-00.jpg)

[Back to top](#content)

---

## Exercise 2: Set up demo data in the School Data Sync Admin Portal<a name="ex2"></a>

1. Download these CSV files containing the demo data: [School](./assests/School.csv), [Section](./assests/Section.csv), [Student](./assests/Student.csv), [Student Enrollment](./assests/StudentEnrollment.csv), [Teacher](./assests/Teacher.csv) [Teacher Roster](./assests/TeacherRoster.csv). If you have downloaded the Dev Camp content you can find the files in the folder `HOL/HOL0/assets/`.

1. To access the School Data Sync Admin Portal launch a private web browser, navigate to [sds.microsoft.com](https://sds.microsoft.com), click `Sign-In`, then enter your O365 Global Admin account credentials.

1. After logging in, click `+ Add Profile` in the left hand navigation pane to create a `Sync Profile`.

    ![image](./media/2018-06-28-11-05-00.jpg)

1. On the `Choose Connection Type` page, complete the form. Enter a name for your sync profile. This name will be used to identify the sync profile in the SDS Dashboard, and cannot be changed once the profile setup is complete. Select `Upload CVS files` and `CVS files: SDS Format`. Once complete, click `Start`. 

    ![image](./media/2018-06-28-11-21-00.jpg)

1. On the Sync Options page, select the  `new users` option. Then click upload files to upload your 6 CSV files. Once uploaded, select an arbitrary stop date in the future, click `Next`. In a production scenario you would usually choose to sync existing users. For a more detailed instruction on the sync process see [docs.microsoft.com/en-us/SchoolDataSync/how-to-deploy-school-data-sync-by-using-csv-files](https://docs.microsoft.com/en-us/SchoolDataSync/how-to-deploy-school-data-sync-by-using-csv-files).

    ![image](./media/2018-06-28-11-23-00.jpg)

1. On the `Teacher options` page click `Next`.

    ![image](./media/2018-06-28-11-25-00.jpg)

1. On the `Student options` page click `Next`.

    ![image](./media/2018-06-28-11-34-00.jpg)

1. On the `Review` page click `Next`.

    ![image](./media/2018-06-28-11-36-00.jpg)

1. On the `Review page`, ensure you've made the appropriate selections. If no additional changes are needed, click `Create Profile`. Once you create a sync profile, SDS will begin a pre-sync validation process. During this process, SDS will ensure there are no obvious errors with your CSV files. If any errors are found during the pre-sync validation process, you will have the option to fix them and re-upload the files before clicking the resume sync button and begin the real synchronization process. If you receive errors and choose not to update them, you can still choose to resume sync without fixing the errors. Just be aware that SDS can only sustain up to 15,000 errors before the profile will enter a quarantine status.

    ![image](./media/2018-06-28-11-40-00.jpg)

    ![image](./media/2018-06-28-11-40-30.jpg)

1. The sync process will take some time and you will be prompted to manually refresh the status page. Press `F5` to do so.

    ![image](./media/2018-06-28-11-52-00.jpg)


[Back to top](#content)

---

## Exercise 3: Set up Azure free trial subscription<a name="ex3"></a>
The 30 day Azure free trial will be used in the hands-on labs to host content in Azure like the Progressive Web App or the Teams apps.

1. Open a InPrivate or Incognito browser window (`Ctrl + Shift + P` in Edge and Internet Explorer and Firefox or `Ctrl + Shift + N` in Google Chrome)
 and browse to [azure.microsoft.com/en-us/free](https://azure.microsoft.com/en-us/free/?ref=portal) and click the `Start free` button.

    ![image](./media/2018-07-18-15-41-30.jpg)

1. Complete the form and be sure to use the e-mail address you created in [Exercise 1](#ex1) for your Office 365 Educational trial subscription. Click `Next`.

    ![image](./media/2018-07-18-15-43-00.jpg)

1. Enter your phone number and click `Text me`. Enter the verification code that you receive via SMS and click `Verify code`.

    ![image](./media/2018-08-16-08-55-00.jpg)

1. Enter your credit card details for additional verification. You credit card will **not** be charged. Agree to the terms and conditions and click `Sign up`.

    ![image](./media/2018-08-16-09-02-00.jpg)

[Back to top](#content)

---

## Exercise 4: Provision a virtual machine for development<a name="ex4"></a>
To follow the programming examples in the upcoming hands-on labs you will need a machine running Microsoft Visual Studio. In this exercise you will provision a virtual machine in Azure that has Visual Studio 2017 already installed.

1. Open a InPrivate or Incognito browser window (`Ctrl + Shift + P` in Edge and Internet Explorer and Firefox or `Ctrl + Shift + N` in Google Chrome) and browse to [portal.azure.com](https://portal.azure.com) and sign in using the e-mail address used in the previous exercise.

1. Click `Create a resource` in the menu on the left.

    ![image](./media/2018-07-18-15-24-00.jpg)

1. Enter `Visual Studio Community 2017` in the search box.

    ![image](./media/2018-07-18-15-39-00.jpg)

1. From the results select `Visual Studio Community 2017 (latest preview) on Windows Server 2016 (x64)` and click `Create` on the bottom of the page.

    ![image](./media/2018-08-30-13-18-00.jpg)

1. Assign a name to your virtual machine and to the resource group that will be created along with the virtual machine. Enter your username and choose a password. Select `RDP` as the available inbound port. Use your free trial as the subscription. Click `Management` at the top of the page.

    ![image](./media/2018-08-30-16-27-00.jpg)

1. Disable all monitoring. Click `Review + create` at the bottom of the page.

    ![image](./media/2018-08-30-16-33-00.jpg)

1. Review the summary. Click `Create` at the bottom of the page.

    ![image](./media/2018-08-30-16-37-00.jpg)

1. While the virtual machine is provisioned you will see a notification in the top menu bar.

    ![image](./media/2018-08-30-16-39-00.jpg)

1. You will also see a notification when the provisioning process has finished.

    ![image](./media/2018-08-30-16-40-00.jpg)

1. Click `Virtual machines` in the menu on the left and click on the newly created virtual machine.

    ![image](./media/2018-08-30-16-42-00.jpg)

1. On the details page of the virtual machine click `Start` if it is not already running, then click `Connect`.

    ![image](./media/2018-08-30-16-43-00.jpg)

1.  Use the `RDP` tab and click `Download RDP File`.

    ![image](./media/2018-08-30-16-45-00.jpg)

1.  A remote desktop session will start. Enter the credentials you provided when setting up the virtual machine. Once you can see the desktop of Windows Server 2016 start Visual Studio 2017. Enter the credentials you used to create the Azure Free Trial to activate Visual Studio.

    ![image](./media/2018-08-30-16-50-00.jpg)

Your virtual machine is now ready to use.

>&#x1F53A; Even though you chose the `latest release` VM there might be new updates available for Visual Studio 2017 which are now released in very short intervals. It is **not** necessary and recommended to install these! The updates are usually quite large and the installation will take time! &#x1F53A;

[Back to top](#content)

---

## Continue with lab 1<a name="continue"></a>

You are now ready to start hands-on lab 1. [View HOL 1 instructions](../HOL1).

[Back to top](#content)

---

Copyright 2018 Microsoft Corporation. All rights reserved. Except where otherwise noted, these materials are licensed under the terms of the MIT License. You may use them according to the license as is most appropriate for your project. The terms of this license can be found at https://opensource.org/licenses/MIT.