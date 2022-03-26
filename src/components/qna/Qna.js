import React from 'react';
import './Qna.css'

const Qna = ({ qna }) => {
    return (
        <div className='pt-5'>
            {
                qna.map((item, index) => (
                    <div className="qna_sets py-4" key={item._id}>
                        <h2 className='text-uppercase'> {index+1}. {item.question} </h2>
                        <p className='text-justify'> {item.answer} </p>
                    </div>
                ))
            }

        </div>
    );
};

export default Qna;