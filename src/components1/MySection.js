import React from 'react';

function MySection(props) {

    console.log("MySection.js... MySection component");

    return (
        <>
            <section>
                <article>
                    <h1>React 학습</h1>
                    <p>Props</p>
                    <p>state</p>
                    <p>Component</p>
                    <hr></hr>
                </article>
            </section> 
            <hr/>
        </>
    );
}

function MySection2() {
    return(
        <p>MySection2 컴포넌트</p>
    );
}

// export default MySection;
//하나의 컴포넌트만 default 가능하므로..
//MySection은 default로 내보내겠다는 의미
export {MySection2, MySection as default}