const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51HYvl8LnOOmb4AwPF2PVg6qHHpDyuZflfr4dLhE5F9plfp5HXLh9SZM5tUumOhqgB6DmyX9vYA2jHsLyF1lfA3Fx00SbUFjHLe'
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: 'usd'
	});

	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-f6523/us-central1/api
