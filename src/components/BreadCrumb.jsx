import React from 'react'
import { Link } from 'react-router-dom';
import propTypes from "prop-types";

export default function BreadCrumb({list}) {
  return (
    <>
        <section className="bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                <ul className="breadcrumb flex gap-2">
                    {list?.map?.((item, index) => {
                        const arias = index === list?.length ? {"aria-label" : "current-page"} : {};
                        return(
                            <li className='text-gray-700 hover:text-gray-400 font-medium' key={item.url}>
                                <Link to={item.url} {...arias}>
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    </>
  )
}

BreadCrumb.propTypes={
    list: propTypes.array.isRequired,
}