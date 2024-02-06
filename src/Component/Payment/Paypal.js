import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = (props) => {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderID) => {
    setPaidFor(true);
  };

  if (paidFor) {
    alert("Cảm ơn đã donate");
  }

  if (error) {
    alert(error);
  }

  return (
    <PayPalScriptProvider>
      <PayPalButtons
        onClick={(data, actions) => {
          const hasAlready = false;
          if (hasAlready) {
            setError("Đã tồn tại");
            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order", order);
          handleApprove(data.orderID);
        }}
        onCancel={() => { }}
        onError={(err) => {
          setError(err);
          console.log("Failed");
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;