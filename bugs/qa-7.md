# Bug[#7](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/15): When clicking ‘Forgot Password,’ the user is not directed to the password reset page

## **Description**
When a user clicks on ‘Forgot Password’ on the sign-in page, they are not directed to the password recovery page.
## **Steps to Reproduce**
1. Move to Login Page for user.
2. Click ‘Forgot Password’.


## **Expected Behavior**
Password recovery page should open.
## **Actual Behavior**
The password recovery page opens in the background, but the login popup does not close, making the recovery page inaccessible.


## **Video**


https://github.com/user-attachments/assets/6cd68329-9f4f-494e-8c37-4a1badf8c657





## **Environment**
Browser: Chrome (Version 126.0.6478.128)
Operating System: Windows 11

## **Reproducibility**
- [x] Always
- [ ] Intermittent
- [ ] Only Once

## **Impact**
This issue significantly impacts the user experience because the user is unable to reset their password..

## **Severity**
High 

## **Workaround**

After clicking on ‘Forgot Password,’ refresh the page and user can access the password recovery page.
## **Related Bugs**
None