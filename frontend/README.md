# StoreFront

Categories
  an list/array of category/objects
    - each should have display name, description, normalized name
  Active Category - should be slice in state
    - when clicked, dispatch action that renders only products from selected category
Products
  list/array of products/objects
    - each should:
       have category association
       name
       description
       price
       inventory count
    - create action that filters the list/arr of products/objs when active category is changed
    - create a reducer that filters the products based on active category

Basically click cat and filter list of items
