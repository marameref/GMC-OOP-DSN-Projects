/**
 * TASK: Ticket Pricing
 * Determines price based on age brackets.
 */
function getTicketPrice(age) {
    if (age <= 12) {
        return 10; // Children
    } else if (age >= 13 && age <= 17) {
        return 15; // Teenagers
    } else if (age >= 18) {
        return 20; // Adults
    } else {
        return "Invalid age";
    }
}

/**
 * TASK: Weather Clothing Adviser
 * Combines temperature and rain status to give advice.
 */
function weatherAdviser(temp, isRaining) {
    let advice = "";

    if (temp < 15) {
        advice = "Wear a heavy coat and scarf.";
    } else if (temp >= 15 && temp <= 25) {
        advice = "A light jacket or sweater is perfect.";
    } else {
        advice = "Stay cool with a t-shirt and shorts.";
    }

    if (isRaining) {
        advice += " Don't forget an umbrella or raincoat!";
    }

    return advice;
}

module.exports = { getTicketPrice, weatherAdviser };