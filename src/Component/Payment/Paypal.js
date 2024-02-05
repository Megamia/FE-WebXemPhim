import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const Paypal = ({ selectedOption }) => {
  const [{ isPending }] = usePayPalScriptReducer();
  const [hasChanged, setHasChanged] = React.useState(false);

  useEffect(() => {
    // Đặt cờ để kiểm tra sự thay đổi trong selectedOption
    setHasChanged(true);
  }, [selectedOption]);

  useEffect(() => {
    const createOrder = async () => {
      try {
        if (hasChanged && !isPending) {
          const response = await fetch("http://localhost:4000/api/paypal/donate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: selectedOption.toString(),
              }),
          });

          const data = await response.json();

          // Xử lý URL hoặc chuyển hướng nếu cần
          console.log('URL for approval:', data.approvalUrl);

          // Đặt lại cờ
          setHasChanged(false);
        }
      } catch (error) {
        console.error('Có lỗi khi gửi yêu cầu đến server:', error.message);
      }
    };

    createOrder();
  }, [selectedOption, isPending, hasChanged]);

  return (
    <PayPalScriptProvider options={{ clientId: "Ac9K4i7QCNP72Tt9H5W02MjClbQxKDPTLQGMjkltRGInHipe139bwdFZILDbE1PyDm90A5HnHNupLrf_", currency: "USD" }}>
      {isPending && <div className="spinner">Đang xử lý thanh toán...</div>}
      <PayPalButtons
        style={{ layout: "vertical" }}
        disabled={isPending}
        forceReRender={[{ layout: "vertical" }]}
        fundingSource={undefined}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;
