import React from 'react'
import Layout from "../Shared/Layout";

const Home = ({name}) => {
    let foo = "React";
    const bar = "TypeScript";

    return (
        <div>
            <h1>
                Hello {foo} + {bar} + {name}
            </h1>
        </div>
    );
};

Home.layout = page => <Layout children={page} />

export default Home;
