require('dotenv').config();
const Form = require('../models/Form');
const express = require('express');
const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post("/create-payment-session", async (req, res) => {
    try {
        const { details, amount } = req.body;
        console.log(details);

        // Create a new session in Stripe
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                // Define line items for the payment
                {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: "Semester Tuition Fee - " + `${details.currentSem}`,
                            description: "Form Number - " + `${details.formNumber}`
                        },
                        unit_amount: (amount * 0.7) * 100,
                    },
                    quantity: 1,
                },
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: 'Semester Registration',
                            description: "30% of the total fee will be charged as university registration fee"
                        },
                        unit_amount: (amount * 0.3) * 100,
                    },
                    quantity: 1,
                },
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: 'Convenience Charges',
                            description: '1% of the total fee will be charged as convenience fee'
                        },
                        unit_amount: (amount * 0.01) * 100,
                    },
                    quantity: 1,
                }
            ],
            metadata: {
                // Store student details as metadata
                student_name: details.name,
                form_number: details.formNumber,
                semester: details.semester,
                email: details.email,
                enrollment_number: details.enrollmentNumber
            },
            success_url: `${process.env.CLIENT_URL}/student/myApplications`,
            cancel_url: `${process.env.CLIENT_URL}/student/myApplications`,
        });

        // Extract transaction ID from the session
        const transactionId = session.id;
        // Update the Forms collection to mark payment as true
        await Form.findOneAndUpdate(
            { enrollmentNumber: details.enrollmentNumber },
            { $set: { feeStatus: true, transactionId: transactionId } }
        );

        // Respond with the URL of the Stripe session
        res.json({ url: session.url });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


module.exports = router;
