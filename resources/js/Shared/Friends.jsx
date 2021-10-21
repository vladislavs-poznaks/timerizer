import React from 'react'
import {usePage} from "@inertiajs/inertia-react";

const Friends = () => {
    const { auth } = usePage().props

    return (
        <div className="w-1/5 bg-gray-700 rounded-2xl px-8 py-6">
            <h2 className="font-bold text-lg mb-4 block">{auth.check ? 'Friends' : 'Suggestions'}</h2>
        </div>
    );
}

export default Friends;
