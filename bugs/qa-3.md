# Bug[#3](https://github.com/Rishabh-1000/QA-Level-3-Assignment-Task--Rishabh-Dubey/issues/6): Error when Admin create a new product

## **Description**

When an admin user attempts to create a new product within the [Pet Shop](https://pet-shop.buckhill.com.hr/)  application, an error message stating ‘Undefined array key 'category_uuid'’ is displayed. This error prevents the successful creation of the product and impacts the admin’s ability to add new products to the system.

## **Steps to Reproduce**

1. Navigate to the [Pet Shop](https://pet-shop.buckhill.com.hr/) application.
2. Log in as an admin user with appropriate administrative privileges.
3. Access the products page.
4. Click on "ADD NEW PRODUCT" button
5. Fill in the required product details(Product Name, Product Description, Price, Brand and Category)
6. Click the "SAVE CHANGES" button to create the new product.

## **Expected Behavior**

After creating a new product as an admin user, the product should be successfully created and added to the application's product database.

## **Actual Behavior**

Upon clicking the "SAVE CHANGES" button to create the new product, an error message is displayed: "Undefined array key 'category_uuid'." 

## **Environment**

- Browser: Chrome (Version 126.0.6478.128)
- Operating System: Windows 11

## **Video**


https://github.com/user-attachments/assets/d50a2d3e-1828-42a4-a7b1-9d424fa6900a



## **Reproducibility**

- [x] Always
- [ ] Intermittent
- [ ] Only Once

## **Impact**

This bug significantly impedes the admin user’s ability to add new products to the application, disrupting the product management workflow.

## **Severity**

Critical

## **Workaround**

There is currently no known workaround for this issue.

## Related Bugs

None