const cart = ["apple", "shirt", "pens"];

const promise = createOrder(cart);

promise
.then(function (orderId) {
  console.log(orderId);
  return orderId
})
.then(function(orderId){
      return proceedToPayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message)
});

// Producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //Here will write the login of fetching api ,creating order and validating cart
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "123456";
    setTimeout(function () {
      resolve(orderId);
    }, 5000);
  });

  return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve ,reject){
        resolve('Payment Successfull')
    })
}

function validateCart(cart) {
  return true;
}
