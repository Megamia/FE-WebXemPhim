// import {
//     PayPalScriptProvider,
//     PayPalButtons,
//     usePayPalScriptReducer
//   } from "@paypal/react-paypal-js";
  
//   const style = { "layout": "vertical" };
  
//   function createOrder(selectedOption) {
//     return fetch("http://order.id/api/create-order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         cart: [
//           {
//             sku: "1blwyeo8",
//             quantity: 2,
//           },
//         ],
//         amount: selectedOption, // Giá trị từ radio button
//       }),
//     })
//       .then((response) => response.json())
//       .then((order) => {
//         return order.id;
//       });
//   }
  
//   function onApprove(data) {
//     return fetch("http://order.id/api/capture-order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         orderID: data.orderID,
//       }),
//     })
//       .then((response) => response.json())
//       .then((orderData) => {
//         // Your code here after capturing the order
//       });
//   }
  
//   const ButtonWrapper = ({ selectedOption }) => {
//     const [{ isPending }] = usePayPalScriptReducer();
  
//     return (
//       <>
//         {isPending && <div className="spinner" />}
//         <PayPalButtons
//           style={style}
//           disabled={false}
//           forceReRender={[style]}
//           fundingSource={undefined}
//           createOrder={() => createOrder(selectedOption)}
//           onApprove={onApprove}
//         />
//       </>
//     );
//   }
  
//   const Paypal = ({ selectedOption }) => {
//     return (
//       <PayPalScriptProvider options={{ clientId: "test", components: "buttons", currency: "USD" }}>
//         <ButtonWrapper selectedOption={selectedOption} />
//       </PayPalScriptProvider>
//     );
//   };
  
//   export default Paypal;