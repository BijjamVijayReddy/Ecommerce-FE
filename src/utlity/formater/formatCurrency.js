export const formatCurrency = (amount) => {
    return amount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")  // Handles first group of thousands
        .replace(/^(\d+)(\d{2})(?=\d)/g, "$1,$2"); // Handles lakhs and crores
};


// 1,00,000 -ind
// 100,0000 - usd