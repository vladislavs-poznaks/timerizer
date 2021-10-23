import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import Layout from "./Shared/Layout";

createInertiaApp({
    resolve: async name => {
        let page = await(require(`./Pages/${name}`)).default
        page.layout ??= page => <Layout children={page}/>;
        return page
    },
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})

InertiaProgress.init({
    color: '#DC2626'
})
