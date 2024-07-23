# Bug[#5](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/8): User unable to place order

## **Description**

When a user attempts to complete the checkout process in the [Pet Shop](https://pet-shop.buckhill.com.hr/) application by clicking on the "PLACE ORDER" button, they encounter a "Failed to Create New Order" error message. This error prevents the user from successfully placing their order, impacting their ability to make purchases on the platform.

## **Steps to Reproduce**

1. Navigate to the [Pet Shop](https://pet-shop.buckhill.com.hr/) application.
2. Log in as a registered user.
3. Add one or more products to the shopping cart.
4. Click on the shopping cart icon or navigate to the cart page.
5. Review the items in the cart and click the "PROCEED TO CHECKOUT" button to proceed with the purchase.
6. Fill the "Shipping Address" and click the "NEXT" button.
7. Fill the "Payment details", select the "Cash on Delivery" option, and click the "NEXT" button.
8. Review the order details and click the "PLACE ORDER" button.

## **Expected Behavior**

After clicking the ‘PLACE ORDER’ button, users should be able to smoothly progress through the checkout process without encountering any errors. The order should be placed successfully, and users should receive an order confirmation 

## **Actual Behavior**

Upon clicking the ‘PLACE ORDER’ button, users encounter a ‘Failed to Create New Order’ error message. This prevents them from proceeding with the checkout process, and their order is not placed

## **Screenshots**
![Place order error](https://github.com/user-attachments/assets/d5ced916-7037-42eb-9b5f-241c0938ebdc)



## **Environment**

- Browser: Chrome (Version 126.0.6478.128)
- Operating System: Windows 11

## **Reproducibility**

- [x] Always
- [ ] Intermittent
- [ ] Only Once

## **Impact**

This bug significantly disrupts users’ ability to complete purchases on the Pet Shop application, negatively impacting their experience and preventing successful transactions.

## **Severity**

Critical

## **Workaround**

There is currently no known workaround for this issue.
## **Related Bugs**

None