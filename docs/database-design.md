User

- _id
- name
- email
- password
- role
- avatar
- isVerified
- isBlocked

- createdAt
- updatedAt

Seller

- _id
- userId

- shopName
- shopDescription
- shopLogo
- shopBanner

- isApproved

- createdAt
- updatedAt

Product

- _id

- sellerId

- title
- slug
- description

- price
- stock

- images

- categoryId

- averageRating

- isPublished

- createdAt
- updatedAt

Category

- _id

- name
- slug

- parentCategory

- createdAt
- updatedAt

Cart

- _id
- userId

- items[]
    - productId
    - quantity
    - priceAtAddition

- totalPrice

- createdAt
- updatedAt

Order

- _id

- userId

- items[]
    - productId
    - sellerId
    - quantity
    - price

- subtotal
- shippingCost
- totalPrice

- shippingAddress

- paymentMethod

- paymentStatus
    - PENDING
    - PAID
    - FAILED

- orderStatus
    - PENDING
    - PROCESSING
    - SHIPPED
    - DELIVERED
    - CANCELLED

- createdAt
- updatedAt

Review

- _id

- userId
- productId

- rating
- comment

- createdAt
- updatedAt

Message

- _id

- senderId
- receiverId

- message

- isRead

- createdAt

Wallet

- _id

- userId

- balance

- createdAt
- updatedAt

Notification

- _id

- userId

- title
- message

- isRead

- createdAt