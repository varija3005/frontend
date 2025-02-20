import React, { useEffect, useRef, useState } from 'react'
import Menu from '../../Components/Menu/Menu'
import LoginIcon from '../../Components/LoginIcon/LoginIcon'
import BackButton from '../../Components/BackButton/BackButton';
import './Cart.Styles.scss'
import setAuthToken from  '../../utils/setAuthToken'
import axios from 'axios';
import { MdOutlineDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';
import { IoIosClose } from 'react-icons/io'
import Input from '../../Components/Input/Input';


const Cart = () => {
  const [cart, setCart] = useState([])
  const [update, setUpdate] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [phone, setPhone] = useState('')

  const dialogRef = useRef()
  console.log(cart)

  useEffect(() => {
    const token = localStorage.token
    setAuthToken(JSON.parse(token));
    axios.get('https://ricehouse.in/backend/api/cart/')
    .then(res => {
      setCart(res.data)
    })
    .catch(err => {
      toast("Failed to Load Cart", { 
        type: "error", 
        isLoading: false,
        autoClose: 5000
      });
    })
  }, [update])

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const totalQuantity = cart.products ? 
    cart.products.reduce((acc, cur) => {
      return acc + cur.quantity
    }, 0)
    : 0

  const openDialog = () => setIsOpen(true) 
  const closeDialog = () => setIsOpen(false) 

  const handlePhoneChange = e => {
    setPhone(e.target.value)
  }
  const handleAddress1Change = e => {
    setAddress1(e.target.value)
  }
  const handleAddress2Change = e => {
    setAddress2(e.target.value)
  }

  const handleCheckout = async () => {
    setIsOpen(false)
    if(address1, phone){
      try{
        const response = await axios.post('https://ricehouse.in/backend/api/order', {amount: cart.bill, cart});
        const { id: order_id, amount, currency } = response.data;

        const options = {
          key: "rzp_test_7XKpFANzSY8VcJ", // Replace with your RazorPay Key ID
          amount: amount,
          currency: currency,
          name: "Rice House",
          description: "Test Transaction",
          order_id: order_id,
          handler: async (response) => {
              alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
              await axios.post('https://ricehouse.in/backend/api/order/create', {cart, paymentId: response.razorpay_payment_id, phone, address: address1+address2})
              .then(res => {
                setUpdate(prevUpdate => !prevUpdate);
                toast("Order Successfully Placed!", {
                  type: 'success',
                  isLoading: false,
                  autoClose: 5000
                })
              })
              .catch(err => {
                toast("Failed to Update Order", { 
                  type: "error", 
                  isLoading: false,
                  autoClose: 5000
                });
              })
          },
          prefill: {
              name: "John Doe",
              email: "john.doe@example.com",
              contact: "9999999999",
          },
          config: {
            display: {
              blocks: {
                utib: {
                  name: 'Pay with UPI',
                  instruments: [
                    {method: 'upi'}
                  ]
                }
              },
              sequence: ["block.utib", 'block.banks'],
              preferences: {
                show_default_blocks: true,
              },
            },
          },
          theme: {
              color: "#3399cc",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.description);

          paymentObject.close()
        })
        paymentObject.open();
      } catch (error) {
        console.error('Payment initiation failed:', error);
      }
    } else {
      toast("Please enter address and phone number", { 
        type: "error", 
        isLoading: false,
        autoClose: 5000
      });
    }
  }

  return (
    <>
      <div className='cart-page'>
        <div className='nav'>
          <BackButton />
          <Menu color='dark' />
          <LoginIcon color='dark' />
        </div>
        <div className='content'>
          {
            cart.products && cart.products.length ? 
            <div className='item-list'>
              {
                cart.products.map(prod => <CartCard key={prod.prodId} totalQuantity={totalQuantity} update={update} setUpdate={setUpdate} prod={prod} />)
              }
            </div>
            :
            <div className='empty'>Cart is Empty</div>
          }
          <div className='total-section' style={{display: cart.products && cart.products.length ? 'flex' : 'none'}}>
            <span className='total'>Total</span>
            <span className='amt'>₹ {cart.bill}</span>
          </div>
          <button className='order-button' style={{display: cart.products && cart.products.length ? 'flex' : 'none'}} onClick={openDialog}>Buy Now</button>
        </div>
      </div>
      <div className='footer'>
        Made to Perfection by <a href='https://www.linkedin.com/in/yashwanth-kolli-b8b413208/' target='_blanck' rel='noreferrer'>Yashwanth Kolli</a> 
      </div>

      <dialog className='address-dialog' ref={dialogRef} onCancel={closeDialog}>
        <div className='content'>
          <Input
            value={address1}
            placeholder='Address Line 1 *'
            type='text'
            onChange={handleAddress1Change}
            white
          />
          <Input
            value={address2}
            placeholder='Address Line 2'
            type='text'
            onChange={handleAddress2Change}
            white
          />
          <Input
            value={phone}
            placeholder='Phone Number *'
            type='text'
            onChange={handlePhoneChange}
            white
          />
          <button className='order-button' onClick={handleCheckout}>Checkout</button>
        </div>
        <div className='close' onClick={closeDialog}>
          <IoIosClose />
        </div>
    </dialog>
    </>
  )
}

const CartCard = ({prod, totalQuantity, setUpdate, update}) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`https://ricehouse.in/backend/api/prod/${prod.prodId}`)
    .then(res => setProduct(res.data))
    .catch(err => {
      toast("Failed to Load Cart", { 
        type: "error", 
        isLoading: false,
        autoClose: 5000
      });
    })
  }, [])

  const handleDelete = async (id) => {
    const token = localStorage.token
    setAuthToken(JSON.parse(token));
    await axios.post('https://ricehouse.in/backend/api/cart/delete', { prodId: id })
    .then(res => {
      setUpdate(!update)
    })
    .catch(err => {
      toast("Failed to Delete", { 
        type: "error", 
        isLoading: false,
        autoClose: 5000
      });
    })
  }

  return(
    <div className='cart-card'>
      <div className='img-container'>
        <img src={product.imgUrl} alt={product.prodId} />
      </div>
      <div className='title'>
        <h1 className='heading'>{product.name}</h1>
        <h4 className='sub-heading'>₹ {totalQuantity < 10 ? product.retail : product.wholesale}</h4>
      </div>
      <div className='quantity'>
        {prod.quantity}
      </div>
      <div className='prices'>
        ₹ { totalQuantity < 10 ? prod.retail*prod.quantity : prod.wholesale*prod.quantity }
      </div>
      <div className='delete-icon' onClick={() => handleDelete(prod.prodId)}><MdOutlineDeleteForever /></div>
    </div>
  )
}

export default Cart