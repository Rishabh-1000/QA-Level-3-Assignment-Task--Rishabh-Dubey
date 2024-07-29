# Bug[#6](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/14): The items in the cart vanish after refreshing the page.
## **Description**
When a user logs in, checks the ‘Remember Me’ checkbox, adds items to the cart, and then refreshes the page, the cart becomes empty.
## **Steps to Reproduce**
1. Log in to the Pet Shop application as normal user  selecting the ‘Remember me’ checkbox.
2. Add Items in the Cart.
3. Refresh the current page using the browser’s refresh button or the keyboard shortcut (e.g., F5).

## **Expected Behavior**
When a user refreshes the page, the selected items should persist in the cart.
## **Actual Behavior**
On refreshing the page all items disappear from the cart making cart empty


## **Video**

https://github.com/user-attachments/assets/e0cd889a-ba06-45c4-8bde-0e51d860f48d



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

There is currently no known workaround for this issue.

## **Related Bugs**
None