const image1 = 'https://static.wixstatic.com/media/963b22_84caaed0d4aa45618a283770302002a2~mv2.jpg/v1/fill/w_559,h_324,fp_0.48_0.33,q_80,usm_0.66_1.00_0.01,enc_auto/963b22_84caaed0d4aa45618a283770302002a2~mv2.jpg'
const image2 = 'https://static.wixstatic.com/media/963b22_72f348e541824cfba8aa46f36886d647~mv2.jpg/v1/fill/w_522,h_304,fp_0.50_0.50,lg_1,q_80,enc_auto/963b22_72f348e541824cfba8aa46f36886d647~mv2.jpg'
const image3 = 'https://static.wixstatic.com/media/963b22_5ba70756564d4d7596e86a6e76a9f5a2~mv2.jpg/v1/fill/w_557,h_324,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/963b22_5ba70756564d4d7596e86a6e76a9f5a2~mv2.jpg'
const text1 = "Thank you guys for our adorable baby Casper! Kids and kitten are getting very well together. Our family couldn’t be more happier."
const text2 = "We just got our kitten over a week ago. We could not happier with this little peanut. She’s so sweet, funny, playful and affectionate. Highly recommend!"
const text3 = "Couldn't have asked for a more knowledgeable and caring breeder!! She made herself available to me whenever I had any questions and the process was so seamless, no to mention that she has the best Scottish folds I've ever seen. We are so in love with our new kitten. Very thankful to have found this breeder because I'm a first time cat owner and didn't know where to start but it turned out to be the best decision I've made."
const name1 = 'Tatiana Mykyta'
const name2 = 'Jennifer Cole-Meehan'
const name3 = 'Rovena Pjetergjoka'

class CustomerReview {
  constructor(image, text, reviewer) {
    this.image = image;
    this.text = text;
    this.reviewer = reviewer
  }
}

const defaultReviews = []

defaultReviews.push(new CustomerReview(image1, text1, name1))
defaultReviews.push(new CustomerReview(image2, text2, name2))
defaultReviews.push(new CustomerReview(image3, text3, name3))

module.exports = defaultReviews
