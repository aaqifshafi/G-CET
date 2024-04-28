require('dotenv').config();
const express = require('express');
const router = express.Router();

console.log(process.env.STRIPE_SECRET_KEY);
console.log(process.env.CLIENT_URL);
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post("/create-payment-session", async (req, res) => {
    try {
        const { details, amount } = req.body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: `${details.semester}` + " " + "Semester Tution Fee",
                            description: `${details.name} - ${details.applicationId}`
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
                        unit_amount: (amount * 0.3) * 100, // Convenience charge amount
                    },
                    quantity: 1,
                }, {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: 'Convinience Fee',
                            description: '1% of the total fee will be charged as convinience fee'
                        },
                        unit_amount: (amount * 0.01) * 100, // Convenience charge amount
                    },
                    quantity: 1,
                }
            ],

            metadata: {
                // Storing student details as metadata
                student_name: details.name,
                application_id: details.applicationId,
                semester: details.semester,
                email: details.email,
                enrollment_number: details.enrollmentNumber
            },
            success_url: `${process.env.CLIENT_URL}/student/feePayment`,
            cancel_url: `${process.env.CLIENT_URL}/student/feePayment`,
        });
        res.json({ url: session.url });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = router;
