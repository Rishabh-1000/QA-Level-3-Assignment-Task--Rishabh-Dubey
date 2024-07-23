# Bug[#4](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/7): Admins not notified and the customer create form remaining open upon the creation of a customer


## **Description**

When an admin user attempts to create a new customer within the [Pet Shop](https://pet-shop.buckhill.com.hr/)  application, Admins are not notified, and the customer form remains open upon the creation of a product. In the background, the customer is created and added to the list .This can confuse admin about customer creation

## **Steps to Reproduce**

1. Navigate to the [Pet Shop](https://pet-shop.buckhill.com.hr/) application.
2. Log in as an admin user with appropriate administrative privileges.
3. Access the Customer page.
4. Click on "ADD NEW CUSTOMER" button
5. Fill in the required customer details(Frist Name, Last Name, Email, Phone Number , Location and Password)
6. Click the "Add New Customer" button to create the new customer.

## **Expected Behavior**

After creating a new customer as an admin user, the customer should be successfully added to the application’s customer list. The admin should be notified of the successful creation, and the create customer form should close
## **Actual Behavior**

Upon clicking the ‘Add New Customer’ button to create a new customer, no notification appears, and the create customer form remains open. In the background, the customer is created and added to the list without notifying the admin

## **Environment**

- Browser: Chrome (Version 126.0.6478.128)
- Operating System: Windows 11

## **Video**



https://github.com/user-attachments/assets/baf989fd-596e-4797-a2ac-1074c3f8bc8f





## **Reproducibility**

- [x] Always
- [ ] Intermittent
- [ ] Only Once

## **Impact**

The absence of creation feedback and the create customer form remaining open could lead to confusion

## **Severity**

High

## **Workaround**

There is currently no known workaround for this issue.

## Related Bugs

None