function ProductCard(title, price, imgUrl, colorLength, sizeLength) {
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
    this.colorLength = colorLength;
    this.sizeLength = sizeLength;
    this.rating = {
        amountStars: 5,
        amountStarsScored: 3,
        starData: {
            src: './images/rating-scored.svg',
            class: 'reviews_icon',
        },
        reviews: {
            reviewsAmount: 134,
        },
    };
    this.shippingOffer = 'Shipping Offer';
}

ProductCard.prototype.createCard = function () {
    const cardContainer = $('div', {
        class: 'product_preview',
    });

    //=========================================================

    const img = $('img', {
        class: 'product_preview__image',
        src: this.imgUrl,
        alt: '...',
    });

    //=========================================================

    const productPreviewContend = $('div', {
        class: 'product_preview_content__wrapper',
    });

    //-----------------------------------------------------------------------

    const productTitle = $('span', {
        class: 'product_name',
        text: this.title,
    });

    //-----------------------------------------------------------------------

    const reviewsWrapper = $('div', {
        class: 'reviews_wrapper',
    });

    const reviewsAmount = $('span', {
        class: 'rewievs_amount',
        text: '(' + this.rating.reviews.reviewsAmount +')',
    });

    //-----------------------------------------------------------------------

    const shippingOfferWrapper = $('div', {
        class: 'shipping-offer_wrapper',
    });
    const shippingOfferIcon = $('img', {
        class: 'shipping-offer_icon',
        src: './images/delivery-truck.svg',
        alt: '...',
    });
    const shippingOfferText = $('span', {
        class: 'shipping-offer_text',
        text: this.shippingOffer,
    });

    //-----------------------------------------------------------------------
    const arrOfPrice = String(this.price).split('.');
    const productPrice = $('span', {
        class: 'product_price',
        text: arrOfPrice[0],
    });

    const productPriceTop = $('span', {
        class: 'product_price_top',
        text: arrOfPrice[1],
    });

    //-----------------------------------------------------------------------

    const optionsWrapper = $('div', {
        class: 'options_wrapper',
    });
    const optionsText = $('span', {
        class: 'options_text',
        text: this.colorLength + ' Colors' + ' / ' + this.sizeLength + ' Sizes',
    });
    const optionsIcon = $('img', {
        class: 'options__icon',
        src: './images/wishlist.svg',
        alt: '...',
    });

    cardContainer.appendChild(img);

    productPreviewContend.appendChild(productTitle);

    for (var i = 0; i < this.rating.amountStars; i++) {
        if (i <= 2) {
            var reviewIconScored = $('img', {
                class: 'reviews_icon',
                src: './images/rating-scored.svg',
                alt: '...',
            });
            reviewsWrapper.appendChild(reviewIconScored);
        } else {
            var reviewIconUnActive = $('img', {
                class: 'reviews_icon',
                src: './images/rating-unactive.svg',
                alt: '...',
            });
            reviewsWrapper.appendChild(reviewIconUnActive);
        }
    }

    reviewsWrapper.appendChild(reviewsAmount);
    productPreviewContend.appendChild(reviewsWrapper);

    shippingOfferWrapper.appendChild(shippingOfferIcon);
    shippingOfferWrapper.appendChild(shippingOfferText);

    productPreviewContend.appendChild(shippingOfferWrapper);

    productPrice.appendChild(productPriceTop);
    productPreviewContend.appendChild(productPrice);

    optionsWrapper.appendChild(optionsText);
    optionsWrapper.appendChild(optionsIcon);

    productPreviewContend.appendChild(optionsWrapper);

    cardContainer.appendChild(productPreviewContend);

    return cardContainer;
};