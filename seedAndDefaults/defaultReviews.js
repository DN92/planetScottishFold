const image1 = '/catPictures/catReview1.webp'
const image2 = '/catPictures/catReview2.webp'
const image3 = '/catPictures/catReview3.webp'
const text1 = "Thank you guys for our adorable baby Casper! Kids and kitten are getting very well together. Our family couldn’t be more happier."
const text2 = "We just got our kitten over a week ago. We could not happier with this little peanut. She’s so sweet, funny, playful and affectionate. Highly recommend!"
const text3 = "Couldn't have asked for a more knowledgeable and caring breeder!! She made herself available to me whenever I had any questions and the process was so seamless, no to mention that she has the best Scottish folds I've ever seen. We are so in love with our new kitten. Very thankful to have found this breeder because I'm a first time cat owner and didn't know where to start but it turned out to be the best decision I've made."
const name1 = 'Tatiana Mykyta'
const name2 = 'Jennifer Cole-Meehan'
const name3 = 'Rovena Pjetergjoka'

class CustomerReview {
  constructor(image, text, reviewer, srcPage) {
    this.image = image;
    this.text = text;
    this.reviewer = reviewer
    this.srcPage = srcPage || '/404'
  }
}

const defaultReviews = []

defaultReviews.push(new CustomerReview(image1, text1, name1))
defaultReviews.push(new CustomerReview(image2, text2, name2))
defaultReviews.push(new CustomerReview(image3, text3, name3))

module.exports = defaultReviews
