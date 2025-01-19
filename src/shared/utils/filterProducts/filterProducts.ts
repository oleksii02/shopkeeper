export const filterProducts = ({
                                   products,
                                   searchQuery,
                                   minPrice = 0,
                                   maxPrice,
                                   filterPublished,
                               }) => {
    return products
        .filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((product) => {
            if (minPrice || maxPrice) {
                const price = product.price;
                return price >= parseFloat(minPrice || 0) && (!maxPrice || price <= parseFloat(maxPrice));
            }
            return true;
        })
        .filter((product) => {
            if (filterPublished) {
                return product.published;
            }
            return true;
        });
};
