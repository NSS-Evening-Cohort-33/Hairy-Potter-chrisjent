

export const potteryList = (potteryToSell) => {
    let potteryListHTML = " ";

    for (const item of potteryToSell) {
        potteryListHTML += `
        <section class="pottery" id="pottery--1">
            <h2 class="pottery_shape">${item.shape}</h2>
            <div class="pottery_properties>
            Item weighs ${item.weight} grams and is ${item.height} cm in height.
            </div>
            <div class="pottery_price">Price is $${item.price}</div>
        </section>
    `
    }

    return potteryListHTML
}



// module.exports = {potteryList}