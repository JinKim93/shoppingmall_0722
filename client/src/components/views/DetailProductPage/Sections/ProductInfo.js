import React, {useState} from 'react'
import { Button, Descriptions } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../_actions/user_actions';
import './DetailProductPage.css';
import Swal from 'sweetalert2';
import ToggleImages from "../../../ToggleImages/ToggleImages"


function ProductInfo(props) {
    const dispatch = useDispatch();

    const clickHandler = () => {
        //필요한 정보를 Cart 필드에다가 넣어 준다. 상품 id, 개수, 가격, 언제 장바구니에 넣었는지 날짜정보
        dispatch(addToCart(props.detail._id))

    }


    const [count, setCount] = useState(0); /* 수량버튼에 사용할 것  padding: '3rem 4rem'*/
    //const [totalPrice, setTotalPrice] = useState(0) /* 수량버튼 결과에 따른 가격 변화 */ 
    const onPlus = () => {
        setCount(count + 1);
    }
    const onMinus = () => {
        setCount((count) => (count <= 0 ? 0 : count - 1));
    }

    const [active, setActive] = useState(false); /** 하트 좋아요에 이용 */
    const handleChangeActive = () => {
        setActive((previousHeart) => {
            return !previousHeart;
        });
    };

    const addCartAlert = () => { // 장바구니 알림
        Swal.fire({
            title: "장바구니에 잘 담겼어요!", 
            icon: "success",
            showCancelButton: true,
            confirmButtonText:"장바구니 이동",
            cancelButtonText:"쇼핑 계속하기",
        })
        .then((result) => {
            
            if(result.isConfirmed){
                //dispatch(addToCart(props.detail._id)) // 장바구니에 넣어주기
                 clickHandler();
                window.location.href="/user/cart"; // 장바구니 페이지로 바꿔주기
                
            }
            else {
                 clickHandler();
                //dispatch(addToCart(props.detail._id)) // 장바구니에 넣어주기
            }
        })
    };


    return (
        <div>
            <Descriptions title="상품정보">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>
            <br />
            <br />
            <br />
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to Cart
                </Button>
            </div> */}

            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h3>가격</h3><h3>{props.detail.price} 원</h3>
            </div>
            
            {props.detail.views}
            {/* 수량 +/- 버튼 */}
            <div className='product_count'>
                <button className='count_plus' onClick={onPlus}>+</button>
                <span className='count_result'>{count}</span>
                <button className='count_minus' onClick={onMinus}>-</button>
            </div>
                        
            {/* 구매, 장바구니 버튼 */}
            <div className='product_btn_container' style={{display:'flex', margin:'1rem 0'}}>
                <button className='product_btn'>바로구매</button> {/*<Link to='/PaymentPage'></Link>*/}
                <button className='product_btn' onClick={addCartAlert} >장바구니 추가</button>
                {/* Heart Icon 추가하기 */}
                <div className='product_heart'><ToggleImages active={active} handleChangeActive={handleChangeActive} /></div>
            </div>



            
        </div>
    )
}

export default ProductInfo
