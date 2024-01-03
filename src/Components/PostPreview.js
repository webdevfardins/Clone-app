import React from 'react'
import { Link } from 'react-router-dom'
export default function PostPreview(props) {
  return (
    <div>
       <div className="post-preview">
              <Link to="#">
                <button onClick={props.delete}className='btn btn-danger'>
                  delete
                </button>
                <h2 className="post-title">
                 {props.title}
                </h2>
                <h3 className="post-subtitle">
                  {props.body}
                </h3>
              </Link>
              
            </div>
            <hr />
    </div>
  )
}
