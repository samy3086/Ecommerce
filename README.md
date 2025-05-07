Title of project:HS-SHOP.


data.js:
This file contains a list of all the products used in the shop. Each product has some information like id(1,2,3...), title (the name), image (a link to the product photo), price, category (Man or Women), how many times it was viewed (views), how many were sold (sold), and one or more reviews (comments and ratings from users). This is just a simple way to store data so it can be shown on the website — like in the homepage or the product list.in 

Navbar.jsx:
It is a file creates the top menu of the website. It lets users click on categories like "Home", "Man", or "Women" to filter products, search for items using a search bar, and open the shopping cart to see how many items are inside. When the user clicks on the "HS-Shop" logo, it resets the filters and shows all products. The file uses small functions to do this: (handleSearch) handles the search bar and sends the search text to the main page, (handleCategoryClick) changes the product category when a button is clicked, and the logo also resets everything. The design uses Bootstrap to make the menu look clean and organized, react-router-dom for page navigation, and react-icons to show the cart icon.

cartcontext.jsx:
  this files contain all the necessary functions that am gonna use with across all the project in cart.jsx,card.jsx,productdetails.jsx allowed by using createcontext which will give a name to the package of my functions : Cartcontext and using it by usecontext as a function useCart to identify them.

  -used usestate setCart to update the cart each time am using a function (generally executing an arrow function inside it directly to ease the process)
    functions: 
      addtoCart: gets quantinty , product ,tries to find if not found impliment a new product in the cart and with the quantity if new , else it will map to that product using it's id and update it's quantinty .
      removeFromCart: gets productId use filter methode to get exclude that product and assign the rest to the cart 
      getTotalPrice: this will always be displayed , uses reduce methode will will count the whole price of the cart starting from 0 
      updatequantity: will allows the manipulation of the product increment, decrement by certain quantity got as paramater , with the id of the product

  Cartcontext.provider = wrap the whole functions that will be used to the children (componetnts depends on what i am wraping in the app.jsx)     
      
  all this cart will be saved on a local stroge by useeffect hook which will triggers by the change of the id and save in local storage which will uploaded at the first opening of the website if it does exists .

Productdetails.jsx:
  this file will be opened as product/id either by clicking on the button "afficher plus" or clicking the image itself by the help of "react-router-dom"  which allows us to take the product's Id importing it as  "useParams"
  , import {useCart} which will take the function "addtoCart" to perform the "ADD TO CART BUTTON".
  -HandleAddToCart function to ease the readblity of the program (to not run a whole lines in that button ) that add that product to that cart with unchanged quantity of 1.
  in the main return function it will display the infos of that product (image,price,..)using that product and uses map function to go throughout all the comments if deos exists .
  -used "useEffect" to get save the views in a local storage which will be incremented every time we acces this page or refresh by 1 (0.5*2 =cuz it's increamting 2 times because of the strict mode),
  which will try to upload it from the local storage using it's id , if found increment it else try uses find method to get it and still increment the views ;
  IF ANY BUGS HASN'T HAPPENED (error loading) : set the product as found and SAVE IT .

Cart.jsx:
  this file will display all the cart's content :
    - product bought: using map method to display all the product with title , price , quantinty bought , total price 
    - buttons to : 
      + (add the quantnity by 1 with specefied as paramater
        with updatequantity function)
      - (decrement quantity by 1 with the updatequantity function)      
      remove (get off that procuts with removefromcart function that get the item's id  )
    - small picture that shows the product 
    - total price (with getTotalPrice function)

  imported use cart to allow the cart to use those function to be performed from cartcontext.

  TEAM MEMBRES:
  KAYOUCHE ahmed samy
  HARZELLI Abd el mounaim
