import React from 'react'
import { useParams } from 'react-router-dom';
import "../../style/board.scss";

const BDitem = () => {
  const {id} = useParams();
  return (
    <div className='BDitem'>
      <h3>title</h3>
      <p>content</p>
      <button>
        수정하기
      </button>
      <button>
        삭제하기
      </button>
    </div>
  )
}

export default BDitem