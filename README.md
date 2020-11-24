# McDonald's SPA
![image](https://user-images.githubusercontent.com/38916225/100109867-f5366980-2e74-11eb-8d6d-5ed4faaafea9.png)
This is my Single Page Application for McDonald's. Everything is stored on the server. When you entering this website - all data is fetching and rendering on the page.
No reloads - great user experience.


## Features
This application gives you all simple features that every shop does: you can go through categories, products and different offers that McDonald's suggest.  
On the single product page you can see its description, price, related products and then you can add it to cart.
You will see how the little number appears on the cart button and increasing in future.  
If you made a mistake, you can visit the cart page and remove any products.  
When you finished, you can go to payment page where you will see all products that you added to cart including total order cost.  
After successfully filling out the form, you will be taken to the page of your order, which will have a unique ID.


## Some screenshots
### Offers
![image](https://user-images.githubusercontent.com/38916225/100109867-f5366980-2e74-11eb-8d6d-5ed4faaafea9.png)

### Single Offer
![image](https://user-images.githubusercontent.com/38916225/100114701-5f9dd880-2e7a-11eb-9be4-61554665d699.png)

### Categories
![image](https://user-images.githubusercontent.com/38916225/100113457-ff5a6700-2e78-11eb-8f5a-5a9312ccc491.png)

### Single Category
![image](https://user-images.githubusercontent.com/38916225/100113646-36307d00-2e79-11eb-8e17-a1bc6fe66d8e.png)

### Single Product
![image](https://user-images.githubusercontent.com/38916225/100113727-4d6f6a80-2e79-11eb-82a0-b124bdb5b01e.png)

### Cart
![image](https://user-images.githubusercontent.com/38916225/100113853-77c12800-2e79-11eb-82ec-6f49fe448793.png)

### Payment
![image](https://user-images.githubusercontent.com/38916225/100113936-8b6c8e80-2e79-11eb-8535-ce7272392349.png)

### Success
![image](https://user-images.githubusercontent.com/38916225/100114028-a7703000-2e79-11eb-8fc1-55e06c062715.png)


## McDonald's DataBase
![image](https://user-images.githubusercontent.com/38916225/100110955-3da25700-2e76-11eb-9180-b471d4b45998.png)
**Offers** consist of:
+ id
+ name
+ slogan
+ description
+ image link

**Categories** consist of:
+ id
+ name
+ product ids in this category

**Products** consist of:
+ id
+ category id
+ name
+ description
+ price
+ image link
+ related products

**Popular Products** consist of:
+ product ids that are popular
