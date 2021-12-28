import React from 'react'
import {Link} from "@inertiajs/inertia-react";
import {ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from "@heroicons/react/outline";

const Pagination = ({links}) => {

    const formatLabel = (label) => {
        if (label.includes('Previous')) {
            return <ChevronDoubleLeftIcon className="w-5 h-5" />
        }

        if (label.includes('Next')) {
            return <ChevronDoubleRightIcon className="w-5 h-5" />
        }

        return label
    }

    return (
        <div className="flex justify-between items-center space-x-2">
            {links.map(link => {
                return (link.url
                    ? <Link key={link.label} href={link.url} className={`hover:text-purple-800 ${link.active ? 'font-bold text-purple-800' : ''}`}>{formatLabel(link.label)}</Link>
                    : <span key={link.label} className="pointer-events-none">{formatLabel(link.label)}</span>)
            })}
        </div>
    );
};

export default Pagination;
