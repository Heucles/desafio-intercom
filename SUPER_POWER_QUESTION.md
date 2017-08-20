 Super power question: 

*"Tell me about the type of work, with an example, that showcases you at your best. What do you love to do? Just a short paragraph is fine, but I’d love to know what you feel best at."*

***
### Answer

There is a insurance startup here in Brazil, which has a business model based on being completely online, my company was hired to develop the mobile application for their platform. At the time I was assigned to lead a squad to develop the APIs to feed this app.
After about 2 weeks I´ve noticed that their entire web application was a big monolith built with Ruby on Rails and that many of the endpoints that we were developing replicated rules that squads were already well advanced in their WEB application.
The rework and the possibility of forgetting something in the implementation of the business rules were really keeping me wake at night, that's when I proposed to their CTO, to ask the WEB application squads to convert what they were delivering as rendered HTML, to JSON format and then consume it in the same way as the mobile app would do, of course it was not a simple job, but I pointed out to him that it made no sense to have the same business rules being developed at different points. Then, together with my team, I´ve set up an API Gateway to orchestrate these endpoints and filter the information we needed only for the mobile application. We all had to work hard for this change to take place, but in the end it was very positive.
With this positive result the CTO proposed to my team a new challenge, there was the web monolith, which had all the business rules, to integrate with the legacy systems of the bank that supplied the insurance products, and also with a CRM (Salesforce) that they had hired. We then proposed the creation of an HTTP bus that would ensure transparent communication between all the systems in this ecosystem following a publish-subscribe messaging model. The time was short and the launch of the company with marketing campaigns on television and online was in little less than 1 month.
I´ve asked him if we could use Node.js to build application, because we already had a good experience in the Node,js stack, and because it work natively with streams and in an asynchronous model, I knew we could quickly deliver the application's MVP. The result was that in 2 weeks we had the MVP launched and the CRM, legacy and product teams were already able to integrate with each other. The evolution of this project lasted 1 year and we implemented afterwards, "P2P" communication, event forwarding and reprocessing of failed events.
For this project we´ve used:

* Node.js
* RabbitMq
* MongoDb
* Docker

I am very proud of this project because we had a transversal work in their company, we came to do something and we ended up totally changing the focus of our work in favor of the product.
