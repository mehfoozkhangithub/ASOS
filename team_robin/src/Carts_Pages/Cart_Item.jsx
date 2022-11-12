// import { useDispatch } from "react-redux";
// import Navbar from "../Navbar/Navbar";
// import { Link } from "react-router-dom";
// const CartItem = ({ item }) => {
//   const dispatch = useDispatch();
//   const [flag, setFlag] = useState(false);
//   const sizeRef = useState(false);
//   const location = useLocation();
//   const quantityRef = useRef(item.quantity);
//   let handleUpdate = () => {
//     dispatch(updateCartApi(item.id.quantityRef.current, sizeRef.current));
//     setFlag(!flag);
//   };
//   let from = {
//     pathname: location.pathname,
//   };
//   return (
//     <>
//     <Navbar/>
//       <div key={item.id} className={styles.leftDivTow}>
//         <img className={styles.imgPrd} src={item.Image} alt="cart" />

//         <div className={styles.itemDiv}>
//           <div className={styles.itemDetail}>
//             <Link to={`/productdetails/${item.id}`} state={from}>
//               <p className={styles.price1}>{`£${item.price}`}</p>
//               <p className={styles.name1}>{item.productName}</p>
//             </Link>
//             <div className={styles.colorSize}>
//               {" "}
//               <span>{item.color}</span>
//               <p className={styles.size}>
//                 <select
//                   className={styles.selectSize}
//                   onChange={(e) => {
//                     sizeRef.current = e.target.value;
//                     setFlag(true);
//                   }}
//                 >
//                   <option hidden>{item.size}</option>
//                   <option value={"2XS"}>2XS</option>
//                   <option value={"XS"}>XS</option>
//                   <option value={"S"}>S</option>
//                   <option value={"M"}>M</option>
//                   <option value={"L"}>L</option>
//                   <option value={"XL"}>XL</option>
//                 </select>
//               </p>
//               <span>
//                 Qty
//                 <select
//                   className={styles.selectQuantity}
//                   onChange={(e) => {
//                     quantityRef.current = Number(e.target.value);
//                     setFlag(true);
//                   }}
//                 >
//                   <option value={"1"}>1</option>
//                   <option value={"2"}>2</option>
//                   <option value={"3"}>3</option>
//                   <option value={"4"}>4</option>
//                   <option value={"5"}>5</option>
//                 </select>
//               </span>
//             </div>
//             <p className={styles.later}>Save for later</p>
//           </div>
//           <div>
//             {" "}
//             <CloseButton
//               size="lg"
//               onClick={() => {
//                 dispatch(removeCartApi(item.id));
//               }}
//             />
//           </div>
//         </div>
//       </div>
//       <div>
//         {flag && (
//           <div className={styles.cancelUpdate}>
//             <button className={styles.update} onChange={handleUpdate}>
//               UPDATE
//             </button>
//             <button
//               className={styles.cancel}
//               onClick={() => {
//                 setFlag(!flag);
//                 dispatch(getItemApi());
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartItem;
