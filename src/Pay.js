import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51KZFN3KQ8THRdw9T8nquaScEqoKmXd18mD6bdFIIJX5RAa9kR2ZghoqaG802p13hUjGfeTzC7PhK2Dqy1e2HZzBl00soAjqfwc";

const Pay = () => {

  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const makeRequest = async () => {
      try
      {
        const res = await axios.post("https://nanami-shop-api.herokuapp.com/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 2000,
          currency: "thb"
        });
        console.log(res.data);
        history.push("/success");
      }
      catch(err)
      {
        console.log(err);
      }
    }
    stripeToken && makeRequest();
  }, [stripeToken, history]);

  const onToken = (token) => {
    setStripeToken(token);
  };

  return (
    <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
      {stripeToken 
        ? (<span>Processing Please wait...</span>) 
        : (
          <StripeCheckout 
            name="NANAMI SHOP" 
            image="https://png.pngtree.com/png-vector/20190826/ourlarge/pngtree-shop-png-image_1699051.jpg"
            // billingAddress
            // shippingAddress
            description="ทุกอย่าง 20 บาท"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
          >
            <button style={{
                border: "none",
                width: 220,
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                cursor: "pointer"
            }}>
                Pay Now
            </button>
          </StripeCheckout>
        )}
    </div>
  )
}

export default Pay