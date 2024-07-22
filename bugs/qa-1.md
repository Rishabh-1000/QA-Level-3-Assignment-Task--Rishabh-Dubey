# Bug[#1](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/2): Upon refreshing the page, both admin and regular logged-in users are logged out

## **Description**
When a user, whether logged in as an admin or a regular user, refreshes any page within the Pet Shop application, they are unexpectedly logged out. This behavior does not align with typical user expectations, as users generally expect to remain logged in even after refreshing a page. The issue consistently occurs when the ‘Remember me’ checkbox is not selected during login.

## **Steps to Reproduce**
1. Log in to the Pet Shop application as either a normal user or an admin without selecting the ‘Remember me’ checkbox..
2. Refresh the current page using the browser’s refresh button or the keyboard shortcut (e.g., F5).

## **Expected Behavior**
After logging in, users should remain logged in even after refreshing any page within the application, regardless of whether they selected the ‘Remember me’ checkbox. The user’s session should persist until they explicitly log out..

## **Actual Behavior**
Upon refreshing any page, logged-in users (both admin and regular users) who did not select the ‘Remember me’ checkbox are logged out and redirected to the login page. This forces users to repeatedly log in after each page refresh, resulting in a frustrating experience..

## **Video**
https://github.com/user-attachments/assets/1ad945cd-e5f3-4bef-b174-4bb2b2c06996

## **Environment**
Browser: Chrome (Version 126.0.6478.128)
Operating System: Windows 11

## **Reproducibility**
- [x] Always
- [ ] Intermittent
- [ ] Only Once

## **Impact**
This bug significantly impairs the user experience, as users who have not selected the ‘Remember me’ checkbox are required to log in repeatedly after every page refresh. This process is both time-consuming and frustrating.

## **Severity**
High 

## **Workaround**
As a temporary solution, users are advised to check the ‘Remember me’ checkbox during login to maintain their session even after page refreshes. However, this option is not available for admin users, as they do not have the ‘Remember me’ checkbox during login.

## **Related Bugs**
None